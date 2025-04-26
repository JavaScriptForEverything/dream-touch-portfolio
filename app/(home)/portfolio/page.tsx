import Link from 'next/link'

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
		Portfolio page

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
