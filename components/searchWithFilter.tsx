'use client'

import { SearchIcon } from '@/icons'
import { Select } from './mui/select'
import { ChangeEvent, useState } from 'react'
import { usePathname } from 'next/navigation'

const options = [
	'name',
	'category',
	'slug'
]


type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const SearchWithFilter = ({ className }: Props) => {
	const [ selectValue, setSelectValue ] = useState(options[0])
	const [ searchValue, setSearchValue ] = useState('')
	const pathname = usePathname()

	const selectHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(evt.target.value)
	}
	const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value)
	}
	const submitHandler = (evt: ChangeEvent<HTMLFormElement>) => {
		evt.preventDefault()

		console.log({ selectValue, searchValue })
	}

	return pathname !== '/' ? '' : (
		<div className={className}>
			<form onSubmit={submitHandler} className={`border border-blue-400 flex h-full rounded`}>
				<Select 
					value={selectValue}
					onChange={selectHandler}
					options={options}
					className='text-blue-700 rounded'
				/>
				<span className='border border-r-slate-300 mr-1 rounded'></span> 		{/* right border 	*/}

				<input type='search' placeholder='Search Product ...'  className='
					flex-1 
					text-slate-700 rounded
					focus:outline-none 
					focus:border-slate-400
				'
				value={searchValue}
				onChange={changeHandler}
				/>
				<button className='
					flex items-center gap-2 border 
					bg-blue-500 text-white px-3 py-1.5 rounded
					hover:bg-blue-500/90 
					active:bg-blue-600/90 
					border-blue-600/90
					active:border-blue-600
					ml-2
				'>
					<SearchIcon fontSize={24}/>
					Search
				</button>
			</form>
		</div>
	)
}
