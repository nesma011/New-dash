import Avatar from '../atoms/Avatar'
import TextLine from '../atoms/TextLine'

function TableRow() {
  return (
    <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-4 border-t border-slate-200 py-4 text-sm">
      <div className="flex items-center gap-3">
        <Avatar label="" />
        <TextLine width="w-24" />
      </div>
      <TextLine width="w-20" />
      <TextLine width="w-16" />
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <TextLine width="w-20" />
      </div>
    </div>
  )
}

export default TableRow
