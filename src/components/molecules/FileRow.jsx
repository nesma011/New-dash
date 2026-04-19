import TextLine from '../atoms/TextLine'

function FileTypeBadge({ type }) {
  return (
    <div className="flex h-9 w-9 flex-col items-center justify-center rounded-xl bg-slate-100 text-[9px] font-semibold uppercase leading-none text-slate-500">
      <span>{type?.slice(0, 3) || 'FILE'}</span>
    </div>
  )
}

function FileRow({ file, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-3 rounded-2xl px-1 py-2">
        <div className="h-9 w-9 rounded-xl bg-slate-100" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <TextLine width="w-40" />
          <TextLine width="w-36" className="mt-2" />
        </div>
        <div className="h-8 w-8 rounded-lg bg-slate-100" aria-hidden="true" />
      </div>
    )
  }

  if (!file) {
    return null
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl px-1 py-2">
      <FileTypeBadge type={file.type} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-900">{file.name}</p>
        <p className="mt-1 truncate text-sm text-slate-400">
          {file.size} / {file.uploadedAt} / {file.author}
        </p>
      </div>
      {file.downloadable ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-600">
          ↓
        </div>
      ) : null}
    </div>
  )
}

export default FileRow
