import type { ListObject } from '@/types/common'
import { DeleteOutlinedIcon, EditIcon, EyeOpenIcon } from '@/icons'
import { Button, DataTable } from '@/components/ui'
import { AddPlusIcon } from '@/icons'


const tableHeaders: string[] = [
	'SL',
	'Image',
	'Title',
	'Description',
	'Slug',
	'Location',
	'Images',
	'Content',

	'Status',
	'Action',
]

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

export const Portfolio = () => {

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
						console.log({ page })
					},
				}}

			/>



		</div>
	)
}
