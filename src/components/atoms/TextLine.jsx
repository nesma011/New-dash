function TextLine({ width = 'w-full', className = '' }) {
  return (
    <div
      className={`h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 ${width} ${className}`}
      aria-hidden="true"
    />
  )
}

export default TextLine
