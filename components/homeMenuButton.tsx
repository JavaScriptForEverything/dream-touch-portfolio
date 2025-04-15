'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { MenuIcon } from '@/icons'
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
			hover:text-red-500 active:text-red-600'>
				<MenuIcon fontSize={32} />
			</button>
		</>
	)
}
