function Button({ children, variant = 'primary', type = 'button', className = '', ...props }) {
  const baseClassName =
    'rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-300/40'

  const variantClassName =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
      : 'bg-slate-900 text-white hover:bg-slate-800'

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
