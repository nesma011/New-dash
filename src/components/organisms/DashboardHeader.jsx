import Button from '../atoms/Button'
import IconBadge from '../atoms/IconBadge'
import Breadcrumbs from '../molecules/Breadcrumbs'

function DashboardHeader() {
  return (
    <header className="border-b border-slate-200 p-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-slate-500">
            <IconBadge>◫</IconBadge>
            <IconBadge>☆</IconBadge>
          </div>
          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden h-10 min-w-56 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-400 md:flex">
            Search
          </div>
          <IconBadge>☼</IconBadge>
          <IconBadge>⟳</IconBadge>
          <IconBadge>◌</IconBadge>
          <IconBadge>◫</IconBadge>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div />
        <div className="flex items-center gap-3">
          <Button variant="secondary">+ Add User</Button>
          <Button variant="secondary">Add Target</Button>
          <IconBadge>•••</IconBadge>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
