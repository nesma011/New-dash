import TextLine from '../atoms/TextLine'

function FileTypeBadge({ type }) {
  return (
    <div className="flex h-8 w-8 flex-col items-center justify-center rounded-lg bg-slate-100 text-[8px] font-semibold uppercase leading-none text-slate-500 dark:bg-slate-800 dark:text-slate-300">
      <span>{type?.slice(0, 3) || 'FILE'}</span>
    </div>
  )
}

function FileRow({ file, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2.5 rounded-xl px-1 py-1.5">
        <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <TextLine width="w-40" />
          <TextLine width="w-36" className="mt-2" />
        </div>
        <div className="h-7 w-7 rounded-lg bg-slate-100 dark:bg-slate-800" aria-hidden="true" />
      </div>
    )
  }

  if (!file) {
    return null
  }

  return (
    <div className="flex items-center gap-2.5 rounded-xl px-1 py-1.5">
      <FileTypeBadge type={file.type} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-slate-900 dark:text-slate-100">{file.name}</p>
        <p className="mt-0.5 truncate text-[11px] text-slate-400 dark:text-slate-500">
          {file.size} / {file.uploadedAt} / {file.author}
        </p>
      </div>
      {file.downloadable ? (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          v
        </div>
      ) : null}
    </div>
  )
}

export default FileRow
