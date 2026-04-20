import LatestFilesPanel from './LatestFilesPanel'
import RoadmapPanel from './RoadmapPanel'

function OverviewPanels({ searchQuery }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <RoadmapPanel searchQuery={searchQuery} />
      <LatestFilesPanel searchQuery={searchQuery} />
    </div>
  )
}

export default OverviewPanels
