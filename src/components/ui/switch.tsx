 
interface Props {
	checked: boolean,
	onChange: (checked: boolean) => void
	id?: string
}
export const Switch = ({ checked, onChange, id }: Props) => {

	return (
		<label
			htmlFor={id}
			className="cursor-pointer relative block h-6 w-12 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-orange-500"
		>
			<input 
				type="checkbox" 
				id={id}
				className="peer sr-only" 
				checked={checked}
				onChange={(evt) => onChange(evt.target.checked)}
			/>

			<span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"
			></span>
		</label>
	)
}
