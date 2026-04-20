function Button({ children, variant = 'primary', type = 'button', className = '', ...props }) {
  const baseClassName =
    'rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-300/40 dark:focus:ring-slate-600/50'

  const variantClassName =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-[#414141] dark:bg-[#3a3a3a] dark:text-[#cfcfcf] dark:hover:bg-[#434343]'
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
