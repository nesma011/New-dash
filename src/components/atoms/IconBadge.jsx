function IconBadge({
  children = '*',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconBadge
