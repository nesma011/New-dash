function TabItem({ label, active = false }) {
  return (
    <button
      type="button"
      className={`border-b-2 px-1 pb-2 text-sm transition ${
        active
          ? 'border-slate-900 text-slate-900 dark:border-slate-100 dark:text-slate-100'
          : 'border-transparent text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
      }`}
    >
      {label}
    </button>
  )
}

export default TabItem
