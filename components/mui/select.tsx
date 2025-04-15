type Props = {
  value: string
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  className?: React.ComponentProps<'select'>['className']
}

export const Select = ({ options, value, onChange, className }: Props) => {
  return (
		<select value={value} onChange={onChange} className={`${className} 
		mr-2 pl-2 pr-8 py-2 min-w-20 bg-transparent outline-none`}>
			{options.map((option, index) => (
				<option key={index} value={option}>
					{option}
				</option>
			))}
		</select>
  )
}

