function NavItem({ label, active = false }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-[11px] transition ${
        active
          ? 'bg-slate-100 text-slate-900 dark:bg-[#424242] dark:text-[#f5f5f5]'
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-[#a4a4a4] dark:hover:bg-[#353535] dark:hover:text-[#f5f5f5]'
      }`}
    >
      <span>{label}</span>
      <span className={`text-xs ${active ? 'text-slate-500 dark:text-[#d8d8d8]' : 'text-transparent'}`}>
        o
      </span>
    </button>
  )
}

export default NavItem
