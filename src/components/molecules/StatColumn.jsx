import TextLine from '../atoms/TextLine'

function StatColumn({ title }) {
  return (
    <div className="space-y-3 border-l border-slate-200 pl-6 first:border-l-0 first:pl-0">
      <p className="text-sm text-slate-500">{title}</p>
      <TextLine width="w-20" className="h-3" />
      <TextLine width="w-14" />
    </div>
  )
}

export default StatColumn
