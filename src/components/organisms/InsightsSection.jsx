import MainSummaryCard from './MainSummaryCard'
import OverviewPanels from './OverviewPanels'
import ProjectsTable from './ProjectsTable'

function InsightsSection() {
  return (
    <div className="space-y-5 p-6">
      <MainSummaryCard />
      <OverviewPanels />
      <ProjectsTable />
    </div>
  )
}

export default InsightsSection
