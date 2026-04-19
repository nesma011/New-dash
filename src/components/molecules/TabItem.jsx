function TabItem({ label, active = false }) {
  return (
    <button
      type="button"
      className={`border-b-2 px-1 pb-2 text-sm transition ${
        active
          ? 'border-slate-900 text-slate-900'
          : 'border-transparent text-slate-400 hover:text-slate-700'
      }`}
    >
      {label}
    </button>
  )
}

export default TabItem
