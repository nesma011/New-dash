function EmptyState({ title, description }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  )
}

export default EmptyState
