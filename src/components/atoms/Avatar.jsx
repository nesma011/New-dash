function Avatar({ label = 'U', className = '' }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-semibold text-slate-700 ${className}`}
    >
      {label}
    </div>
  )
}

export default Avatar
