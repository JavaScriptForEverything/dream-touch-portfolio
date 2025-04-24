'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { CrossIcon, MenuIcon } from '@/icons'
import * as layoutReducer from '../store/layoutReducer'

export const HomeMenuButton = () => {
	const dispatch = useAppDispatch()
	const { drawerIsOpen } = useAppSelector( state => state.layout)

	const toggleDrawer = () => {
		dispatch(layoutReducer.setDrawerIsOpen(!drawerIsOpen))
	}

	return (
		<>
			<button onClick={toggleDrawer} className='md:hidden text-slate-50 
			hover:text-red-500 active:text-red-600 cursor-pointer'>
				{/* {drawerIsOpen ?  <CrossIcon className='w-12 h-12' />	: <MenuIcon fontSize={32} /> } */}
				<MenuIcon fontSize={32} />
			</button>
		</>
	)
}
