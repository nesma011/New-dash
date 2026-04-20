function SelectField({ value, onChange, options, ariaLabel = 'Select option', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-8 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-8 text-[11px] text-slate-600 outline-none transition hover:bg-slate-50 focus:ring-2 focus:ring-slate-300/40 dark:border-[#414141] dark:bg-[#3a3a3a] dark:text-[#d4d4d4] dark:hover:bg-[#434343] dark:focus:ring-slate-600/50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 dark:text-[#9a9a9a]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 10 5 5 5-5" />
        </svg>
      </span>
    </div>
  )
}

export default SelectField
