import { useEffect, useState } from 'react'
import { getNotifications } from '../../apis/notifications'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'
import NotificationItem from '../molecules/NotificationItem'

function matchesNotification(item, searchQuery) {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  if (!normalizedQuery) {
    return true
  }

  return [item.title, item.timeAgo, item.type]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(normalizedQuery))
}

function NotificationsPanel({ searchQuery = '' }) {
  const [notifications, setNotifications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadNotifications() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getNotifications(controller.signal)
        setNotifications(data?.notifications ?? [])
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading notifications.')
          setNotifications([])
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadNotifications()

    return () => controller.abort()
  }, [])

  const filteredNotifications = notifications.filter((item) => matchesNotification(item, searchQuery))

  return (
    <section>
      <SectionTitle className="text-sm">Notifications</SectionTitle>

      <div className="mt-3 space-y-3.5">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <TextLine width="w-36" />
                  <TextLine width="w-24" className="mt-2" />
                </div>
              </div>
            ))
          : filteredNotifications.map((item) => <NotificationItem key={item.id} item={item} />)}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && notifications.length === 0 ? (
          <p className="text-sm text-slate-400">No notifications available.</p>
        ) : null}
        {!isLoading && !error && notifications.length > 0 && filteredNotifications.length === 0 ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">No notifications match the current keyword.</p>
        ) : null}
      </div>
    </section>
  )
}

export default NotificationsPanel
