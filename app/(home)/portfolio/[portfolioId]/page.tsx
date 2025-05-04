'use client'
import 'react-quill-new/dist/quill.snow.css';

import { useState } from 'react'
import Image from 'next/image'
import { BreadCrumbs } from '@/components'
import { useParams } from 'next/navigation'
import { portfolioes } from '@/data/home'
import ImageCarouselModal from '@/components/imageCaroselModal'
import ContactForm from '../../contact-us/contactForm'



const PortfolioDetailsPage = () => {
	const { portfolioId} = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

	const portfolio = portfolioes.find( portfolio => portfolio.url === portfolioId)
	const portfolioImages = portfolio?.images || []
	const imageSlicerLength = 6

 	// Slice image array into multiple nested array of given length: ( [1,2,3,4,5,6], 2 ) => [ [1,2], [3,4], [5,6] ]
  const chunkArray = (array: string[], chunkSize: number) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  // Split documents into chunks of 50
  const portfolioImagesChunks = portfolioImages.length ? chunkArray(portfolioImages, imageSlicerLength) : []


  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

	return (
		<>
			<BreadCrumbs />
			<div data-name="hero-image-container" className='-mx-20' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						src={portfolio?.coverPhoto || '/images/portfolio/portfolio-hero-image.webp' }
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

			<div data-name="hero-content-container" className="-mx-8 md:-mx-20 p-8 bg-slate-100/80 ">
				<div className=' mb-16 text-slate-600 font-light '>
					<h1 className=' text-slate-950 text-shadow-2xs text-xl md:text-2xl font-extrabold my-3 capitalize  '>
						Image Gallery
					</h1>

					{portfolioImagesChunks.map((chunks, chunkIndex) => (
						<div key={chunkIndex} >
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{chunks.map((image, index) => (
									<div 
										key={image} 
										onClick={() => openModal(index)}
										className="
											border-4
											border-white
											rounded-sm
											bg-slate-100
											overflow-hidden
											group
										"
									>
											<Image 
												src={image}
												alt={image}
												width={350}
												height={250}
												className='w-full h-full object-cover
												group-hover:scale-105 duration-500 
												cursor-pointer
												'
											/>
									</div>
								))}
							</div>

							<div data-name='call-to-action' className="my-20 bg-white">
								<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
									<div data-name='image-container' 
										className="
											col-span-12 md:col-span-7
											border-0
											border-white
											rounded-sm
											bg-slate-100
											overflow-hidden
											group
										"
									>
											<Image 
												// src={'/images/portfolio/portfolio-hero-image.webp'}
												src={chunks[0] || ''}
												alt={''}
												width={350}
												height={250}
												className='w-full h-full object-cover'
											/>
									</div>

									<div data-name="contact-up-form" className=" col-span-12 
									md:col-span-5 ">
										<div className=" ">

										<h1 className="py-6 bg-blue-50 text-green-700 font-semibold 
										text-center 
										text-sm md:text-lg
										">
											For Free Consultancy Please Contact With Us
										</h1>
										</div>

										<div className="bg-white py-4 border border-slate-200/70 mt-4">
											<div className="px-4">
												<ContactForm />
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					))}


				</div>
			</div>


      {portfolioImages.length && isModalOpen && (
        <ImageCarouselModal
          images={portfolioImages}
          initialIndex={selectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}


			{/* <QuillEditor /> */}

			<div data-name="content-container" className="-mx-8 md:-mx-20 p-8 bg-slate-50/80 ">

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

			<div data-name="content-container" className="-mx-8 md:-mx-20 p-8 ">
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

		</>
	)
}
export default PortfolioDetailsPage




