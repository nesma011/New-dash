import TextLine from '../atoms/TextLine'

function StatColumn({ title, value, helper }) {
  return (
    <div className="space-y-3 border-l border-slate-200 pl-6 first:border-l-0 first:pl-0 dark:border-slate-700">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      {value ? (
        <p className="text-[26px] font-semibold leading-none text-slate-900 dark:text-slate-100">{value}</p>
      ) : (
        <TextLine width="w-20" className="h-3" />
      )}
      {helper ? <p className="text-sm text-slate-500 dark:text-slate-400">{helper}</p> : null}
    </div>
  )
}

export default StatColumn
