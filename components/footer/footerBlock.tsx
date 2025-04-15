
// import Link from 'next/link'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})

type Props = {
	children: Readonly<React.ReactNode>
	title: string
}


const FooterBlock = ({ children, title }: Props) => {

	return (
		<>
			<section className={`${poppins.className}`}>
				<div className="py-8">
					<p className='uppercase pb-2 text-sm font-bold'>{title}</p>
					<div className="flex items-baseline mb-8">
						<div className="h-1 bg-red-500 w-4"></div>
						<div className="h-[1px] bg-slate-600/80 flex-1"></div>
					</div>

					{children}

				</div>
			</section>
		
		</>
	)
}
export default FooterBlock
