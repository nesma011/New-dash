const overviewCards = [
  { label: 'Monthly Revenue', value: '$84.2K', change: '+12.4%', tone: 'emerald' },
  { label: 'Active Clients', value: '1,284', change: '+8.1%', tone: 'sky' },
  { label: 'Conversion Rate', value: '6.48%', change: '+1.2%', tone: 'amber' },
  { label: 'Open Tickets', value: '23', change: '-4.3%', tone: 'rose' },
]

const activity = [
  { day: 'Mon', sales: 42, target: 60 },
  { day: 'Tue', sales: 56, target: 60 },
  { day: 'Wed', sales: 48, target: 60 },
  { day: 'Thu', sales: 72, target: 60 },
  { day: 'Fri', sales: 65, target: 60 },
  { day: 'Sat', sales: 52, target: 60 },
  { day: 'Sun', sales: 58, target: 60 },
]

const tasks = [
  { title: 'Approve vendor payouts', meta: 'Finance team · 6 items left', status: 'Today' },
  { title: 'Review onboarding funnel', meta: 'Growth team · 18% drop on step 3', status: 'High' },
  { title: 'Prepare Monday standup deck', meta: 'Ops team · 4 slides updated', status: 'Draft' },
]

const channels = [
  { name: 'Direct', value: '43%', width: 'w-[43%]' },
  { name: 'Organic Search', value: '31%', width: 'w-[31%]' },
  { name: 'Referrals', value: '18%', width: 'w-[18%]' },
  { name: 'Paid Social', value: '8%', width: 'w-[8%]' },
]

const toneStyles = {
  emerald: 'from-emerald-400/20 to-emerald-500/5 text-emerald-200 ring-emerald-400/20',
  sky: 'from-sky-400/20 to-sky-500/5 text-sky-200 ring-sky-400/20',
  amber: 'from-amber-300/20 to-amber-500/5 text-amber-100 ring-amber-300/20',
  rose: 'from-rose-400/20 to-rose-500/5 text-rose-100 ring-rose-400/20',
}

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_24%),linear-gradient(180deg,_#081120_0%,_#0b1526_42%,_#111c31_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/55 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="border-b border-white/10 bg-slate-950/50 p-6 lg:border-r lg:border-b-0">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-amber-300 text-lg font-semibold text-slate-950">
                  D
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight">Dashflow</p>
                  <p className="text-sm text-slate-400">Revenue command center</p>
                </div>
              </div>

              <nav className="mt-8 space-y-2 text-sm">
                {['Overview', 'Analytics', 'Customers', 'Automation', 'Reports'].map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                      index === 0
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item}</span>
                    <span className="text-xs">{index === 0 ? 'Live' : '>'}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 rounded-[28px] border border-sky-300/15 bg-gradient-to-br from-sky-400/15 to-cyan-300/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">Forecast</p>
                <p className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold">$128K</p>
                <p className="mt-2 text-sm text-slate-300">Projected revenue for the next 30 days based on current pipeline velocity.</p>
              </div>
            </aside>

            <section className="p-6 lg:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Dashboard</p>
                  <h1 className="mt-2 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Team performance at a glance
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
                    A clean React dashboard scaffold with Tailwind, ready for charts, APIs, and auth.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                    Export report
                  </button>
                  <button className="rounded-2xl bg-gradient-to-r from-sky-300 to-amber-200 px-4 py-3 text-sm font-medium text-slate-950 transition hover:brightness-105">
                    Create widget
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {overviewCards.map((card) => (
                  <article
                    key={card.label}
                    className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${toneStyles[card.tone]} p-5 ring-1`}
                  >
                    <p className="text-sm text-slate-300">{card.label}</p>
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <p className="font-['Space_Grotesk'] text-3xl font-semibold text-white">{card.value}</p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                        {card.change}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
                <article className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Weekly sales pulse</p>
                      <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-semibold text-white">Revenue vs target</h2>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                      Above target
                    </span>
                  </div>

                  <div className="mt-8 grid h-72 grid-cols-7 items-end gap-3">
                    {activity.map((item) => (
                      <div key={item.day} className="flex h-full flex-col justify-end gap-3">
                        <div className="relative flex-1 rounded-t-[28px] bg-slate-900/80">
                          <div
                            className="absolute inset-x-1 bottom-1 rounded-t-[22px] bg-gradient-to-t from-sky-400 via-cyan-300 to-amber-200"
                            style={{ height: `${item.sales}%` }}
                          />
                          <div
                            className="absolute inset-x-3 rounded-full border-t border-dashed border-white/35"
                            style={{ bottom: `${item.target}%` }}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-white">{item.day}</p>
                          <p className="text-xs text-slate-500">{item.sales}k</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="grid gap-6">
                  <article className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-slate-400">Traffic mix</p>
                    <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-semibold text-white">Acquisition channels</h2>
                    <div className="mt-6 space-y-4">
                      {channels.map((channel) => (
                        <div key={channel.name}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-slate-300">{channel.name}</span>
                            <span className="text-white">{channel.value}</span>
                          </div>
                          <div className="h-3 rounded-full bg-slate-900">
                            <div
                              className={`h-3 rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-amber-200 ${channel.width}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Priority queue</p>
                        <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-semibold text-white">Team tasks</h2>
                      </div>
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-500">3 open</span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {tasks.map((task) => (
                        <div
                          key={task.title}
                          className="rounded-2xl border border-white/8 bg-slate-950/60 px-4 py-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-medium text-white">{task.title}</p>
                              <p className="mt-1 text-sm text-slate-400">{task.meta}</p>
                            </div>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                              {task.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
