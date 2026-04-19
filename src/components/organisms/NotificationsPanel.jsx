import { useEffect, useState } from 'react'
import { getNotifications } from '../../apis/notifications'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'
import NotificationItem from '../molecules/NotificationItem'

function NotificationsPanel() {
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

  return (
    <section>
      <SectionTitle className="text-lg">Notifications</SectionTitle>

      <div className="mt-5 space-y-5">
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
          : notifications.map((item) => <NotificationItem key={item.id} item={item} />)}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && notifications.length === 0 ? (
          <p className="text-sm text-slate-400">No notifications available.</p>
        ) : null}
      </div>
    </section>
  )
}

export default NotificationsPanel
