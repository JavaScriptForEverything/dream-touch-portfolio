import Link from 'next/link'
import { HomeMenuButton } from './homeMenuButton'
import { cartLabel, topRightConrnerMenuItems } from '@/data'
import { SearchWithFilter } from './searchWithFilter'
import { ClientBadge } from './clientBadge'


type Props = {
	children?: Readonly<React.ReactNode>
	className?: React.ComponentProps<'main'>['className']
}

export const Header = async ({}: Props) => {

	return (
		<div className='sticky top-0 z-50 bg-slate-50'>
			
			{/* 1. main header  */}
			<div className='h-16 flex items-center gap-2 px-2 md:px-0 md:container md:mx-auto'>

				<div className='flex gap-2 items-center '>
					<HomeMenuButton />
					<Link href='/' >
						<h2 className=' text-xl text-shadow uppercase text-slate-500 hover:text-slate-600 active:text-slate-800 '>
							DREAM TOUCH
						</h2>
					</Link>
				</div>

				<div className='flex-1 hidden md:flex items-center justify-center  '>
					<SearchWithFilter className='h-10' /> 
				</div>

				{/* -----[ to-right-corner section ]----- */}
				<div className='ml-auto flex items-center gap-4'>
					{/* {topRightConrnerMenuItems.map(({ label, Icon, path }) => (
					<Link key={label} href={path} className='flex flex-col items-center hover:text-slate-950 hover:scale-[1.02]' >
						{label === cartLabel ? 

							<ClientBadge max={9} color='primary'>
								<Icon fontSize={32} className='text-slate-500 rounded-full hover:text-slate-600 '/>
							</ClientBadge>
						: 
							<Icon fontSize={32} className='text-slate-500 rounded-full hover:text-slate-600 '/>
						}
						<span className='text-slate-700 text-xs capitalize hover:scale-100 '>{label}</span>
					</Link>
					))} */}
				</div>
			</div>

			<hr className='divide-x pb-2' />
		</div>
	)
}
