
type Props = {
	children?: React.ReactNode
	accept?: React.ComponentProps<'input'>['accept']
	multiple?: React.ComponentProps<'input'>['multiple']
	className?: React.ComponentProps<'input'>['className']
	ref?: React.ComponentProps<'input'>['ref']
	onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void

	helperText?:  string
	required?: boolean,
	autoFocus?: boolean,
	disabled?: boolean,
}

export const FileInput = (props: Props) => {
	const { 
		ref, 
		className, 
		onChange, 
		accept='image/*', 
		multiple, 
		helperText,  
		disabled=false,
	} = props

	return (
		<fieldset>
			<input disabled={disabled} ref={ref} type='file' accept={accept} onChange={onChange} multiple={multiple} className={`
				w-full border border-slate-500 disabled:border-slate-300 px-4 py-3 rounded-md text-slate-700 ${className}
				`}
			/>
			{helperText!! && (
				<small className='text-red-600 mx-2'>{helperText}</small>
			)}
		</fieldset>
	)
}
