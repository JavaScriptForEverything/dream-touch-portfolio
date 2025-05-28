import { useState, useEffect, useRef } from "react"
import { Check } from "lucide-react"
import { AngleDownIcon, AngleUpIcon } from '@/icons'

interface Option {
  label: string
  value: string
  disabled?: boolean
}

interface SelectProps {
  options: Option[]
  selected: string
  onChange: (value: string) => void
}

export const Datalist = ({ options, selected, onChange }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedLabel = options.find(o => o.value === selected)?.label || ""

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (value: string) => {
    onChange(value)
    setQuery("")
    setOpen(false)
  }

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative w-full text-sm" ref={containerRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Select..."
          value={open ? query : selectedLabel}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onClick={() => setOpen(prev => !prev)}
          className="w-full cursor-pointer rounded border border-gray-300 bg-white px-4 py-3 pr-8 shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-500"
        />
        <span className="absolute inset-y-0 right-2 flex items-center text-gray-400 pointer-events-none">
          {open ? <AngleUpIcon className="h-8 w-8" /> : <AngleDownIcon className="h-8 w-8" />}
        </span>
      </div>

      {open && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-md">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`
                  px-4 py-2 flex justify-between items-center cursor-pointer
                  ${option.disabled ? 'text-gray-400 pointer-events-none' : 'hover:bg-slate-100'}
                  ${selected === option.value ? 'bg-slate-50 text-slate-700 font-medium' : ''}
                `}
              >
                <span>{option.label}</span>
                {selected === option.value && <Check className="w-4 h-4 text-slate-600" />}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 italic">No matches found</li>
          )}
        </ul>
      )}
    </div>
  )
}
