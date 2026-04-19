import DashboardHeader from '../components/organisms/DashboardHeader'
import ContentTabs from '../components/organisms/ContentTabs'
import InsightsSection from '../components/organisms/InsightsSection'
import MetricsSection from '../components/organisms/MetricsSection'
import RightRail from '../components/organisms/RightRail'
import Sidebar from '../components/organisms/Sidebar'

function DashboardTemplate() {
  return (
    <main className="min-h-screen bg-[#f3f4f8] p-2 text-slate-900 md:p-4">
      <div className="mx-auto max-w-[1400px]">
        <section className="overflow-hidden rounded-[34px] border border-white bg-[#fcfcfd] shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <div className="grid min-h-[calc(100vh-2rem)] gap-0 xl:grid-cols-[240px_minmax(0,1fr)_270px]">
            <Sidebar />

            <section className="bg-white">
              <DashboardHeader />
              <ContentTabs />
              <MetricsSection />
              <InsightsSection />
            </section>

            <RightRail />
          </div>
        </section>
      </div>
    </main>
  )
}

export default DashboardTemplate
