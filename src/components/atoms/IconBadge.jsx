function IconBadge({
  children = '*',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-[11px] text-slate-500 transition hover:bg-slate-50 dark:border-[#414141] dark:bg-[#353535] dark:text-[#c9c9c9] dark:hover:bg-[#404040] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconBadge
