import Avatar from '../atoms/Avatar'

function ActivityItem({ item }) {
  if (!item) {
    return null
  }

  return (
    <div className="flex items-start gap-3">
      <Avatar
        src={item.user?.avatar}
        alt={item.user?.name}
        label={item.user?.name?.charAt(0) || 'U'}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-900">{item.title}</p>
        <p className="mt-1 text-sm text-slate-400">{item.timeAgo}</p>
      </div>
    </div>
  )
}

export default ActivityItem
