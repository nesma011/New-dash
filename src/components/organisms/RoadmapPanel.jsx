import { useEffect, useState } from 'react'
import { getRoadmap } from '../../apis/roadmap'
import PlaceholderBlock from '../atoms/PlaceholderBlock'
import SectionTitle from '../atoms/SectionTitle'
import RoadmapActivityItem from '../molecules/RoadmapActivityItem'
import RoadmapDateCard from '../molecules/RoadmapDateCard'

function matchesRoadmapItem(item, searchQuery) {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  if (!normalizedQuery) {
    return true
  }

  return [item.title, item.timeAgo, item.type, item.user?.name]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(normalizedQuery))
}

function RoadmapPanel({ searchQuery = '' }) {
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

  const filteredItems = roadmap?.items?.filter((item) => matchesRoadmapItem(item, searchQuery)) ?? []

  return (
    <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 dark:border-[#3d3d3d] dark:bg-[#343434]">
      <SectionTitle>{roadmap?.title || "What's on the road?"}</SectionTitle>

      <div className="mt-4 flex items-center gap-2.5">
        {isLoading
          ? Array.from({ length: 7 }).map((_, index) => (
              <PlaceholderBlock key={index} className="h-14 w-12 rounded-2xl" />
            ))
          : roadmap?.weekDates?.map((dateItem) => (
              <RoadmapDateCard key={dateItem.fullDate} item={dateItem} />
            ))}
      </div>

      <div className="mt-4 space-y-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <PlaceholderBlock key={index} className="h-12 rounded-2xl" />
            ))
          : filteredItems.map((item) => (
              <RoadmapActivityItem key={item.id} item={item} />
            ))}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && !roadmap ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">No roadmap data available.</p>
        ) : null}
        {!isLoading && !error && roadmap && filteredItems.length === 0 ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">No roadmap items match the current keyword.</p>
        ) : null}
      </div>
    </section>
  )
}

export default RoadmapPanel
