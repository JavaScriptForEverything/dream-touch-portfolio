import Link from 'next/link'
import Image from 'next/image'
import { HomeMenuButton } from './homeMenuButton'
import GetAQuoteButton from './quoteButton'
import { HeaderNavBar } from './header/headerNavbar'
import { contactInfo } from '@/data/home'


type Props = {
	children?: Readonly<React.ReactNode>
	className?: React.ComponentProps<'main'>['className']
}

export const Header = async ({}: Props) => {

	return (
		<div className="sticky top-0 z-20 bg-[#292929] text-slate-50 py-4">
			<div className="container mx-auto px-2 lg:px-20 flex items-center gap-4">
				<Link href='/' className='mr-4 ' >
					<Image 
						src='/logo.svg'
						alt='/logo.svg'
						width={80}
						height={80}
						className='min-w-20'
					/>
				</Link>

				<HeaderNavBar />



				<div className="ml-auto">
					<p className="flex flex-col">
						<span className='font-extralight text-sm md:text-lg'>Have any questions?</span>
						<Link href='tel:+8801713776555' className='font-extrabold text-sm md:text-lg'>
							{contactInfo.phone}
						</Link>
					</p>
				</div>

				<div className="hidden md:block shrink-0">
					<GetAQuoteButton />
				</div>

				<div className="block md:hidden shrink-0">
					<HomeMenuButton />
				</div>
			</div>


		</div>
	)
}
