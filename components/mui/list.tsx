

type Props = {
	children?: Readonly<React.ReactNode>
	primary?: string
	secondary?: string
	avatar?: React.ReactNode 
	images?: React.ReactNode[]
	icon?: React.ReactNode
	isHover?: boolean
	isActive?: boolean
}
export const List = (props: Props) => {

		const {
			primary='',
			secondary='',
			avatar,
			images,
			icon,
			isHover=false,
			isActive=false,
			// children
		} = props

	const imageSize = (primary && secondary) ? 'w-12 h-12' : 'w-8 h-8'

	return (
		<div className={`group border-b border-slate-200 px-3 py-1.5 rounded-sm 
			${isActive ? 'bg-slate-200 border-slate-300': 'bg-slate-50'} 
			${isHover ? 'hover:bg-slate-100 active:bg-slate-200' : ''}
		`} >

			<div className='flex gap-2 items-center '>

				{images?.length ? (
					<div className='relative w-8 h-8'>
						<span className='absolute -top-1 left-3 w-8 h-8 rounded-full border border-slate-300'>
							{images[0]} 
						</span>

						<span className='absolute top-2 left-0 w-8 h-8 rounded-full border border-slate-300'>
							{images[1]} 
						</span>

					</div>

				) : avatar && (
						<span className={`${imageSize} rounded-full border border-slate-300`} >
							{avatar}
						</span>
					)
				}

				<div className={images?.length ? 'ml-4' : ''}>
					{primary && (
						<h2 className='text-slate-700 font-medium hover:text-slate-800 truncate w-60'>{primary}</h2> 
					)}
					{secondary && (
						<p className='text-slate-700/95 hover:text-slate-800/90 font-light text-sm truncate w-120'>{secondary}</p> 
					)}
				</div>

				{icon && (
					<button type='button'  className='
						ml-auto p-0.5 text-slate-600 rounded-full bg-slate-200 border border-slate-200
						group-hover:bg-slate-300 group-hover:border-slate-300 hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700
						group-active:border-slate-400 active:bg-blue-400 active:border-blue-500 active:text-blue-600
						[&>svg]:pointer-events-none
						'
					> {icon} </button> 
				)}
							
			</div>
		</div>
	)
}

