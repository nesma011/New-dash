import { useEffect, useState } from 'react'
import { getDashboardSummary } from '../../apis/summary'
import Avatar from '../atoms/Avatar'
import StatColumn from '../molecules/StatColumn'

function formatCurrency(amount, currency) {
  if (amount == null || !currency) {
    return undefined
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatDate(date) {
  if (!date) {
    return undefined
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

function SnowflakeMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#6c8dff] dark:bg-[#404040] dark:text-[#8aa1ff]">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5v19M7 5.5l10 13M17 5.5 7 18.5M3.5 8h17M3.5 16h17" />
      </svg>
    </div>
  )
}

function MainSummaryCard() {
  const [summary, setSummary] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const hasSummary = Boolean(summary)

  useEffect(() => {
    const controller = new AbortController()

    async function loadSummary() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getDashboardSummary(controller.signal)
        setSummary(data?.dashboardSummary ?? null)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading summary.')
          setSummary(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadSummary()

    return () => controller.abort()
  }, [])

  return (
    <section className="rounded-[30px] border border-slate-200 bg-[#f8f8fb] px-6 py-7 dark:border-[#3d3d3d] dark:bg-[#343434]">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-[18px] font-semibold text-[#171717] dark:text-[#f4f4f4]">
            {summary?.projectName || 'SnowUI'}
          </h2>

          <div className="mt-6 grid gap-0 md:grid-cols-4">
            <div className="pr-7">
              <p className="text-[14px] text-[#5f5f5f] dark:text-[#a0a0a0]">Status</p>
              {isLoading ? (
                <div className="mt-3 h-8 w-32 rounded-xl bg-[#d9dcff] dark:bg-[#5d58a8]" />
              ) : error || !hasSummary ? (
                <p className="mt-3 text-sm text-rose-500">{error || 'No summary data available.'}</p>
              ) : (
                <div className="mt-3 inline-flex items-center overflow-hidden rounded-xl bg-[#d9dcff] text-[13px] font-medium text-[#171717] dark:bg-[#6b63ff]/35 dark:text-white">
                  <span className="bg-[#9f9bff] px-2.5 py-1.5 text-white dark:bg-[#8f89ff]">In Progress</span>
                  <span className="px-2.5 py-1.5">/</span>
                  <span className="px-2.5 py-1.5">{summary?.status?.progress}%</span>
                </div>
              )}
            </div>

            <div className="border-l border-slate-200 px-7 dark:border-[#4b4b4b]">
              <StatColumn
                title="Total Tasks"
                value={
                  hasSummary
                    ? `${summary?.totalTasks?.completed} / ${summary?.totalTasks?.total}`
                    : undefined
                }
              />
            </div>

            <div className="border-l border-slate-200 px-7 dark:border-[#4b4b4b]">
              <StatColumn
                title="Due Date"
                value={hasSummary ? formatDate(summary?.dueDate) : undefined}
              />
            </div>

            <div className="border-l border-slate-200 px-7 dark:border-[#4b4b4b]">
              <StatColumn
                title="Budget Spent"
                value={
                  hasSummary
                    ? formatCurrency(summary?.budgetSpent, summary?.currency)
                    : undefined
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between gap-12">
          <SnowflakeMark />

          <div className="flex -space-x-2">
            {summary?.team?.map((member) => (
              <Avatar
                key={member.id}
                src={member.avatar}
                alt={member.name}
                label={member.name?.charAt(0)}
                className="h-7 w-7"
              />
            ))}
            {summary?.extraMembers ? (
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[#eceef8] text-[10px] text-[#3c3c3c] dark:border-[#2b2b2b] dark:bg-[#515151] dark:text-white">
                +{summary.extraMembers}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSummaryCard
