'use client'
import { Drawer } from './mui'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import * as layoutReducer from '../store/layoutReducer'

// add drawer eighter in /app/layout.tsx or /hoc/withLayout.tsx
export const DrawerPanel = () => {
	const dispatch = useAppDispatch()
	const { drawerIsOpen } = useAppSelector(state => state.layout)

	const toggleDrawer = () => {
		dispatch(layoutReducer.setDrawerIsOpen(!drawerIsOpen))
	}

	return (
		<div>
			<Drawer isOpen={drawerIsOpen} onClose={toggleDrawer} position="left" variant="temporary">
				<div>
					<h2 className="text-lg font-bold">Drawer Content</h2>
					<p>Your content goes here.</p>
				</div>
			</Drawer>
		</div>
	)
}
