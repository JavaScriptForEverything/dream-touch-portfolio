'use client'
import Image from 'next/image'
import { Drawer } from './mui'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import * as layoutReducer from '../store/layoutReducer'
import { headerNavItems } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// add drawer eighter in /app/layout.tsx or /hoc/withLayout.tsx
export const DrawerPanel = () => {
	const pathname = usePathname()
	const dispatch = useAppDispatch()
	const { drawerIsOpen } = useAppSelector(state => state.layout)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

	const toggleDrawer = () => {
		dispatch(layoutReducer.setDrawerIsOpen(!drawerIsOpen))
	}



	return (
		<div className=''>
			<Drawer isOpen={drawerIsOpen} onClose={toggleDrawer} position="left" variant="temporary">
				<div className="sticky top-0 z-20 bg-[#292929] text-slate-50">

					<Image 
						src='/logo.svg'
						alt='/logo.svg'
						width={80}
						height={80}
						className='mx-8 h-20'
					/>

					<section className='bg-slate-50 text-slate-800 w-64 '>

						<nav className="flex flex-col">
							{headerNavItems.map( ({ label, path, Icon }) => (
								<Link key={label} href={path}className={` flex gap-4 items-center
									whitespace-nowrap hover:text-red-500 transition-colors duration-300 capitalize 
									py-2 px-8
									bg-red-100 

									${isActive(path)? 'bg-red-200' : 'hover:bg-red-200'}

									active:bg-red-300 
									border-b 
									border-red-200/50
									hover:border-red-300/70
								`}
								onClick={toggleDrawer} 
								>
									<Icon fontSize={24} />
									<span >{label}</span>
								</Link>
							))}
						</nav>

					</section>
				</div>
			</Drawer>
		</div>
	)
}
