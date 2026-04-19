function PlaceholderBlock({ className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-slate-200 bg-slate-50 ${className}`}
      aria-hidden="true"
    />
  )
}

export default PlaceholderBlock
