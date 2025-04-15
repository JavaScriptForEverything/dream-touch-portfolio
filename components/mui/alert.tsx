import { AlertErrorIcon, AlertInfoIcon, AlertSuccessIcon, AlertWarningIcon, CrossIcon } from '../../icons'

type Props = {
	severity?: 'success' | 'info' | 'warning' | 'error'
	variant?: 'text' | 'outlined' | 'filled'
	title?: string
	message: string
	action?: boolean,
	showSeverity?: boolean,
	className?: React.ComponentProps<'div'>['className']
	onClose?: () => void
}

export const Alert = (props: Props) => {
	const {
		severity='success',
		variant='text',
		title,
		message,
		action=false,
		showSeverity=false,
		className,
		onClose
	} = props



	return (
		<div className={className}>
		{severity === 'success' && (
			<div className={`
				flex items-start gap-4 text-green-600 px-4 py-3 rounded border 
				${ variant === 'text' ? 'bg-green-100/50 border-green-100' : ''}
				${ variant === 'outlined' ? 'border-green-600' : ''}
				${ variant === 'filled' ? 'bg-green-500 text-white' : ''}
				`}
			>
				{showSeverity && <AlertSuccessIcon /> }
				<div>
					{title && ( <h1 className='text-green-900 font-semibold'>{title}</h1> )}
					<p className={`${variant==='filled' ? '' : 'text-green-900'}`}>{message}</p>  
				</div>

				{action && (
					<button onClick={onClose} type='button' className={`
						ml-auto rounded-full p-0.5
						${ variant === 'filled' ? 'hover:bg-green-600/60 active:bg-green-600' : 'hover:bg-green-100 active:bg-green-200' }
					`}> <CrossIcon /> </button>
				)}
			</div> 
		)}

		{severity === 'info' && (
			<div className={`
				flex items-start gap-4 text-sky-600 px-4 py-3 rounded border 
				${ variant === 'text' ? 'bg-sky-100/50 border-sky-100' : ''}
				${ variant === 'outlined' ? 'border-sky-600' : ''}
				${ variant === 'filled' ? 'bg-sky-500 text-white' : ''}
			`}>

				{showSeverity &&  <AlertInfoIcon />}
				<div>
					{title && <h1 className='text-sky-900 font-semibold'>{title}</h1> }
					<p className={`${variant==='filled' ? '' : 'text-sky-900'}`}>{message}</p>  
				</div>

				{action && (
					<button onClick={onClose} type='button' className={`ml-auto rounded-full p-0.5
						${ variant === 'filled' ? 'hover:bg-sky-600/60 active:bg-sky-600' : 'hover:bg-sky-100 active:bg-sky-200' }
					`}> <CrossIcon /> </button>
				)}
			</div>
		)}


		{severity === 'warning' && (
			<div className={`
				flex items-start gap-4 text-orange-600 px-4 py-3 rounded border 
				${ variant === 'text' ? 'bg-orange-100/50 border-orange-100' : ''}
				${ variant === 'outlined' ? 'border-orange-600' : ''}
				${ variant === 'filled' ? 'bg-orange-500 text-white' : ''}
			`}>

				{showSeverity && <AlertWarningIcon />}
				<div>
					{title && <h1 className='text-orange-900 font-semibold'>{title}</h1> }
					<p className={`${variant==='filled' ? '' : 'text-orange-900'}`}>{message}</p> 
				</div>

				{action && (
					<button onClick={onClose} type='button' className={`ml-auto rounded-full p-0.5
						${ variant === 'filled' ? 'hover:bg-orange-600/60 active:bg-orange-600' : 'hover:bg-orange-100 active:bg-orange-200' }
					`}> <CrossIcon /> </button>
				)}
			</div>
		)}



		{severity === 'error' && (
			<div className={`
				flex items-start gap-4 text-red-600 px-4 py-3 rounded border 
				${ variant === 'text' ? 'bg-red-100/50 border-red-100' : ''}
				${ variant === 'outlined' ? 'border-red-600' : ''}
				${ variant === 'filled' ? 'bg-red-500 text-white' : ''}
			`}>

				{showSeverity && <AlertErrorIcon />}
				<div>
					{title && <h1 className='text-red-600 font-semibold'>{title} </h1> }
					<p className={`${variant==='filled' ? '' : 'text-red-600'}`}>{message}</p> 
				</div>

				{action && (
					<button onClick={onClose} type='button' className={`ml-auto rounded-full p-0.5
						${ variant === 'filled' ? 'hover:bg-red-500 active:bg-red-500' : 'hover:bg-red-100 active:bg-red-200' }
					`}> <CrossIcon /> </button>
				)}
			</div>
		)}






		
		</div>
	)
}


/*




*/