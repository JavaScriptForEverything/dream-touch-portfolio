import { ArrowRightIcon } from '@/icons'
import FooterBlock from './footer/footerBlock'
import { contactInfo, footerLinkItems, socialMediaItems } from '@/data'
import { EmbeddedMap } from '@/components'
import WhatsappChat from './whatsappChat'
import Link from 'next/link'


type Props = {
	children?: Readonly<React.ReactNode>
	className?: React.ComponentProps<'main'>['className']
}

export const Footer = ({ className }: Props) => {

	return (
		<footer className={`${className} mt-6 bg-[#292929]  text-slate-100`}>

			<div className="container mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-4">
				<FooterBlock title='about'>
					<div className="text-sm tracking-normal leading-relaxed ">
						Our success in today's competitive market depends on our dedicated team pooling their talent. This combination enables us to outperform our competitors. Our goal is the same: to become the best choice for our customers.
					</div>

					<div className="
					inline-flex items-center gap-4 mt-12 text-sm font-bold 
					border-b-[1px] border-dashed border-slate-300/20
					
					">
						<Link href='#' className='text-red-500 hover:text-slate-50'> Read more </Link>
						<ArrowRightIcon />
					</div>
				</FooterBlock>

				<FooterBlock title='contact info'>
					<div>
						<table className="w-full ">
							<tbody>

								{contactInfo.map(({ label, href, placeholder, Icon }) => (
									<tr key={href} className='text-slate-400 hover:text-slate-300/90 text-sm'>
										<td className="w-1/3 py-2">
											<div className="flex items-center gap-2">
												<Icon className='text-red-500 w-5 h-5 mr-2' />
												<span className="font-medium capitalize">{label}</span>
											</div>
										</td>

										<td className='pr-2'>:</td>

										<td className='w-full'>
											<Link href={href} className="hover:text-red-600 transition"> {placeholder} </Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<p className='text-slate-100 text-xs font-extrabold flex gap-2 pt-12'>
							<span>Saturday - Tuesday :</span>
							<span className='text-red-500'>Open 24 hours</span>
						</p>
					</div>
				</FooterBlock>

				<FooterBlock title='company Location'>
					<EmbeddedMap className='aspect-video' />
				</FooterBlock>
			</div>

			<div className="container mx-auto px-8 lg:px-20 grid grid-cols-1 gap-4">
				<FooterBlock title='Links'>
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
						{footerLinkItems.map((link) => (
							<div key={link.title} className="flex flex-col gap-4">
								<p className='underline underline-offset-6'>{link.title}</p>
								<ul className="flex flex-col gap-2">
									{link.child.map(({ label, href }) => (
										<li key={label} className="text-sm text-slate-400 hover:text-slate-300/90">
											<Link href={href} className="flex items-center gap-2 capitalize truncate ">
												{label}
											</Link>
										</li>
									))}
								</ul>

							</div>
						))}
					</div>

				</FooterBlock>
			</div>



			<div className="container mx-auto px-8 lg:px-20 my-6 flex items-center gap-1 rounded-sm">
				{socialMediaItems.map(({ label, path, Icon }) => (
					<div key={label} className="flex items-center gap-2">
						<Link href={path} title={label} className="
							p-2 border border-slate-400/20 bg-slate-700/20
							hover:border-slate-400/50 hover:bg-slate-700/50
						">
							<Icon className='text-red-500 w-5 h-5' />
						</Link>
					</div>
				))}
			</div>

			<WhatsappChat />


			<p className='py-1 bg-[rgb(32,32,32)] text-center' >
 				All Right Reserved &copy;HashTAG 
			</p>
		</footer>
	)
}


