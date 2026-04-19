import { useEffect, useState } from 'react'
import { getActivities } from '../../apis/activities'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'
import ActivityItem from '../molecules/ActivityItem'

function ActivitiesPanel() {
  const [activities, setActivities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadActivities() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getActivities(controller.signal)
        setActivities(data?.activities ?? [])
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading activities.')
          setActivities([])
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadActivities()

    return () => controller.abort()
  }, [])

  return (
    <section>
      <SectionTitle className="text-lg">Activities</SectionTitle>

      <div className="mt-5 space-y-5">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <TextLine width="w-36" />
                  <TextLine width="w-24" className="mt-2" />
                </div>
              </div>
            ))
          : activities.map((item) => <ActivityItem key={item.id} item={item} />)}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && activities.length === 0 ? (
          <p className="text-sm text-slate-400">No activities available.</p>
        ) : null}
      </div>
    </section>
  )
}

export default ActivitiesPanel
