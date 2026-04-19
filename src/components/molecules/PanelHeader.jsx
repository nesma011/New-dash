function PanelHeader({ eyebrow, title, action }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-slate-400">{eyebrow}</p>
        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      {action ? <span className="text-xs text-slate-400">{action}</span> : null}
    </div>
  )
}

export default PanelHeader
