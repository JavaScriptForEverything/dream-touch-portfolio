
type Props = React.ComponentProps<'input'> & {
	label: string
	error?: boolean 																// To indicate error state
	helperText?: string 														// For additional information
	variant?: 'outlined' | 'filled' | 'standard' 		// Different styles
}

export const TextField = (props: Props) => {
	const {
    label,
    error = false,
    helperText,
    variant = 'outlined',
    className = '',

		disabled=false,
		required=false,

    ...rest
	} = props

	const baseStyles = `
		focus:outline-none 
		focus:ring-1 
		transition duration-150 ease-in-out w-full 
		invalid:text-red-500 
	`
					
	const errorStyles = error ? 'border-red-500 focus:ring-red-500' : ''
	const labelErrorStyles = error ? 'text-red-500' : 'text-gray-700'
	
	const variantStyles = {
		outlined: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
		filled: 'bg-gray-100 focus:bg-white focus:ring-blue-500',
		standard: 'border-b border-gray-300 focus:red-blue-500 focus:ring-blue-500',
	}

	const border = false

	return (
		<div className={`flex flex-col mb-4 ${className}`}>

			<fieldset className={`
				focus-within:border-blue-500 invalid:border-red-500
				group invalid:focus-within:border-red-500 peer
				${border ? 'border border-slate-500 pl-2.5 rounded-md ' : ''}
				${disabled ? 'bg-slate-200' : ''}
			`}
			>
				<label className={`text-sm font-medium mb-1 
					${ label ? `
						group-focus-within:text-blue-700 group-invalid:text-red-500
						group-invalid:group-focus-within:text-red-500
						` : '' }

					${required ? 'after:content-["*"] after:ml-1 after:text-red-500' : ''}
					${labelErrorStyles}
				`}> {label} </label>

				<input {...rest} className={`
					${baseStyles} ${variantStyles[variant]} ${errorStyles} px-3 py-2 rounded-md 
				`} />
			</fieldset>

			{helperText && (
				<span className={`text-xs mt-1 ${error ? 'text-red-500' : 'text-gray-500'}`}> {helperText} </span>
			)}
		</div>
	)
}

