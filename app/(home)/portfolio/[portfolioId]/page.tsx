'use client'
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
	const imageSlicerLength = 3

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
						src={portfolio?.image || '/images/portfolio/portfolio-hero-image.webp' }
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

			<div data-name="hero-content-container" className="-mx-8 md:-mx-20 p-8 bg-slate-200/80 ">
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
												src={portfolio?.images[0] || ''}
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



			<div data-name='' className="">

			</div>
    
		</>
	)
}
export default PortfolioDetailsPage





// const PortfolioDetailsPage = () => {
// 	const { portfolioId} = useParams()
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);

// 	const portfolio = portfolioes.find( portfolio => portfolio.url === portfolioId)

// 	 // Function to chunk the documents array into groups of 50
//   const chunkArray = (array: any[], chunkSize: number) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//       result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   // Split documents into chunks of 50
//   const portfolioImagesChunks = portfolio?.images ? chunkArray(portfolio.images, 5) : [];
// 	console.log(portfolioImagesChunks)


//   const openModal = (index: number) => {
//     setSelectedIndex(index);
//     setIsModalOpen(true);
//   };

// 	return (
// 		<>
// 			<BreadCrumbs />
// 			<div data-name="hero-image-container" className='-mx-20' >
// 				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
// 					<Image 
// 						src={portfolio?.image || '/images/portfolio/portfolio-hero-image.webp' }
// 						alt='hero image missing'
// 						fill
// 						className="object-cover
// 						brightness-75
// 						"
// 					/>

// 					<div data-name="hero-image-content"
// 						className='absolute left-1/2 top-1/2 -translate-1/2
// 							bg-slate-500/20 w-full py-4
// 							text-shadow-2xs
// 							flex flex-col items-center
// 						'
// 					>
// 						<p className='tracking-widest text-4xl font-extrabold
// 							uppercase
// 						'>
// 							Portfolio
// 						</p>

// 						<p className='my-2 capitalize text-shadow text-white italic
// 						'>
// 							We turn ideas into works of art
// 						</p>
// 					</div>

// 				</div>
// 			</div>

// 			<div data-name="hero-content-container" className="-mx-8 md:-mx-20 p-8 
// 			bg-slate-200/80 ">
// 				<div className=' mb-16 text-slate-600 font-light 
// 				'>
// 					<h1 className=' text-slate-950 text-shadow-2xs text-xl md:text-2xl font-extrabold my-3 capitalize  '>
// 						Image Gallery
// 					</h1>

// 					{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// 						{portfolio?.images.map((image, index) => (
// 							<div 
// 								key={image} 
//             		onClick={() => openModal(index)}
// 								className="
// 									border-4
// 									border-white
// 									rounded-sm
// 									bg-slate-100
// 									overflow-hidden
// 									group
// 								"
// 							>
// 									<Image 
// 										src={image}
// 										alt={image}
// 										width={350}
// 										height={250}
// 										className='w-full h-full object-cover
// 										group-hover:scale-105 duration-500 
// 										cursor-pointer
// 										'
// 									/>
// 							</div>
// 						))}
// 					</div> */}
// 					<div className="">
// 						{portfolioImagesChunks.map((chunks, chunkIndex) => (
// 							<div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4">
// 								{chunks.map((image, index) => (
// 									<div 
// 										key={image} 
// 										onClick={() => openModal(index)}
// 										className="
// 											border-4
// 											border-white
// 											rounded-sm
// 											bg-slate-100
// 											overflow-hidden
// 											group
// 										"
// 									>
// 											<Image 
// 												src={image}
// 												alt={image}
// 												width={350}
// 												height={250}
// 												className='w-full h-full object-cover
// 												group-hover:scale-105 duration-500 
// 												cursor-pointer
// 												'
// 											/>
// 									</div>
// 								))}

// 								<div data-name='call-to-action' className="my-20 bg-white">
// 									<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
// 										<div data-name='image-container' 
// 											className="
// 												col-span-12 md:col-span-7
// 												border-0
// 												border-white
// 												rounded-sm
// 												bg-slate-100
// 												overflow-hidden
// 												group
// 											"
// 										>
// 												<Image 
// 													// src={'/images/portfolio/portfolio-hero-image.webp'}
// 													src={portfolio?.images[0] || ''}
// 													alt={''}
// 													width={350}
// 													height={250}
// 													className='w-full h-full object-cover'
// 												/>
// 										</div>

// 										<div data-name="contact-up-form" className=" col-span-12 
// 										md:col-span-5 ">
// 											<div className=" ">

// 											<h1 className="py-6 bg-blue-50 text-green-700 font-semibold 
// 											text-center 
// 											text-sm md:text-lg
// 											">
// 												For Free Consultancy Please Contact With Us
// 											</h1>
// 											</div>

// 											<div className="bg-white py-4 border border-slate-200/70 mt-4">
// 												<div className="px-4">
// 													<ContactForm />
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</div>
// 						))}
// 					</div>

// 					{/* <div data-name='call-to-action' className="my-20 bg-white">
// 						<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
// 							<div data-name='image-container' 
// 								className="
// 									col-span-12 md:col-span-7
// 									border-0
// 									border-white
// 									rounded-sm
// 									bg-slate-100
// 									overflow-hidden
// 									group
// 								"
// 							>
// 									<Image 
// 										// src={'/images/portfolio/portfolio-hero-image.webp'}
// 										src={portfolio?.images[0] || ''}
// 										alt={''}
// 										width={350}
// 										height={250}
// 										className='w-full h-full object-cover'
// 									/>
// 							</div>

// 							<div data-name="contact-up-form" className=" col-span-12 
// 							md:col-span-5 ">
// 								<div className=" ">

// 								<h1 className="py-6 bg-blue-50 text-green-700 font-semibold 
// 								text-center 
// 								text-sm md:text-lg
// 								">
// 									For Free Consultancy Please Contact With Us
// 								</h1>
// 								</div>

// 								<div className="bg-white py-4 border border-slate-200/70 mt-4">
// 									<div className="px-4">
// 										<ContactForm />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div> */}

// 				</div>
// 			</div>


//       {portfolio?.images.length && isModalOpen && (
//         <ImageCarouselModal
//           images={portfolio.images}
//           initialIndex={selectedIndex}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
    
// 		</>
// 	)
// }
