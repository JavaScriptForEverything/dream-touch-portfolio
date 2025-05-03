import Link from 'next/link'
import { footerLinkItems } from '@/data'
import FooterBlock from './footerBlock'

interface Props extends React.ComponentProps<'div'> {
	titleClass?: string
	childClass?: string
}

const SiteMap = ({ className, titleClass, childClass } : Props) => {

	return (
		<FooterBlock title='Links'>
			<div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 ${className}`}>
				{footerLinkItems.map((link) => (
					<div key={link.title} className="flex flex-col gap-4">
						<p className={`underline underline-offset-6 font-extrabold ${titleClass}`}>{link.title}</p>
						<ul className="flex flex-col gap-2">
							{link.child.map(({ label, href }) => (
								<li key={label} className={`text-sm ${childClass}`}>
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
	)
}
export default SiteMap
