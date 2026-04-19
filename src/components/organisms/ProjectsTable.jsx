import { useEffect, useState } from 'react'
import { getProjectSpendings } from '../../apis/spendings'
import SectionTitle from '../atoms/SectionTitle'
import TableRow from '../molecules/TableRow'

function ProjectsTable() {
  const [projectSpendings, setProjectSpendings] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProjectSpendings() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getProjectSpendings(controller.signal)
        setProjectSpendings(data?.projectSpendings ?? null)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading spendings.')
          setProjectSpendings(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadProjectSpendings()

    return () => controller.abort()
  }, [])

  return (
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <SectionTitle>{projectSpendings?.title || 'Project Spendings'}</SectionTitle>
      <div className="mt-5 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 pb-3 text-xs text-slate-400">
        <span>Manager</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
      </div>

      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index} isLoading />
          ))
        : projectSpendings?.items?.map((item) => <TableRow key={item.id} item={item} />)}

      {!isLoading && error ? <p className="pt-4 text-sm text-rose-500">{error}</p> : null}
      {!isLoading && !error && !projectSpendings ? (
        <p className="pt-4 text-sm text-slate-400">No spendings data available.</p>
      ) : null}
    </section>
  )
}

export default ProjectsTable
