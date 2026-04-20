import ActivitiesPanel from './ActivitiesPanel'
import ContactsPanel from './ContactsPanel'
import NotificationsPanel from './NotificationsPanel'

function RightRail({ searchQuery }) {
  return (
    <aside className="border-t border-slate-200 bg-white p-3 dark:border-[#3b3b3b] dark:bg-[#2b2b2b] lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0">
      <div className="space-y-6">
        <NotificationsPanel searchQuery={searchQuery} />
        <ActivitiesPanel searchQuery={searchQuery} />
        <ContactsPanel searchQuery={searchQuery} />
      </div>
    </aside>
  )
}

export default RightRail
