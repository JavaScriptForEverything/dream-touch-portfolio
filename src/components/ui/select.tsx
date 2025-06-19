// import { useState } from "react"
// import { Check } from "lucide-react"
// import { AngleDownIcon, AngleUpIcon } from "@/icons"

// interface Option {
//   label: string
//   value: string
//   disabled?: boolean
// }

// interface SelectProps {
//   options: Option[]
//   value: string
//   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
//   name?: string
// }

// export const Select = ({ options, value, onChange, name }: SelectProps) => {
//   const [open, setOpen] = useState(false)
//   const selectedLabel = options.find((o) => o.value === value)?.label || "Select"

//   const handleSelect = (value: string) => {
//     const event = {
//       target: {
//         value,
//         name: name ?? "",
//       },
//     } as React.ChangeEvent<HTMLSelectElement>

//     onChange(event)
//     setOpen(false)
//   }

//   return (
//     <div className="relative inline-block w-full text-sm">
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-left flex items-center justify-between hover:border-gray-400"
//       >
//         <span>{selectedLabel}</span>
//         <span>
//           <AngleUpIcon className={`${open ? "block" : "hidden"} -mb-4`} />
//           <AngleDownIcon className={`${!open ? "block" : "hidden"}`} />
//         </span>
//       </button>

//       {open && (
//         <ul className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option.value)}
//               className={`
//                 flex justify-between items-center cursor-pointer px-4 py-2
//                 hover:bg-slate-100
//                 ${option.value === value ? "bg-slate-50 font-medium text-slate-700" : ""}
//                 ${option.disabled ? "text-slate-500 pointer-events-none hover:bg-transparent" : ""}
//               `}
//             >
//               <span>{option.label}</span>
//               {option.value === value && <Check className="w-4 h-4 text-slate-600" />}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }




import { useState } from "react"
import { AngleDownIcon, AngleUpIcon, CheckIcon } from '@/icons'


/*

const options = [
  { label: "Option One", value: "one" },
  { label: "Option Two", value: "two", disabled: true },
  { label: "Option Three", value: "three" },
]

const [value, setValue] = useState("one")

<div className="p-4">
	<Select
		options={options}
		value={value}
		onChange={setSelected}
	/>
</div>
*/






interface Option {
  label: string
  value: string
  disabled?: boolean
}

// interface SelectProps {
//   options: Option[]
//   value: string
//   onChange: (value: string) => void
// }
interface SelectProps {
  options: Option[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  name?: string
}


export const Select = (props: SelectProps) => {

	const { 
		options, 
		value, 
		onChange,
	} = props

  const [open, setOpen] = useState(false)
  const selectedLabel = options.find((o) => o.value === value)?.label || "Select"

  // const handleSelect = (value: string) => {
  //   onChange(value)
  //   setOpen(false)
  // }
  const handleSelect = (value: string) => {
    const event = {
      target: {
        value,
        name: name ?? "",
      },
    } as React.ChangeEvent<HTMLSelectElement>

    onChange(event)
    setOpen(false)
  }

  return (
    <div className={`relative inline-block w-full text-sm`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-md border border-gray-300 px-4 py-1 
				text-left bg-white hover:border-gray-400

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
        <ul className="divide-y divide-slate-100 absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
          {options.map((option) => (
            <li key={option.value}

              onClick={() => handleSelect(option.value)}
              className={`
                flex justify-between items-center cursor-pointer px-4 py-2
                hover:bg-slate-100
                ${option.value === value ? "bg-slate-50 font-medium text-slate-700" : ""}
								${option.disabled === true ? 
									'text-slate-500 hover:bg-transparent pointer-events-none' : ''}
              `}
            >
              <span>{option.label}</span>
              {option.value === value && (
								<CheckIcon className="size-5 text-slate-600"/>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
