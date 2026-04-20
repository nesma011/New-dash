import MainSummaryCard from './MainSummaryCard'
import OverviewPanels from './OverviewPanels'
import ProjectsTable from './ProjectsTable'

function InsightsSection({ searchQuery, statusFilter }) {
  return (
    <div className="space-y-4 p-4">
      <MainSummaryCard />
      <OverviewPanels searchQuery={searchQuery} />
      <ProjectsTable searchQuery={searchQuery} statusFilter={statusFilter} />
    </div>
  )
}

export default InsightsSection
