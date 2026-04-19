import { useEffect, useState } from 'react'
import { getDashboardSummary } from '../../apis/summary'
import Avatar from '../atoms/Avatar'
import IconBadge from '../atoms/IconBadge'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'
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
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionTitle>{summary?.projectName || 'Project Summary'}</SectionTitle>

          <div className="mt-5 grid gap-5 md:grid-cols-4">
            <div className="space-y-3">
              <p className="text-sm text-slate-500">Status</p>

              {isLoading ? (
                <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-100 px-3 py-2">
                  <TextLine width="w-24" className="bg-indigo-300" />
                </div>
              ) : error || !hasSummary ? (
                <p className="text-sm text-rose-500">
                  {error || 'No summary data available.'}
                </p>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-100 px-3 py-2 text-sm font-medium text-slate-900">
                  <span>{summary?.status?.label}</span>
                  <span>/</span>
                  <span>{summary?.status?.progress}%</span>
                </div>
              )}
            </div>

            <StatColumn
              title="Total Tasks"
              value={
                hasSummary
                  ? `${summary?.totalTasks?.completed} / ${summary?.totalTasks?.total}`
                  : undefined
              }
            />

            <StatColumn
              title="Due Date"
              value={hasSummary ? formatDate(summary?.dueDate) : undefined}
            />

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

        <div className="flex flex-col items-end gap-10">
          <IconBadge className="h-10 w-10 rounded-2xl">
            {summary?.icon === 'snowflake' ? 'SF' : '*'}
          </IconBadge>

          <div className="flex -space-x-2">
            {summary?.team?.map((member) => (
              <Avatar
                key={member.id}
                src={member.avatar}
                alt={member.name}
                label={member.name?.charAt(0)}
              />
            ))}

            {summary?.extraMembers ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-slate-200 text-[10px] text-slate-600">
                +{summary.extraMembers}
              </div>
            ) : null}

            {isLoading ? <Avatar label="" /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSummaryCard
