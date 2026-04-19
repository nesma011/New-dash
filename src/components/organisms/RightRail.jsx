import ActivitiesPanel from './ActivitiesPanel'
import ContactsPanel from './ContactsPanel'
import NotificationsPanel from './NotificationsPanel'

function RightRail() {
  return (
    <aside className="border-l border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-10">
        <NotificationsPanel />
        <ActivitiesPanel />
        <ContactsPanel />
      </div>
    </aside>
  )
}

export default RightRail
