import Avatar from '../atoms/Avatar'
import NotificationsPanel from './NotificationsPanel'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'

function RightRailSection({ title, count = 4 }) {
  return (
    <section>
      <SectionTitle className="text-lg">{title}</SectionTitle>
      <div className="mt-5 space-y-5">
        {Array.from({ length: count }).map((_, index) => (
          <div key={`${title}-${index}`} className="flex items-start gap-3">
            <Avatar label="" />
            <div className="min-w-0 flex-1">
              <TextLine width="w-36" />
              <TextLine width="w-24" className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function RightRail() {
  return (
    <aside className="border-l border-slate-200 bg-white p-5">
      <div className="space-y-10">
        <NotificationsPanel />
        <RightRailSection title="Activities" count={5} />
        <RightRailSection title="Contacts" count={6} />
      </div>
    </aside>
  )
}

export default RightRail
