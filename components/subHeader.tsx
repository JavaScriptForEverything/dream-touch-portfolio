import Link from 'next/link'
import { secondHeaderMenuItems } from '@/data'
import { AlignLeftIcon } from '@/icons'


type Props = {
	children?: Readonly<React.ReactNode>
	className?: React.ComponentProps<'div'>['className']
}

export const SubHeader = ({}: Props) => {

	return (
		<div>
		{/* <div className='sticky top-[72px] z-50 bg-slate-50'> */}
			
			{/* 2. sub-header  */}
			<ul className='px-2 md:px-0  md:container md:mx-auto text-slate-700 flex items-center gap-6 text-shadow overflow-scroll '>
				<li className='capitalize'><AlignLeftIcon fontSize={24} /></li>
				{secondHeaderMenuItems.map( ({ label, path }) => (
					<Link key={label} href={path}>
						<li className='capitalize whitespace-nowrap '>{label}</li>
					</Link>
				))}
			</ul>

			<hr className='divide-x py-2' />

		</div>
	)
}
