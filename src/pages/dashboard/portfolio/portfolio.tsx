import type { ListObject } from '@/types/common'
import { DeleteOutlinedIcon, EditIcon, EyeOpenIcon } from '@/icons'
import { Button, DataTable } from '@/components/ui'
import { AddPlusIcon } from '@/icons'
import * as layoutReducer from '@/store/layoutReducer'
import { useAppDispatch } from '@/hooks/redux'
import { formatISODate } from '@/lib/utils'


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

const actionItems: ListObject[] = [
	{
		label: 'View',
		Icon: EyeOpenIcon,
		// path: '/dashboard/service'
		path: '#'
	},
	{
		label: 'Edit',
		Icon: EditIcon,
		path: '#'
	},
	{
		label: 'Delete',
		Icon: DeleteOutlinedIcon,
		path: '#'
	},
]

const tableHeaders: string[] = [
	'Image',
	'Title',
	'Description',
	'Content',
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
 
export const Portfolio = () => {
	const dispatch = useAppDispatch()

	const deleteHandler = (_id: string) => {
		dispatch(layoutReducer.setIsOpenSnackbar(true, {
			severity: 'success',
			title: 'Deletion',
			message: 'portfolio deletion successfull!!!',
			autoClose: true,
		}))
	}

	const bulkDeleteHandler = (ids: string[]) => {

		console.log(ids)

		dispatch(layoutReducer.setIsOpenSnackbar(true, {
			severity: 'success',
			title: 'Deletion',
			message: 'portfolio bulk deletion successfull!!!',
			autoClose: true,
		}))
	}




	return (
		<div>

			{/* --- header section --- */}






			<section className='flex items-center justify-between'>
				<h2>Portfolio List</h2>

				<div className="">
					{/* --- searchbar, select range --- */}

					<Button className='text-sm md:text-base' > <AddPlusIcon className='mr-2 ' fontSize={20} /> Add Portfolio</Button>
				</div>
			</section>


			{/* --- table section --- */}
			<DataTable 
				headers={tableHeaders}

				actionItems={actionItems}
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
						<td>{row.description}</td>
						<td>{row.content}</td>
						<td>{row.location}</td>
						<td>{row.createdAt}</td>
					</>
				)}
			/>

		</div>
	)
}
