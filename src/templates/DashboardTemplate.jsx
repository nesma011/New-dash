import { useEffect, useState } from 'react'
import DashboardHeader from '../components/organisms/DashboardHeader'
import ContentTabs from '../components/organisms/ContentTabs'
import InsightsSection from '../components/organisms/InsightsSection'
import MetricsSection from '../components/organisms/MetricsSection'
import RightRail from '../components/organisms/RightRail'
import Sidebar from '../components/organisms/Sidebar'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function DashboardTemplate() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <main className="min-h-screen bg-[#f3f4f8] p-1.5 text-slate-900 dark:bg-[#252525] dark:text-[#f5f5f5] md:p-3">
      <div className="mx-auto max-w-[1480px]">
        <section className="overflow-hidden rounded-[28px] border border-white bg-[#fcfcfd] shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:border-[#3a3a3a] dark:bg-[#2b2b2b] dark:shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
          <div className="grid min-h-[calc(100vh-1.5rem)] gap-0 xl:grid-cols-[215px_minmax(0,1fr)_235px]">
            <Sidebar />

            <section className="bg-white dark:bg-[#2b2b2b]">
              <DashboardHeader
                isDarkMode={isDarkMode}
                onToggleDarkMode={() => setIsDarkMode((current) => !current)}
              />
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
