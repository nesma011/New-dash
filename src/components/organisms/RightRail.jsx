import ActivitiesPanel from './ActivitiesPanel'
import ContactsPanel from './ContactsPanel'
import NotificationsPanel from './NotificationsPanel'

function RightRail() {
  return (
    <aside className="border-l border-slate-200 bg-white p-3 dark:border-[#3b3b3b] dark:bg-[#2b2b2b]">
      <div className="space-y-6">
        <NotificationsPanel />
        <ActivitiesPanel />
        <ContactsPanel />
      </div>
    </aside>
  )
}

export default RightRail
