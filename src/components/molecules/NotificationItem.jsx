function NotificationIcon({ type }) {
  const labelByType = {
    bug: '!',
    user: 'U',
    subscription: '+',
  }

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
      {labelByType[type] || '.'}
    </div>
  )
}

function NotificationItem({ item }) {
  if (!item) {
    return null
  }

  return (
    <div className="flex items-start gap-3">
      <NotificationIcon type={item.type} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-900">{item.title}</p>
        <p className="mt-1 text-sm text-slate-400">{item.timeAgo}</p>
      </div>
    </div>
  )
}

export default NotificationItem
