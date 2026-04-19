import Button from '../atoms/Button'
import PlaceholderBlock from '../atoms/PlaceholderBlock'
import SectionTitle from '../atoms/SectionTitle'
import FileRow from '../molecules/FileRow'
import ListItem from '../molecules/ListItem'

function OverviewPanels() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <SectionTitle>What's on the road?</SectionTitle>
        <div className="mt-5 flex items-center gap-4">
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl bg-slate-900" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
          <PlaceholderBlock className="h-14 w-12 rounded-2xl" />
        </div>
        <div className="mt-6 space-y-5">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <SectionTitle>Latest Files</SectionTitle>
        <div className="mt-5 space-y-1">
          <FileRow />
          <FileRow />
          <FileRow />
          <FileRow />
          <FileRow />
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400">Drop files here or upload files</p>
            <Button variant="secondary">Upload</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OverviewPanels
