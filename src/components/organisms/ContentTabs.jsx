import TabItem from '../molecules/TabItem'

function ContentTabs() {
  return (
    <div className="flex items-center gap-6 border-b border-slate-200 px-6 pt-6">
      <TabItem label="Overview" active />
      <TabItem label="Targets" />
      <TabItem label="Budget" />
      <TabItem label="Users" />
      <TabItem label="Files" />
      <TabItem label="Activity" />
      <TabItem label="Settings" />
    </div>
  )
}

export default ContentTabs
