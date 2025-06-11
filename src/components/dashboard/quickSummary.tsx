import { BounceRateIcon, GrowthRateIcon, MetadataIcon, VisitorIcon } from '@/icons'

type GridItem = {
	id: string
	label: string
	value: string
	node: React.ReactNode
	color: string
}


const gridItems: GridItem[] = [
	{
		id: '1',
		label: 'visitor',
		value: '3000',
		node: <VisitorIcon className='size-20' />,
		color: 'bg-red-500',
	},
	{
		id: '2',
		label: 'bounce rate',
		value: '30',
		node: <BounceRateIcon className='size-20' />,
		color: 'bg-yellow-500',
	},
	{
		id: '3',
		label: 'page views',
		value: '300',
		node: <MetadataIcon className='size-20' />,
		color: 'bg-green-500',
	},
	{
		id: '4',
		label: 'growth rate',
		value: '300',
		node: <GrowthRateIcon className='size-20' />,
		color: 'bg-blue-500',
	},
]

export const QuickSummary = () => {

	return (
		<>
			{gridItems.map( item => (
				<div key={item.id} className={` ${item.color} text-white p-4 flex justify-between items-center `} >
					<div className=" flex flex-col gap-1 items-center">
						<span className='text-3xl font-medium'>{item.value}</span>
						<span className='font-bold uppercase'>{item.label}</span>
					</div>

					<div>
						{item.node}
					</div>
				</div>
			))}
		</>
	)
}

