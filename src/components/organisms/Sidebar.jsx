import LogoMark from '../atoms/LogoMark'
import NavItem from '../molecules/NavItem'

function Sidebar() {
  return (
    <aside className="border-r border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <LogoMark />
        <div>
          <p className="font-['Space_Grotesk'] text-base font-semibold tracking-tight text-slate-900">ByeWind</p>
        </div>
      </div>

      <div className="mt-8 flex gap-6 text-sm text-slate-400">
        <span>Favorites</span>
        <span>Recently</span>
      </div>

      <nav className="mt-4 space-y-1">
        <NavItem label="Overview" active />
        <NavItem label="Projects" />
      </nav>

      <p className="mt-8 px-3 text-sm text-slate-400">Dashboards</p>
      <nav className="mt-3 space-y-1">
        <NavItem label="Overview" active />
        <NavItem label="eCommerce" />
        <NavItem label="Projects" />
      </nav>

      <p className="mt-8 px-3 text-sm text-slate-400">Pages</p>
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

      <div className="mt-10 px-3 text-sm text-indigo-400">snowUI</div>
    </aside>
  )
}

export default Sidebar
