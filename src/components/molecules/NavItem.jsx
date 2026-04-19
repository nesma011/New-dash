function NavItem({ label, active = false }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
        active
          ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/90 dark:text-slate-100 dark:ring-1 dark:ring-slate-700'
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-100'
      }`}
    >
      <span>{label}</span>
      <span className={`text-xs ${active ? 'text-slate-500 dark:text-slate-300' : 'text-transparent'}`}>
        o
      </span>
    </button>
  )
}

export default NavItem
