function SectionTitle({ children, className = '' }) {
  return (
    <h3 className={`text-sm font-semibold text-slate-900 dark:text-slate-100 ${className}`}>
      {children}
    </h3>
  )
}

export default SectionTitle
