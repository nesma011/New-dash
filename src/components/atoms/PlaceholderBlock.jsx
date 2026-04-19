function PlaceholderBlock({ className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800 ${className}`}
      aria-hidden="true"
    />
  )
}

export default PlaceholderBlock
