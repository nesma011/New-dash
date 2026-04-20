import Button from '../atoms/Button'
import IconBadge from '../atoms/IconBadge'
import TabItem from '../molecules/TabItem'

function ContentTabs() {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-slate-200 px-5 py-3 dark:border-[#3b3b3b]">
      <div className="flex items-center gap-5">
        <TabItem label="Overview" active />
        <TabItem label="Targets" />
        <TabItem label="Budget" />
        <TabItem label="Users" />
        <TabItem label="Files" />
        <TabItem label="Activity" />
        <TabItem label="Settings" />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary">+ Add User</Button>
        <Button variant="secondary">Add Target</Button>
        <IconBadge aria-label="More">...</IconBadge>
      </div>
    </div>
  )
}

export default ContentTabs
