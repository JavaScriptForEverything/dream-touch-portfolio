type Props = {
	title: string
	children: Readonly<React.ReactNode>
	className?: React.ComponentProps<'div'>['className']
}

export const FooterSegment = ({ className, children, title }: Props) => {
	return (
		<div className='flex flex-col justify-start py-4'>
			<div className='flex items-baseline gap-2 border-b border-dashed pb-1 mb-2'>
				<p className='whitespace-nowrap'> {title} </p>
				<div className='h-3 w-[100vw] [background-image:repeating-linear-gradient(-45deg,_gray_0px_1px,white_2px_3px)]'></div>
			</div>

			<div className={className}>
				{children}
			</div>
			
		</div>
	)
}