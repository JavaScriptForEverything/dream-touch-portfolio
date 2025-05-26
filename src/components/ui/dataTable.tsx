import type { ListObject } from '@/types/common'

import { Action } from '@/components'
import { Pagination, Checkbox, DataTableCheckbox } from '@/components/ui'
import * as layoutReducer from '@/store/layoutReducer'
import { useAppDispatch } from '@/hooks/redux'
import { useState } from 'react'


const tableItems = [
	{
		id: '1',
		coverPhoto: '',
		title: '',
		description: '',
		slug: '',
		createdAt: '',
		location: '',
		images: '',
		content: '',
	}, 
	{
		id: '2',
		coverPhoto: '',
		title: '',
		description: '',
		slug: '',
		createdAt: '',
		location: '',
		images: '',
		content: '',
	}, 
]


interface Props {
	headers: string[]
	actionItems: ListObject[]
	pagination: {
		total: number
		count: number
		onPageChange: (page: number) => void
	}
}

export const DataTable = ({ headers, actionItems, pagination }: Props) => {
	const dispatch = useAppDispatch()

	const handlePageChange = (page: number) => {
		console.log('call api here', { page })
		pagination.onPageChange(page)
	}

	const deleteHandler = (deleteId: string) => {
		console.log('delete action', { deleteId })

		dispatch(layoutReducer.setIsOpenSnackbar(true, {
			severity: 'success',
			title: 'Deletion',
			message: 'portfolio deletion successfull!!!',
			autoClose: true,
		}))
	}

	const [selectedIds, setSelectedIds] = useState<string[]>([])

	const checkBoxChangeHandler = (userId: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {

		if (evt.target.checked) {
			setSelectedIds((prev) => [...prev, userId])
		} else {
			setSelectedIds((prev) => prev.filter((id) => id !== userId))
		}
	}

	const toggleAllSelection = (isChecked: boolean) => () => {
		const selectedIds = tableItems.map( item => item.id) 
		setSelectedIds( isChecked ? [] : selectedIds)
	}

	return (
		<>
		<div className=" w-[286px] md:w-[950px] overflow-x-auto rounded border border-gray-300 shadow-sm " >

			<table className="min-w-full divide-y divide-gray-300">
				<thead className="ltr:text-left rtl:text-right">
					<tr className="
						*:font-medium *:text-gray-900 
						[&>th]:p-3 [&>tr>td]:truncate [&>tr>td]:max-w-48 
						[&>th]:text-center
					">
						<th>
							<div className="flex items-center">
								{selectedIds.length == tableItems.length ? (
									<DataTableCheckbox 
										fullCheck={true}
										partialCheck={false}
										onClick={toggleAllSelection(true)}
									/>
								) : selectedIds.length ? (
									<DataTableCheckbox 
										fullCheck={false}
										partialCheck={true}
										onClick={toggleAllSelection(true)}
									/>
								): (
									<DataTableCheckbox 
										fullCheck={false}
										partialCheck={false}
										onClick={toggleAllSelection(false)}
									/>
								)}
							</div>
						</th>

						{headers.map( item => (
							<th key={item}>{item}</th>
						))}
					</tr>
				</thead>

				<tbody className="divide-y divide-dashed divide-gray-300 *:text-gray-700 [&>tr>td]:px-3 [&>tr>td]:py-2 [&>tr>td]:truncate [&>tr>td]:max-w-48 ">

					{tableItems.map( row => (
						<tr key={row.id}>
							<td>
								<Checkbox 
									onChange={checkBoxChangeHandler(row.id)}
									checked={selectedIds.includes(row.id)}
								/>

							</td>
							<td>{row.id}</td>
							<td>Nandor the Relentless </td>
							<td>04/06/1262</td>
							<td>Vampire Warrior</td>
							<td>$0</td>
							<td>$0</td>
							<td>$0</td>
							<td>$0</td>
							<td>$0</td>

							<td>
								<Action 
									id={row.id}
									actionItems={actionItems}
									onDelete={deleteHandler}
								/>
							</td>

						</tr>
					))}


				</tbody>
				<tfoot>
					<tr>
						<td colSpan={10} className=" w-full py-4 ">
							<div className="flex justify-end">
								<Pagination 
									// total={100} 
									// count={15} 
									total={pagination.total} 
									count={pagination.count} 
									onPageChange={handlePageChange}
								/>
							</div>
						</td>
					</tr>
				</tfoot>
			</table>

		</div>

		</>
	)
}


