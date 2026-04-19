function IconBadge({ children = '*', className = '' }) {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500 ${className}`}
    >
      {children}
    </div>
  )
}

export default IconBadge
