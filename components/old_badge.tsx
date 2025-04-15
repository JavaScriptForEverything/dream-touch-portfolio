
/*
<Badge badgeContent={2} className='bg-blue-500' > 										// set badge color (& position if needed)
	<CartIcon fontSize={24} className='ml-auto text-slate-600' /> 			// set icon color & size
</Badge>
*/

type Props = React.ComponentProps<'button'> & {
	children: React.ReactNode
	badgeContent: number
}

export const Badge = ({ children, className, badgeContent, ...rest }: Props) => {

	return (
		<div className={`relative `}> 
			<button {...rest} className={`
				absolute -top-2 -right-2 w-4 h-4 text-xs rounded-full  text-slate-50 flex items-center justify-center
				${className}
			`} > {badgeContent} </button>
			{children} 
		</div>
	)
}

<Badge
	badgeContent={4}
	onClick={f=>f}
	onChange={f=>f}
>
	one
</Badge>