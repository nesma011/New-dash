function PageTitle({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-400">{eyebrow}</p>
      <h1 className="mt-1 font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">{description}</p>
      ) : null}
    </div>
  )
}

export default PageTitle
