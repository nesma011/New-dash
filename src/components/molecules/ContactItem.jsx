import Avatar from '../atoms/Avatar'

function ContactItem({ item }) {
  if (!item) {
    return null
  }

  return (
    <div className="flex items-start gap-3">
      <Avatar
        src={item.avatar}
        alt={item.name}
        label={item.name?.charAt(0) || 'U'}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{item.role}</p>
      </div>
    </div>
  )
}

export default ContactItem
