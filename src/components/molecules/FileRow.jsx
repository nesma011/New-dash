import TextLine from '../atoms/TextLine'

function FileRow() {
  return (
    <div className="flex items-center gap-3 rounded-2xl px-1 py-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-500">
        PDF
      </div>
      <div className="min-w-0 flex-1">
        <TextLine width="w-40" />
        <TextLine width="w-28" className="mt-2" />
      </div>
      <div className="h-8 w-8 rounded-lg bg-slate-100" aria-hidden="true" />
    </div>
  )
}

export default FileRow
