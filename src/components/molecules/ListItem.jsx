import Avatar from '../atoms/Avatar'
import TextLine from '../atoms/TextLine'

function ListItem() {
  return (
    <div className="flex items-start gap-3">
      <Avatar label="" className="bg-gradient-to-br from-slate-300 to-slate-100" />
      <div className="min-w-0 flex-1">
        <TextLine width="w-44" />
        <TextLine width="w-24" className="mt-2" />
      </div>
    </div>
  )
}

export default ListItem
