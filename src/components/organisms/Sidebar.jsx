function ProfileBadge() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef2ff] dark:bg-[#3a3a3a]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-slate-900 dark:text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.2" />
        <path d="M6.5 18.2c1.4-2.8 3.3-4.2 5.5-4.2s4.1 1.4 5.5 4.2" />
      </svg>
    </div>
  )
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-[#b2b2b2] dark:text-[#727272]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

function BulletItem({ label }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[15px] text-[#1f1f1f] transition hover:bg-[#f7f7f8] dark:text-[#f0f0f0] dark:hover:bg-[#353535]"
    >
      <span className="h-2 w-2 rounded-full bg-[#cfcfcf] dark:bg-[#5d5d5d]" />
      <span>{label}</span>
    </button>
  )
}

function SidebarIcon({ type, active = false }) {
  const colorClass = active
    ? 'text-white dark:text-[#2b2b2b]'
    : 'text-[#1f1f1f] dark:text-[#f0f0f0]'

  if (type === 'overview') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16" />
        <path d="M12 12 17 7" />
      </svg>
    )
  }

  if (type === 'ecommerce') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8" />
        <path d="M9 4v2m6-2v2" />
      </svg>
    )
  }

  if (type === 'projects') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 7.5h6l1.5 2h9.5v8.5H3.5z" />
        <path d="M3.5 9.5V6.5h5" />
      </svg>
    )
  }

  if (type === 'profile') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4.5h12v15H6z" />
        <circle cx="12" cy="10" r="2.2" />
        <path d="M8.8 16.2c.8-1.7 1.9-2.5 3.2-2.5s2.4.8 3.2 2.5" />
      </svg>
    )
  }

  if (type === 'account') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 6h15v12h-15z" />
        <path d="M8 10.2A1.8 1.8 0 1 0 8 6.6a1.8 1.8 0 0 0 0 3.6Z" />
        <path d="M6.4 15.8c.6-1.2 1.5-1.8 2.6-1.8s2 .6 2.6 1.8" />
        <path d="M14 9h3.5M14 13h3.5" />
      </svg>
    )
  }

  if (type === 'corporate') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="10" r="2.2" />
        <circle cx="16" cy="8" r="2.2" />
        <path d="M4.8 18.2c.9-1.8 2.1-2.7 3.7-2.7 1.5 0 2.8.9 3.6 2.7" />
        <path d="M12.3 18.2c.8-1.5 1.8-2.3 3.2-2.3 1.3 0 2.4.8 3.2 2.3" />
      </svg>
    )
  }

  if (type === 'blog') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4.5h14v15H5z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${colorClass}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 17.5h7a4.5 4.5 0 1 0 0-9 5.5 5.5 0 0 0-10.6 2A3.8 3.8 0 0 0 8.5 17.5Z" />
    </svg>
  )
}

function SidebarGroupTitle({ children }) {
  return (
    <p className="px-3 text-[13px] text-[#9c9c9c] dark:text-[#858585]">{children}</p>
  )
}

function SidebarRow({ label, icon, active = false, hasChevron = false }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
        active
          ? 'bg-[#f2f2f4] text-[#1e1e1e] dark:bg-[#434343] dark:text-white'
          : 'text-[#1f1f1f] hover:bg-[#f7f7f8] dark:text-[#f0f0f0] dark:hover:bg-[#343434]'
      }`}
    >
      {hasChevron ? <ChevronIcon /> : null}
      <SidebarIcon type={icon} active={active} />
      <span className="text-[15px]">{label}</span>
    </button>
  )
}

function SidebarSubItem({ label }) {
  return (
    <button
      type="button"
      className="block w-full rounded-xl px-11 py-2 text-left text-[15px] text-[#1f1f1f] transition hover:bg-[#f7f7f8] dark:text-[#f0f0f0] dark:hover:bg-[#343434]"
    >
      {label}
    </button>
  )
}

function Sidebar() {
  return (
    <aside className="border-r border-[#ececef] bg-white p-5 dark:border-[#3b3b3b] dark:bg-[#2b2b2b]">
      <div className="flex items-center gap-3">
        <ProfileBadge />
        <p className="text-[15px] font-medium text-[#1f1f1f] dark:text-[#f4f4f4]">ByeWind</p>
      </div>

      <div className="mt-8 flex gap-7 px-1 text-[13px]">
        <span className="text-[#868686] dark:text-[#8a8a8a]">Favorites</span>
        <span className="text-[#cbcbcb] dark:text-[#666666]">Recently</span>
      </div>

      <div className="mt-4 space-y-2">
        <BulletItem label="Overview" />
        <BulletItem label="Projects" />
      </div>

      <div className="mt-8">
        <SidebarGroupTitle>Dashboards</SidebarGroupTitle>
        <div className="mt-3 space-y-1.5">
          <SidebarRow label="Overview" icon="overview" active />
          <SidebarRow label="eCommerce" icon="ecommerce" hasChevron />
          <SidebarRow label="Projects" icon="projects" hasChevron />
        </div>
      </div>

      <div className="mt-8">
        <SidebarGroupTitle>Pages</SidebarGroupTitle>
        <div className="mt-3 space-y-1.5">
          <SidebarRow label="User Profile" icon="profile" hasChevron />
          <div className="space-y-1 pt-1">
            <SidebarSubItem label="Overview" />
            <SidebarSubItem label="Projects" />
            <SidebarSubItem label="Campaigns" />
            <SidebarSubItem label="Documents" />
            <SidebarSubItem label="Followers" />
          </div>
          <SidebarRow label="Account" icon="account" hasChevron />
          <SidebarRow label="Corporate" icon="corporate" hasChevron />
          <SidebarRow label="Blog" icon="blog" hasChevron />
          <SidebarRow label="Social" icon="social" hasChevron />
        </div>
      </div>

      <div className="mt-10 px-3 text-[13px] text-[#8091ff] dark:text-[#9aa9ff]">
        snowUI
      </div>
    </aside>
  )
}

export default Sidebar
