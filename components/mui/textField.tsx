type Props = {
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
    helperText?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    border?: boolean;
    multiline?: boolean;
    rows?: number;
};

export const TextField = (props: Props) => {
    const {
        label = 'your label',
        required = false,
        type = 'text',
        value = '',
        placeholder,
        helperText,
        autoFocus = false,
        disabled = false,
        border = true,
        multiline = false,
        rows = 3,
        onChange
    } = props;

    return (
        <div>
            <fieldset className={`
                pointer-events-none focus-within:border-slate-500 invalid:border-red-500
                group invalid:focus-within:border-red-500 peer
                ${border ? 'border border-slate-400/60 pl-2.5 rounded-md ' : ''}
                ${disabled ? 'bg-slate-200' : ''}
            `}>
                <legend className={`
                    px-1.5 text-slate-700 text-sm font-light
                    group-focus-within:text-slate-700 group-invalid:text-red-500
                    group-invalid:group-focus-within:text-red-500
                    ${required ? 'after:content-["*"] after:ml-1 after:text-red-500' : ''}
                `}>
                    {label}
                </legend>

                {multiline ? (
                    <textarea
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>}
                        autoFocus={autoFocus}
                        disabled={disabled}
                        rows={rows}
                        className={`
                            px-2 py-1.5 mb-1 w-full focus:outline-none text-slate-700 bg-inherit
                            pointer-events-auto invalid:text-red-500 resize-y
                            placeholder:bg-transparent
                            placeholder:text-slate-400
                        `}
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
                        autoFocus={autoFocus}
                        disabled={disabled}
                        className={`
                            px-2 py-1.5 mb-1 w-full focus:outline-none text-slate-700 bg-inherit
                            pointer-events-auto invalid:text-red-500
                            placeholder:bg-transparent
                            placeholder:text-slate-400
                        `}
                    />
                )}
            </fieldset>
            {helperText && (
                <small data-name='error-message' className='text-red-600 mx-2'>{helperText}</small>
            )}
        </div>
    );
};

/*
---------
type Props = {
		label?: string
		placeholder?: string
		type?: string
		value: string
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void

		helperText?:  string
		required?: boolean,
		autoFocus?: boolean,
		disabled?: boolean,
		border?: boolean,

}

export const TextField = (props: Props) => {

	const {
		label='your label',
		required=false,
		type='text',
		value='',
		placeholder,
		helperText,
		autoFocus=false,

		disabled=false,
		border=true,

		onChange
	} = props


	return (
		<div>
			<fieldset className={`
				pointer-events-none focus-within:border-slate-500 invalid:border-red-500
				group invalid:focus-within:border-red-500 peer
				${border ? 'border border-slate-400/60 pl-2.5 rounded-md ' : ''}
				${disabled ? 'bg-slate-200' : ''}
			`}
			>

				<legend className={`
					px-1.5 text-slate-700 text-sm font-light
					group-focus-within:text-slate-700 group-invalid:text-red-500
					group-invalid:group-focus-within:text-red-500
						${required ? 'after:content-["*"] after:ml-1 after:text-red-500' : ''}
					`}
					> {label} </legend>

				<input 
					type={type}
					placeholder={placeholder} 
					value={value} 
					onChange={onChange}
					autoFocus={autoFocus} 
					disabled={disabled} 
					className={`
						px-2 py-1.5 mb-1 w-full focus:outline-none text-slate-700 bg-inherit
						pointer-events-auto invalid:text-red-500

						placeholder:bg-transparent
						placeholder:text-slate-400
					`}
				/>
			</fieldset>
			{helperText && (
				<small data-name='error-message' className='text-red-600 mx-2 '>{helperText}</small> 
			)}
		</div>
	)
}

*/


