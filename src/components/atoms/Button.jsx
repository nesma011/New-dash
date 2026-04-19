function Button({ children, variant = 'primary', type = 'button', className = '', ...props }) {
  const baseClassName =
    'rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-300/40 dark:focus:ring-slate-600/50'

  const variantClassName =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
      : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200'

  return (
    <button
      type={type}
      className={`${baseClassName} ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
