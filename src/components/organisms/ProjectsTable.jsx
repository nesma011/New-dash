import SectionTitle from '../atoms/SectionTitle'
import TableRow from '../molecules/TableRow'

function ProjectsTable() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <SectionTitle>Project Spendings</SectionTitle>
      <div className="mt-5 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 pb-3 text-xs text-slate-400">
        <span>Manager</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </section>
  )
}

export default ProjectsTable
