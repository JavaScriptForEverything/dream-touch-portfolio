import { useState } from "react"
import { Check } from "lucide-react" // Or use ✓ emoji if you don’t want icons
import { AngleDownIcon, AngleLeftIcon, AngleRightIcon, AngleUpIcon } from '@/icons'



/*

const options = [
  { label: "Option One", value: "one" },
  { label: "Option Two", value: "two", disabled: true },
  { label: "Option Three", value: "three" },
]

const [selected, setSelected] = useState("one")

<div className="p-4">
	<Select
		options={options}
		selected={selected}
		onChange={setSelected}
	/>
</div>
*/






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

export const Select = (props: SelectProps) => {

	const { 
		options, 
		selected, 
		onChange 
	} = props

  const [open, setOpen] = useState(false)
  const selectedLabel = options.find((o) => o.value === selected)?.label || "Select"

  const handleSelect = (value: string) => {
    onChange(value)
    setOpen(false)
  }

  return (
    <div className="relative inline-block w-full text-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded border border-gray-300 px-4 py-2 
				text-left bg-white shadow-sm hover:border-gray-400

				flex items-center justify-between
				"
      >
				<span>
        	{selectedLabel}
				</span>

				<span>
					<AngleUpIcon className='-mb-4 ' />
					<AngleDownIcon />
				</span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
          {options.map((option) => (
            <li key={option.value}

              onClick={() => handleSelect(option.value)}
              className={`
                flex justify-between items-center cursor-pointer px-4 py-2
                hover:bg-slate-100
                ${option.value === selected ? "bg-slate-50 font-medium text-slate-700" : ""}
								${option.disabled === true ? 
									'text-slate-500 hover:bg-transparent pointer-events-none' : ''}
              `}
            >
              <span>{option.label}</span>
              {option.value === selected && (
                <Check className="w-4 h-4 text-slate-600" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
