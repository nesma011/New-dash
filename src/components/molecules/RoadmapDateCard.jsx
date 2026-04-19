function RoadmapDateCard({ item }) {
  if (!item) {
    return null
  }

  return (
    <div
      className={`flex w-12 flex-col items-center rounded-2xl px-2 py-2 ${
        item.active
          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
          : 'bg-transparent text-slate-400 dark:text-slate-500'
      }`}
    >
      <span className="text-[11px] font-medium uppercase">{item.day}</span>
      <span className="mt-1 text-xl font-semibold">{item.date}</span>
    </div>
  )
}

export default RoadmapDateCard
