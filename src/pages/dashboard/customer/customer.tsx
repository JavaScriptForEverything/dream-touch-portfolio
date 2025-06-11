
import type { ListObject } from '@/types/common'
import { DeleteOutlinedIcon, EditIcon, EyeOpenIcon, PlusIcon } from '@/icons'
import { Button, DataTable, Search, Select } from '@/components/ui'
import * as layoutReducer from '@/store/layoutReducer'
import { useAppDispatch } from '@/hooks/redux'
import { formatISODate } from '@/lib/utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export interface DataTableRow {
	id: string

	image: React.ReactNode
	title: string
	description: string
	content: string
	location: string
	createdAt: string

	isVisible: boolean
}

const getActionItems = (slug: string): ListObject[] => ([
	{
		label: 'View',
		Icon: EyeOpenIcon,
		path: `/dashboard/customer/view/${slug}`
	},
	{
		label: 'Edit',
		Icon: EditIcon,
		path: `/dashboard/customer/update/${slug}`
	},
	{
		label: 'Delete',
		Icon: DeleteOutlinedIcon,
		path: '#'
	},
])


const tableHeaders: string[] = [
	'Image',
	'Title',
	'Location',
	'Date',
]


const rowItems: DataTableRow[] = [
	{
		id: '1', 									// SL

		image: 
		<div className="flex justify-center items-center">
			<img src='/public/vite.svg' />
		</div>
		,
		title: 'title goes ',
		description: 'layoutReducer HTMLInputElement',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi ducimus fuga consequuntur? Autem ipsa, animi cum aperiam ea, assumenda mollitia excepturi commodi minima necessitatibus ducimus voluptatum consequatur natus facere',
		location: '30 dhaka, badda',
		createdAt: formatISODate( new Date().toISOString() ),

		isVisible: false, 				// Status
	}, 
	{
		id: '2', 									// SL

		image: 
		<div className="flex justify-center items-center">
			<img src='/public/vite.svg' />
		</div>
		,
		title: 'title goes ',
		description: 'layoutReducer HTMLInputElement',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi ducimus fuga consequuntur? Autem ipsa, animi cum aperiam ea, assumenda mollitia excepturi commodi minima necessitatibus ducimus voluptatum consequatur natus facere',
		location: '30 dhaka, badda',
		createdAt: formatISODate( new Date().toISOString() ),

		isVisible: true, 					// Status
	}, 
	{
		id: '3',

		image: 
		<div className="flex justify-center items-center">
			<img src='/public/vite.svg' />
		</div>
		,
		title: 'title goes ',
		description: 'layoutReducer HTMLInputElement',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi ducimus fuga consequuntur? Autem ipsa, animi cum aperiam ea, assumenda mollitia excepturi commodi minima necessitatibus ducimus voluptatum consequatur natus facere',
		location: '30 dhaka, badda',
		createdAt: formatISODate( new Date().toISOString() ),

		isVisible: true, 					// Status
	}, 
	{
		id: '4',


		image: 
		<div className="flex justify-center items-center">
			<img src='/public/vite.svg' />
		</div>
		,
		title: 'title goes ',
		description: 'layoutReducer HTMLInputElement',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi ducimus fuga consequuntur? Autem ipsa, animi cum aperiam ea, assumenda mollitia excepturi commodi minima necessitatibus ducimus voluptatum consequatur natus facere',
		location: '30 dhaka, badda',
		createdAt: formatISODate( new Date().toISOString() ),

		isVisible: false, 				// Status
	}, 
]
 
const options = [
	{ label: "Show 10", value: "10" },
	{ label: "Show 25", value: "25" },
	{ label: "Show 30", value: "30" },
]




export const Customer = () => {
	const dispatch = useAppDispatch()

	const deleteHandler = (_id: string) => {
		dispatch(layoutReducer.setIsOpenSnackbar(true, {
			severity: 'success',
			title: 'Deletion',
			message: 'customer deletion successfull!!!',
			autoClose: true,
		}))
	}

	const bulkDeleteHandler = (ids: string[]) => {

		console.log(ids)

		dispatch(layoutReducer.setIsOpenSnackbar(true, {
			severity: 'success',
			title: 'Deletion',
			message: 'customer bulk deletion successfull!!!',
			autoClose: true,
		}))
	}


  const [selected, setSelected] = useState("one")






	return (
		<div>

			{/* --- header section --- */}
			<section className='flex items-center justify-between border border-slate-100 px-2 py-3 rounded '>
				<h1 className='text-2xl font-bold capitalize'>Customer List</h1>

				<div className="flex items-center gap-2">
					<div className="w-60">
						<Search />
					</div>
					<div className="w-60">
						<Select
							options={options}
							selected={selected}
							onChange={setSelected}
						/>
					</div>
					<Link to='/dashboard/customer/create'>
						<Button className='text-sm md:text-base' >
							<PlusIcon className='' fontSize={20} /> 
							<span className='ml-2 whitespace-nowrap'> Add Customer </span>
						</Button>
					</Link>
				</div>
			</section>

			{/* --- table section --- */}
			<div className="mt-8">
				<DataTable 
					className='bg-white'
					headers={tableHeaders}

					getActionItems={getActionItems}
					pagination={{
						count: 15,
						total: 100,
						onPageChange(page) {
							console.log('call api here', { page })
							console.log({ page })
						},
					}}
					onDelete={deleteHandler}
					onBulkDelete={bulkDeleteHandler}

					rowItems={rowItems}
					renderRow={(row) => (
						<>
							<td>{row.image}</td>
							<td>{row.title}</td>
							{/* <td>{row.description}</td> */}
							{/* <td>{row.content}</td> */}
							<td>{row.location}</td>
							<td>{row.createdAt}</td>
						</>
					)}
				/>
			</div>

		</div>
	)
}
