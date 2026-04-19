import LatestFilesPanel from './LatestFilesPanel'
import RoadmapPanel from './RoadmapPanel'

function OverviewPanels() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <RoadmapPanel />
      <LatestFilesPanel />
    </div>
  )
}

export default OverviewPanels
