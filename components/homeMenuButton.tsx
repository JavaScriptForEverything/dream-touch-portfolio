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
			<button onClick={toggleDrawer} className='md:hidden text-slate-500 hover:text-slate-600 active:text-slate-800'>
				<MenuIcon fontSize={32} />
			</button>
		</>
	)
}
