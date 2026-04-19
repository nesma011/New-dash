import Button from '../atoms/Button'
import IconBadge from '../atoms/IconBadge'
import Breadcrumbs from '../molecules/Breadcrumbs'

function ThemeToggleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" />
    </svg>
  )
}

function DashboardHeader({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="border-b border-slate-200 p-6 dark:border-slate-800">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <IconBadge aria-label="Grid">[]</IconBadge>
            <IconBadge aria-label="Favorite">*</IconBadge>
          </div>
          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden h-10 min-w-56 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 md:flex">
            Search
          </div>
          <IconBadge
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleDarkMode}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            <ThemeToggleIcon />
          </IconBadge>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div />
        <div className="flex items-center gap-3">
          <Button variant="secondary">+ Add User</Button>
          <Button variant="secondary">Add Target</Button>
          <IconBadge aria-label="More">...</IconBadge>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
