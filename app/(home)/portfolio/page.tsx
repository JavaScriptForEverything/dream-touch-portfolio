import Link from 'next/link'
import { BreadCrumbs } from '@/components'
import Image from 'next/image'
// import { companyInfo } from '@/data'
import { portfolioes } from '@/data/portfolio'
import { formatISODate } from '@/lib/utils'

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
			<div data-name="hero-image-container" className='-mx-20' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						src='/images/portfolio/portfolio-hero-image.webp'
						alt='hero image missing'
						fill
						className="object-cover
						brightness-75
						"
					/>

					<div data-name="hero-image-content"
						className='absolute left-1/2 top-1/2 -translate-1/2
							bg-slate-500/20 w-full py-4
							text-shadow-2xs
							flex flex-col items-center
						'
					>
						<p className='tracking-widest text-4xl font-extrabold
							uppercase
						'>
							Portfolio
						</p>

						<p className='my-2 capitalize text-shadow text-white italic
						'>
							We turn ideas into works of art
						</p>
					</div>

				</div>
			</div>

			<div data-name="hero-content-container" className="-mx-8 md:-mx-20 p-8 bg-white ">
				<div className=' mb-16 text-slate-600 font-light '>
					<h1 className=' text-slate-950 text-shadow-2xs text-2xl md:text-4xl font-extrabold my-4 capitalize mb-8 '>
						Portfolio Projects 
						{/* Portfolio Projects by {companyInfo.name} & Interior */}
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

						{portfolioes.map((portfolio) => (
							<div key={portfolio.coverPhoto} className="
							border
							border-red-50 
							hover:border-red-200
							rounded-sm
							bg-slate-100
							overflow-hidden
							group
							">
								<Link href={`/portfolio/${portfolio.slug}`}>
									<Image 
										src={portfolio.coverPhoto}
										alt={portfolio.coverPhoto}
										width={350}
										height={250}
										className='w-full h-60 
										group-hover:scale-100 duration-500 
										'
									/>
								</Link>

								<div className="p-4 bg-slate-100">
									<Link href={`/portfolio/${portfolio.slug}`}>
										<h3 className='
										text-red-600 
										font-extrabold text-lg truncate overflow-hidden 
										whitespace-nowrap hover:text-red-700 '>{portfolio.title}</h3>
									</Link>

									<p className='text-xs text-slate-800 hover:text-slate-950 
									line-clamp-1 my-0.5 flex gap-1
									'>
										<span className=''> {formatISODate(portfolio.createdAt)} </span>
										<span> | </span>
										<span className='capitalize line-clamp-1'> {portfolio.location} </span>
									</p>

									<p className="border-b border-red-300 my-2 w-0 group-hover:w-full
									duration-500
									"></p>

									<p className='text-slate-600 line-clamp-6 mt-6 '>{portfolio.description}</p>
									<div className="flex justify-start mt-6">

										{/* <Link href={portfolio.slug} className='
											p-3 rounded-full
											-rotate-45

											text-red-600
											bg-red-100 

											group-hover:bg-red-600
											group-hover:text-slate-50	
											group-active:bg-red-700
											group-active:text-slate-50	

										'>
											<ArrowRightIcon className='w-6 h-6 inline-block ' />
										</Link> */}

										<Link href={`/portfolio/${portfolio.slug}`} className='
											px-3 py-1.5 rounded-md

											text-white
											bg-red-600

											hover:bg-red-600/90
											hover:text-slate-50	
											active:bg-red-700
											active:text-slate-50	
											transition-colors duration-300

										'>
											Details
										</Link>
									</div>
							</div>

							</div>
						))}

					</div>

				</div>
			</div>


    
    
		</>
	)
}
export default Portfolio
