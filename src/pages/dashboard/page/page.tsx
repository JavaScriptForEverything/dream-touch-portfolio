import type { ListObject } from '@/types/common'
import { DeleteOutlinedIcon, EditIcon, EyeOpenIcon, PlusIcon } from '@/icons'
import { Button, DataTable, pagesDataTableHeaders, Search, Select } from '@/components/ui'
import * as layoutReducer from '@/store/layoutReducer'
import * as pageReducer from '@/store/pageReducer'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { formatISODate } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export interface DataTableRow {
	id: string

	image: React.ReactNode
	title: string
	description?: string
	content?: string
	location: string
	createdAt: string

	isVisible: boolean
}

const getActionItems = (slug: string): ListObject[] => ([
	{
		label: 'View',
		Icon: EyeOpenIcon,
		path: `/dashboard/page/view/${slug}`
	},
	{
		label: 'Edit',
		Icon: EditIcon,
		path: `/dashboard/page/update/${slug}`
	},
	{
		label: 'Delete',
		Icon: DeleteOutlinedIcon,
		path: '#'
	},
])


const options = [
	{ label: "Show 10", value: "10" },
	{ label: "Show 25", value: "25" },
	{ label: "Show 30", value: "30" },
]




export const Page = () => {
	const dispatch = useAppDispatch()
	const { error, status, pages, totalPages, total } = useAppSelector( state => state.page)

  const [selected, setSelected] = useState("one")


	useEffect(() => {
		dispatch(pageReducer.getPages())
	}, [])

	useEffect(() => {
		if(error) {
			dispatch(layoutReducer.setIsOpenSnackbar(true, {
				severity: 'error',
				// title: 'Error',
				message: error,
				autoClose: false,
				// closeTime: 999999999,
			}))
		}
	},[error])
	useEffect(() => {
		if(status === 'deleted') {
			dispatch(layoutReducer.setIsOpenSnackbar(true, {
				severity: 'error',
				// title: 'Deletation',
				message: 'page deletion successfull!!!',
				autoClose: false,
			}))
		}
	},[status])


	const deleteHandler = (id: string) => {
		dispatch(pageReducer.removePage(id))
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



	const changeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
		setSelected(evt.target.value)
	}


	return (
		<div>

			{/* --- header section --- */}
			<section className='flex items-center justify-between border border-slate-100 px-2 py-3 rounded '>
				<h1 className='text-2xl font-bold capitalize'>Page List</h1>

				<div className="flex items-center gap-2">
					<div className="w-60">
						<Search />
					</div>
					<div className="w-60">
						<Select
							options={options}
							value={selected}
							onChange={changeHandler}
						/>
					</div>
					<Link to='/dashboard/page/create'>
						<Button className='text-sm md:text-base' >
							<PlusIcon className='' fontSize={20} /> 
							<span className='ml-2 whitespace-nowrap'> Add Page </span>
						</Button>
					</Link>
				</div>
			</section>

			{/* --- table section --- */}
			<div className="mt-8">
				<DataTable 
					className='bg-white'
					headers={pagesDataTableHeaders}

					getActionItems={getActionItems}

					pagination={{
						// count: 5,
						// total: 100,
						count: totalPages,
						total: total,
						onPageChange(page) {
							console.log('call api here', { page })
							console.log({ page })
						},
					}}
					onDelete={deleteHandler}
					onBulkDelete={bulkDeleteHandler}

					rowItems={pages}
					renderRow={(row) => (
						<>
							<td className='flex justify-center'><img src={row.coverPhoto?.secure_url} /></td>
							<td>{row.slug}</td>
							<td>{row.slogan}</td>
							<td>{row.sloganSummary}</td>
							<td>{formatISODate(row.createdAt)}</td>
						</>
					)}
				/>
			</div>

		</div>
	)
}
