import IconBadge from '../atoms/IconBadge'
import SearchField from '../atoms/SearchField'
import Breadcrumbs from '../molecules/Breadcrumbs'

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6v5h-5" />
      <path d="M4 18v-5h5" />
      <path d="M6.8 9A7 7 0 0 1 18 7l2 4" />
      <path d="M17.2 15A7 7 0 0 1 6 17l-2-4" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18h8" />
      <path d="M10 20a2 2 0 0 0 4 0" />
      <path d="M18 16H6c1.1-1.1 1.5-2.7 1.5-4.5V10a4.5 4.5 0 1 1 9 0v1.5c0 1.8.4 3.4 1.5 4.5Z" />
    </svg>
  )
}

function LayoutIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="6" height="14" />
      <rect x="12" y="5" width="8" height="14" />
    </svg>
  )
}

function DashboardHeader({
  isDarkMode,
  onToggleDarkMode,
  searchQuery,
  onSearchChange,
  onOpenSidebar,
}) {
  return (
    <header className="border-b border-slate-200 px-5 py-4 dark:border-[#3b3b3b]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-3 text-slate-500 dark:text-[#a7a7a7]">
          <IconBadge
            aria-label="Open sidebar"
            onClick={onOpenSidebar}
            className="lg:hidden"
          >
            <MenuIcon />
          </IconBadge>
          <IconBadge aria-label="Grid" className="bg-transparent dark:bg-transparent dark:border-transparent">[]</IconBadge>
          <IconBadge aria-label="Favorite" className="bg-transparent dark:bg-transparent dark:border-transparent">*</IconBadge>
          <Breadcrumbs />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2.5">
          <SearchField
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search dashboard"
          />
          <IconBadge aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={onToggleDarkMode} title={isDarkMode ? 'Light mode' : 'Dark mode'} className="bg-transparent dark:bg-transparent dark:border-transparent">
            <SunIcon />
          </IconBadge>
          <IconBadge aria-label="Refresh" className="bg-transparent dark:bg-transparent dark:border-transparent">
            <RefreshIcon />
          </IconBadge>
          <IconBadge aria-label="Notifications" className="bg-transparent dark:bg-transparent dark:border-transparent">
            <BellIcon />
          </IconBadge>
          <IconBadge aria-label="Layout" className="bg-transparent dark:bg-transparent dark:border-transparent">
            <LayoutIcon />
          </IconBadge>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
