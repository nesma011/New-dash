import LogoMark from '../atoms/LogoMark'
import NavItem from '../molecules/NavItem'

function Sidebar() {
  return (
    <aside className="border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)]">
      <div className="flex items-center gap-3">
        <LogoMark />
        <div>
          <p className="font-['Space_Grotesk'] text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">ByeWind</p>
        </div>
      </div>

      <div className="mt-8 inline-flex rounded-xl bg-slate-100 p-1 text-sm dark:bg-slate-800/80">
        <span className="rounded-lg px-3 py-1.5 text-slate-700 dark:text-slate-200">Favorites</span>
        <span className="rounded-lg px-3 py-1.5 text-slate-400 dark:text-slate-500">Recently</span>
      </div>

      <nav className="mt-4 space-y-1">
        <NavItem label="Overview" active />
        <NavItem label="Projects" />
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        <p className="px-3 text-sm text-slate-400 dark:text-slate-500">Dashboards</p>
      </div>
      <nav className="mt-3 space-y-1">
        <NavItem label="Overview" active />
        <NavItem label="eCommerce" />
        <NavItem label="Projects" />
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        <p className="px-3 text-sm text-slate-400 dark:text-slate-500">Pages</p>
      </div>
      <nav className="mt-3 space-y-1">
        <NavItem label="User Profile" />
        <NavItem label="Overview" />
        <NavItem label="Projects" />
        <NavItem label="Campaigns" />
        <NavItem label="Documents" />
        <NavItem label="Followers" />
        <NavItem label="Account" />
        <NavItem label="Corporate" />
        <NavItem label="Blog" />
        <NavItem label="Social" />
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-indigo-400 dark:border-slate-800 dark:bg-slate-800/70 dark:text-indigo-300">
        snowUI
      </div>
    </aside>
  )
}

export default Sidebar
