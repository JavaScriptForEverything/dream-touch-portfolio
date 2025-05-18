import Image from 'next/image'
import { BreadCrumbs, Empty } from '@/components'
import { actionApiRequest } from '@/actions/api'
import { PortfolioDocument } from '@/types/portfolio'
import { PortFolioModal } from '@/components/portfolio'



interface Props {
	params: Promise<{
		portfolioId: string
	}>
}
const PortfolioDetailsPage = async ({ params }: Props) => {
	const { portfolioId: portfolioSlug } = await params

	const { status, message, data: portfolio } = 
	await actionApiRequest<PortfolioDocument>(`/api/portfolios/${portfolioSlug}`)

	if(status === 'error') console.log(message) 

	return (
		<>
			<div className="px-2 md:px-20">
				<BreadCrumbs />
			</div>
			<div data-name="hero-image-container" className='' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						// src={pages?.coverPhoto.secure_url || '/images/portfolio/portfolio-hero-image.webp' }
						src={'/images/portfolio/portfolio-hero-image.webp' }
						alt='hero image missing'
						fill
						className="object-cover brightness-75 "
					/>

					<div data-name="hero-image-content"
						className='absolute left-1/2 top-1/2 -translate-1/2
							bg-slate-500/20 w-full py-4
							text-shadow-2xs
							flex flex-col items-center
						'>
						<p className='tracking-widest text-4xl font-extrabold uppercase '> Portfolio </p>
						<p className='my-2 capitalize text-shadow text-white italic '>
							We turn ideas into works of art
						</p>
					</div>

				</div>
			</div>

			<div className="p-2 md:px-20">
				<div data-name="hero-content-container" className="mt-20 bg-slate-100/20 ">
					<div className=' mb-16 text-slate-600 font-light '>
						<h1 className=' text-slate-950 text-shadow-2xs text-xl md:text-2xl font-extrabold py-6 capitalize  '>
							Image Gallery
						</h1>

						
						{status === 'error' ? <Empty /> : portfolio && (
							<PortFolioModal portfolio={portfolio} />
						)}
					</div>
				</div>

				<div data-name="content-container" className="bg-slate-100/20 ">
					<div data-name="portfolio-details" className="bg-slate-100/50 py-8 px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">
							<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
								{portfolio?.title}
							</h1>

							<p>
									Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.
							</p>

							<p className="mt-4">
									Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.
							</p>

							<h2 className="text-2xl font-bold mt-6">Why Hire an Interior Designer?</h2>
							<p className="mt-2">
									Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.
							</p>

							<h3 className="text-xl font-semibold mt-4">Avoiding Aesthetic Mismatches</h3>
							<p className="mt-2">
									Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.
							</p>

							<h3 className="text-xl font-semibold mt-4">Material Collection</h3>
							<p className="mt-2">
									Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.
							</p>

							<h3 className="text-xl font-semibold mt-4">Qualified Team for Residential Interior Design</h3>
							<p className="mt-2">
									A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.
							</p>

							<h2 className="text-2xl font-bold mt-6">Our Services</h2>
							<p className="mt-2">
									Dream Touch Interiors offers a wide range of services for residence interior design, including:
							</p>
							<ul className="list-disc ml-6 mt-2">
									<li>Living room interior design</li>
									<li>Bedroom interior design</li>
									<li>Dining room interior design</li>
									<li>Kitchen cabinet design and installation</li>
									<li>Custom furniture design</li>
							</ul>

							<h3 className="text-xl font-semibold mt-4">How We Work</h3>
							<p className="mt-2">
									Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards.
							</p>

					</div>
				</div>

				<div data-name="content-container" className="bg-slate-100/20">
					<div data-name="portfolio-details" className="py-8 px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">
						<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
							{portfolio?.title}
						</h1>

						{portfolio?.content && (
							<div 
								data-name="content-container" 
								className="ql-editor"
								dangerouslySetInnerHTML = {{ __html: portfolio.content  }}
							/>
						)}
					</div>
				</div>
			</div>


		</>
	)
}
export default PortfolioDetailsPage




