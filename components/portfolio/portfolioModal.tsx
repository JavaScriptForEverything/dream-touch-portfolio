'use client'

import Image from 'next/image'
import { PortfolioDocument } from '@/types/portfolio'
import ContactForm from '@/app/(home)/contact-us/contactForm'
import ImageCarouselModal from '@/components/imageCaroselModal'
import { useState } from 'react'

interface Props {
	portfolio: PortfolioDocument
}
export const PortFolioModal = ({ portfolio }: Props ) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

	const portfolioImages = portfolio?.images.map(image => image.secure_url) || [];
	const imageSlicerLength = 6

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
					<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 ">
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

		{portfolioImages.length && isModalOpen && (
			<ImageCarouselModal
				images={portfolioImages}
				initialIndex={selectedIndex}
				onClose={() => setIsModalOpen(false)}
			/>
		)}
		</>
	)
}
