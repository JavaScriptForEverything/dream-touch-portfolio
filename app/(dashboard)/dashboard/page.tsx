'use client'

import QuillEditor from '@/components/dashboard/product/QuillEditor'
import { Button } from '@/components/mui'
import { DashboardIcon, FilterIcon, GiftIcon, Group3Icon, GroupIcon, ListIcon, SettingsIcon } from '@/icons'
import Link from 'next/link'


const leftPanelItems = [
	{ label: 'dashboard', path: '/dashboard', 				Icon: DashboardIcon },
	{ label: 'products', 	path: '/dashboard/products',Icon: GiftIcon },
	{ label: 'orders', 		path: '/dashboard/orders', 	Icon: ListIcon },
	{ label: 'customers', path: '/dashboard/customers', Icon: GroupIcon },
	{ label: 'vendors', 	path: '/dashboard/vendors', Icon: Group3Icon },
	{ label: 'settings', 	path: '/dashboard/settings',Icon: SettingsIcon },
]
const filterIcons = [
	{ label: 'rating', 		path: '/dashboard', 				Icon: FilterIcon },
	{ label: 'price', 		path: '/dashboard/products',Icon: FilterIcon },
	{ label: 'category', 	path: '/dashboard/orders', 	Icon: FilterIcon },
]

const Dashboard = () => {

	return (
		<main className='container mx-auto min-h-screen grid grid-cols-12 gap-4 px-4 md:px-0 text-slate-600 '>

			{/* ----------[ left panel ]---------- */}
			<aside className="col-span-2 border border-slate-200">
				{leftPanelItems.map( ({ label, path, Icon }) => (
					<Link key={label} href={path} className=''>
						<div className='hover:bg-blue-50 cursor-pointer border border-slate-100 hover:border-blue-200/50
							active:bg-blue-200/50 active:border-blue-200 active:text-slate-700
							flex items-center gap-4 p-4 capitalize text-xl
							group relative
						'>
							<Icon className='peer shrink-0' fontSize={24} />
							{/* <span className='group-hover:block md:block absolute top-0 left-12'>{label}</span> */}
							<span className='hidden md:block'>{label}</span>
						</div>
					</Link>
				))}
			</aside>

			{/* ----------[ right section ]---------- */}
			<aside className="col-span-10 grid grid-cols-2 gap-4">
				{/* ----------[ right: left-panel ]---------- */}
				<aside className="col-span-2 md:col-span-1 p-2 border border-blue-500">

					<div className="mb-8">

						<QuillEditor />
					</div>

					<div className="flex items-center gap-1">
						{filterIcons.map(({ label, Icon}) => (
							<Button key={label} 
								variant='outlined'
								color='primary'
								size='small'
								className='flex items-center gap-1 capitalize '
							> 
								<Icon fontSize={18} className='peer' />
								{label} 
							</Button>
						))}
					</div>
				</aside>

				{/* ----------[ right: right-panel ]---------- */}
				<aside className="col-span-2 md:col-span-1 border border-blue-500">
					<span>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi quo odio molestias architecto voluptatum cumque officiis, officia sed ducimus. Tempore molestiae laborum delectus officiis libero beatae. Incidunt, nihil quis.
					</span>
				</aside>

			</aside>

		</main>
	)
}
export default Dashboard
