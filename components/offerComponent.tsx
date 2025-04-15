import Image from 'next/image'

type Props = React.ComponentProps<'div'> & {
	image: string
	label: string
	value: string
}
export const OfferComponent = (props: Props) => {
	const { label, value, image, className } = props

	return (
		<div className={`${className} bg-blue-50/50 grid grid-rows-3 border border-slate-300 rounded-md`}>
			<div className="row-span-2 relative">
				<Image 
					src={image}
					alt={image}
					fill
					sizes='200px'
					className='object-contain'
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-1 p-2">
				<p className='font-semibold capitalize'>{label}</p>
				<span className="bg-green-100 text-green-600 text-sm rounded-full px-3 py-1">{value}</span>
			</div>
		</div>
	)
}
