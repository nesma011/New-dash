import MainSummaryCard from './MainSummaryCard'
import OverviewPanels from './OverviewPanels'
import ProjectsTable from './ProjectsTable'

function InsightsSection() {
  return (
    <div className="space-y-4 p-4">
      <MainSummaryCard />
      <OverviewPanels />
      <ProjectsTable />
    </div>
  )
}

export default InsightsSection
