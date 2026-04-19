function TextLine({ width = 'w-full', className = '' }) {
  return <div className={`h-2.5 rounded-full bg-slate-200 ${width} ${className}`} aria-hidden="true" />
}

export default TextLine
