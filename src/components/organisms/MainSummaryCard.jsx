import Avatar from '../atoms/Avatar'
import IconBadge from '../atoms/IconBadge'
import SectionTitle from '../atoms/SectionTitle'
import StatColumn from '../molecules/StatColumn'
import TextLine from '../atoms/TextLine'

function MainSummaryCard() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionTitle>SnowUI</SectionTitle>
          <div className="mt-5 grid gap-5 md:grid-cols-4">
            <div className="space-y-3">
              <p className="text-sm text-slate-500">Status</p>
              <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-100 px-3 py-2">
                <TextLine width="w-24" className="bg-indigo-300" />
              </div>
            </div>
            <StatColumn title="Total Tasks" />
            <StatColumn title="Due Date" />
            <StatColumn title="Budget Spent" />
          </div>
        </div>

        <div className="flex flex-col items-end gap-10">
          <IconBadge className="h-10 w-10 rounded-2xl">✳</IconBadge>
          <div className="flex -space-x-2">
            <Avatar label="" />
            <Avatar label="" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-slate-200 text-[10px] text-slate-600">
              +3
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSummaryCard
