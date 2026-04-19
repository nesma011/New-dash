function Avatar({ label = 'U', src, alt = '', className = '' }) {
  return (
    <div className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:from-slate-700 dark:to-slate-600 dark:text-slate-100 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        label
      )}
    </div>
  )
}

export default Avatar
