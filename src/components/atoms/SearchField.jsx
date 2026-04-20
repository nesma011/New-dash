function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

function SearchField({ value, onChange, placeholder = 'Search by keyword' }) {
  return (
    <label className="flex h-8 min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 text-[11px] text-slate-500 dark:border-[#3f3f3f] dark:bg-[#3a3a3a] dark:text-[#8a8a8a] md:min-w-[220px]">
      <span className="flex items-center gap-2">
        <SearchIcon />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full min-w-0 bg-transparent text-[11px] text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-[#8a8a8a]"
        />
      </span>
      <span className="rounded-md bg-white/60 px-1.5 py-0.5 text-[10px] text-slate-400 dark:bg-[#4a4a4a] dark:text-[#aaaaaa]">
        /
      </span>
    </label>
  )
}

export default SearchField
