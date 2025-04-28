import Link from 'next/link'
import { BreadCrumbs } from '@/components'

const navItems = [
	{ name: 'Real Project', href: '/portfolio/real-project' },
	{ name: 'Residential Project', href: '/portfolio/real-project' },
	{ name: 'Office Interior Project', href: '/portfolio/real-project' },
	{ name: 'Hotel Interior Project', href: '/portfolio/real-project' },
	{ name: 'Showroom Interior Project', href: '/portfolio/real-project' },
	{ name: 'Restaurant Interior Project', href: '/portfolio/real-project' },
	{ name: 'Exterior Design Project', href: '/portfolio/real-project' },
]

const Portfolio = () => {

	return (
		<>
			<BreadCrumbs />
		Portfolio page

		{/* <Cart 
			imageUrl="/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp"
			title="Project Title"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		/> */}

		<ul>
			{navItems.map((item) => (
				<li key={item.name}>
					<Link href={item.href} className="text-blue-500 hover:underline">
						{item.name}
					</Link>
				</li>
			))}
		</ul>
    
    
		</>
	)
}
export default Portfolio
