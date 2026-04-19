function NavItem({ label, active = false }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
        active
          ? 'bg-slate-100 text-slate-900'
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <span>{label}</span>
      <span className="text-xs">{active ? '•' : ''}</span>
    </button>
  )
}

export default NavItem
