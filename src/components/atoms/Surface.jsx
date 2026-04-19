function Surface({ children, className = '' }) {
  return (
    <section className={`rounded-[28px] border border-slate-200 bg-white p-5 ${className}`}>
      {children}
    </section>
  )
}

export default Surface
