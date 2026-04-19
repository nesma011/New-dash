import Avatar from '../atoms/Avatar'
import TextLine from '../atoms/TextLine'

function formatCurrency(amount, currency) {
  if (amount == null || !currency) {
    return ''
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

function formatDate(date) {
  if (!date) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

function getStatusColor(status) {
  const statusColors = {
    'In Progress': 'bg-violet-300',
    Complete: 'bg-emerald-300',
    Pending: 'bg-sky-300',
    Approved: 'bg-amber-300',
    Rejected: 'bg-rose-300',
  }

  return statusColors[status] || 'bg-slate-300'
}

function TableRow({ item, isLoading = false }) {
  if (isLoading) {
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

  if (!item) {
    return null
  }

  return (
    <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-4 border-t border-slate-200 py-4 text-sm">
      <div className="flex items-center gap-3">
        <Avatar
          src={item.manager?.avatar}
          alt={item.manager?.name}
          label={item.manager?.name?.charAt(0) || 'U'}
        />
        <p className="font-medium text-slate-900">{item.manager?.name}</p>
      </div>
      <p className="text-slate-600">{formatDate(item.date)}</p>
      <p className="text-slate-900">{formatCurrency(item.amount, item.currency)}</p>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${getStatusColor(item.status)}`} />
        <p className="text-slate-500">{item.status}</p>
      </div>
    </div>
  )
}

export default TableRow
