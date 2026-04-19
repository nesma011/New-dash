import { useEffect, useState } from 'react'
import { getRoadmap } from '../../apis/roadmap'
import PlaceholderBlock from '../atoms/PlaceholderBlock'
import SectionTitle from '../atoms/SectionTitle'
import RoadmapActivityItem from '../molecules/RoadmapActivityItem'
import RoadmapDateCard from '../molecules/RoadmapDateCard'

function RoadmapPanel() {
  const [roadmap, setRoadmap] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRoadmap() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getRoadmap(controller.signal)
        setRoadmap(data?.roadmap ?? null)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading roadmap.')
          setRoadmap(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadRoadmap()

    return () => controller.abort()
  }, [])

  return (
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <SectionTitle>{roadmap?.title || "What's on the road?"}</SectionTitle>

      <div className="mt-5 flex items-center gap-4">
        {isLoading
          ? Array.from({ length: 7 }).map((_, index) => (
              <PlaceholderBlock key={index} className="h-14 w-12 rounded-2xl" />
            ))
          : roadmap?.weekDates?.map((dateItem) => (
              <RoadmapDateCard key={dateItem.fullDate} item={dateItem} />
            ))}
      </div>

      <div className="mt-6 space-y-5">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <PlaceholderBlock key={index} className="h-12 rounded-2xl" />
            ))
          : roadmap?.items?.map((item) => (
              <RoadmapActivityItem key={item.id} item={item} />
            ))}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && !roadmap ? (
          <p className="text-sm text-slate-400">No roadmap data available.</p>
        ) : null}
      </div>
    </section>
  )
}

export default RoadmapPanel
