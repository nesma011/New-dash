import Button from '../atoms/Button'
import IconBadge from '../atoms/IconBadge'
import SelectField from '../atoms/SelectField'
import TabItem from '../molecules/TabItem'

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Complete', label: 'Complete' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' },
]

function ContentTabs({ statusFilter, onStatusFilterChange }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-3 dark:border-[#3b3b3b] lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-5">
        <TabItem label="Overview" active />
        <TabItem label="Targets" />
        <TabItem label="Budget" />
        <TabItem label="Users" />
        <TabItem label="Files" />
        <TabItem label="Activity" />
        <TabItem label="Settings" />
      </div>

      <div className="flex flex-wrap items-center gap-2 lg:justify-end">
        <SelectField
          value={statusFilter}
          onChange={onStatusFilterChange}
          options={statusOptions}
          ariaLabel="Filter spendings by status"
          className="min-w-[150px]"
        />
        <Button variant="secondary">+ Add User</Button>
        <Button variant="secondary">Add Target</Button>
        <IconBadge aria-label="More">...</IconBadge>
      </div>
    </div>
  )
}

export default ContentTabs
