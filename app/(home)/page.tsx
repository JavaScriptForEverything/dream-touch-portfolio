import type { Metadata } from "next"
import Image from 'next/image'
import { clients, missionItems } from '@/data/home'
import { portfolios } from '@/data/portfolio'
import { ArrowRightIcon, DoubleQuoteRight, ForwardIcon, MessageIcon, PlayIcon, StarIcon, YoutubeIcon } from '@/icons'
import CardReview from '@/components/review/cardReview'
import Link from 'next/link'
import { AboutBlockOne } from './about-us/aboutBlockOne'
import { AboutBlockTwo } from './about-us/aboutBlockTwo'
import { directorInfo } from '@/data'
import { DiagonallySlicedButton } from '@/components'
import { reviews } from '@/data/review'


export const metadata: Metadata = {
  title: "Dream Touch | Best Interior Design Company in Bangladesh",
	keywords: "interior design, interior design company, best interior design company, interior design in Bangladesh, interior design in Dhaka",
  description: "Dream Touch is the best interior design company in Bangladesh, specializing in residential and commercial interior design. We transform spaces into aesthetically pleasing and functional ones that align with our client's interests and needs.",
}

const Home = async () => {

	return (
		<div className='min-h-screen w-full flex flex-col '>

			<div data-name="hero-image-container" className='' >
				<div data-name="hero-image" className='relative h-72 md:h-96 bg-red-100 text-red-600 '>
					<Image 
						src='/images/home/hero-image.png'
						alt='hero image missing'
						fill
						className="object-cover"
					/>


					<div data-name="hero-image-content"
						className='absolute left-1/2 top-1/2 -translate-1/2
							bg-slate-50/10 w-full py-4
							text-shadow-2xs
							flex flex-col items-center
						'
					>
						<p className='my-2 capitalize text-shadow'>
							passion is the fual that drives us forward
						</p>
						<p className='tracking-widest text-2xl md:text-4xl font-extrabold
							uppercase
							mb-8
						'>
							Inspired by living
						</p>

						<Link href='/about-us' className='bg-red-100 border-red-400 px-3 py-1.5 rounded
							hover:border-red-500	
							hover:text-red-600	
							active:text-red-800	
							active:bg-red-200	
						'>
							more
						</Link>
					</div>


				</div>
			</div>


			<div className="p-2 md:px-20">
				<div data-name="hero-content-container" className="bg-white ">
					<div className=' mb-16 text-slate-600 font-light '>
						<h1 className=' text-slate-950 text-shadow-2xs text-2xl md:text-4xl font-extrabold my-4 capitalize mb-8 '>
							best interior design services in Bangladesh
						</h1>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex flex-col gap-4">
								<p className="text-slate-800 text-justify text-sm md:text-lg md:pr-4 ">
									As a leading interior design company in Bangladesh, we provide the best interior design services. We have professional designers who create beautiful, functional environments that reflect your unique style and vision. Transform your space with the best interior designs today!
								</p>

								<p className="text-slate-800 text-justify text-sm md:text-lg md:pr-4 ">
									As a leading interior design company in Bangladesh, we provide the best interior design services. We have professional designers who create beautiful, functional environments that reflect your unique style and vision. Transform your space with the best interior designs today!
								</p>

								<p className="text-slate-800 text-justify text-sm md:text-lg md:pr-4 ">
									As a leading interior design company in Bangladesh, we provide the best interior design services. We have professional designers who create beautiful, functional environments that reflect your unique style and vision. Transform your space with the best interior designs today!
								</p>


								<div data-name='diagonally-sliced-button-container' className="my-3">
									<DiagonallySlicedButton 
										label='More About Us'
										icon={<ForwardIcon className="w-6 h-6" />}
										href='/about-us'
									/>
								</div>


							</div>

							<div data-name='image-container' className=" relative w-full min-h-40 ">
								<Image 
									src={'/coverPhoto.png'}
									alt='modern interior design studio'
									fill
									className=' object-cover '
								/>

								<div data-name='image-container' className=" p-4 
									absolute left-1/2 top-1/2 -translate-1/2  md:left-0
									border-8 border-slate-50 rounded-full 
									overflow-hidden
								">
									<Image 
										src={'/best-interior-designer-in-bangladesh.webp'}
										alt='modern interior design studio'
										fill
										className=' object-cover '
									/>
									<PlayIcon className='z-10 relative text-red-500
										w-16 h-16 
										hover:scale-110 duration-400
										active:scale-105 active:text-red-700
										cursor-pointer
									' />
								</div>

								{/* <div data-name='image-container' className=" w-20 h-20 
									absolute left-1/2 top-1/2 -translate-1/2 p-4 
									border border-red-500 rounded-full overflow-hidden
								">
									<Image 
										src={'/coverPhoto.png'}
										alt='modern interior design studio'
										fill
										className=' object-cover '
									/>
								</div> */}

							</div>

						</div>

					</div>
				</div>

				<AboutBlockOne />

				<div data-name="portfolio-container" className=" bg-slate-100/20 ">
					<div className=' mb-16  text-slate-600 font-light '>
						<h1 className=' text-slate-950 text-shadow-2xs text-xl md:text-2xl font-extrabold my-4 capitalize mb-8 '>
							We provide the best interior design services in Bangladesh
						</h1>

						<p className="text-slate-800 text-justify text-sm md:text-lg ">
							As a leading interior design company in Bangladesh, we provide the best interior design services. We have professional designers who create beautiful, functional environments that reflect your unique style and vision. Transform your space with the best interior designs today!
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
						{portfolios.map((portfolio) => (
							<div key={portfolio.coverPhoto} className="
							relative 
							bg-white
							rounded-xl
							group
							group/image
							">

					{/* border
							border-red-200 hover:outline 
							hover:border-red-300
							hover:outline-red-400/40  */}
							<div className="m-1 overflow-hidden">

								<Image 
									src={portfolio.coverPhoto}
									alt={portfolio.coverPhoto}
									width={350}
									height={250}
									className='w-full h-60 
									rounded-tl-xl
									rounded-tr-xl
									group-hover/image:scale-105 duration-500 
									'
								/>
							</div>

								<div className="p-4 bg-white ">
									<Link href={portfolio.slug}>
										<h3 className='text-red-700 font-extrabold text-lg truncate overflow-hidden whitespace-nowrap hover:text-red-700 '>{portfolio.title}</h3>
									</Link>
									<p className="border-b border-red-700 my-4 w-0 group-hover:w-full
									duration-500
									"></p>

									<p className='text-slate-600 line-clamp-2 mt-2 mb-20 
									'>{portfolio.description}</p>

									<div className=" absolute -bottom-4 -right-4 w-24 h-24 rounded-full
									bg-slate-100
									">

										<div className="flex items-center justify-center w-full h-full
										">
											<Link href={portfolio.slug} className='
												p-3 rounded-full
												-rotate-45

												text-red-600
												bg-white

												group-hover:bg-red-600
												group-hover:text-slate-50	
												group-active:bg-red-700
												group-active:text-slate-50	
												transition-colors duration-300
											'>
												<ArrowRightIcon className='w-6 h-6 inline-block ' />
											</Link>
										</div>
									</div>

							</div>

							</div>
						))}
					</div>
				</div>

				<div className="my-8 flex justify-center items-center">
					<DiagonallySlicedButton 
						label='Book Appointment'
						icon={<MessageIcon className='w-4 h-4 ' />}
						href='/contact-us'
					/>
				</div>

				<AboutBlockTwo />

				<div data-name="clients-container" className=' p-4 border border-slate-100 rounded text-red-600 font-extrabold mt-8'>
					<h2 className='uppercase text-2xl mb-4'>Our Happy Clients</h2>
					<div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">

						{clients.map((client) => (
							<Link href='' title={client.title} key={client.id} className="p-4 w-auto h-auto border border-red-500/70 rounded hover:outline hover:outline-red-500/40 ">
								<Image 
									src={client.image.secure_url}
									alt={client.image.secure_url}
									width={250}
									height={250}
									className=' hover:scale-110 duration-200 '
								/>
							</Link>
						))}
					</div>
				</div>


				<div data-name="review-container" className='mt-8 text-red-600 font-extrabold '>
					<h2 className='capitalize text-2xl mb-6'>What our clients say about us</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
						{reviews.map((review) => (
							<CardReview key={review.review}
							// <CardReview key={review.createdAt}
								numberOfStars={5}
								reviewText={review.review}
								reviewerName={review.user.name}
								reviewerImage={review.user.avatar.secure_url || '/images/user/default.jpg'}
							/>
						))}
					</div>

					<div className="my-8 flex justify-center items-center">
						<DiagonallySlicedButton 
							label='All Reviews'
							icon={<StarIcon className='w-5 h-5' />}
							href='/review'
						/>
					</div>

				</div> 


				<div data-name="recent-project-container" className='my-12 text-slate-600 font-light '>
					<h1 className=' 
						text-slate-800
						text-shadow-2xs
					text-2xl md:text-3xl font-extrabold my-4 capitalize mb-8 
					text-center
					'>
						Recently completed interior projects
					</h1>

					<p className="text-slate-600 text-justify">
						As one of the best interior design companies in Bangladesh, our team has successfully delivered exceptional design solutions that exceed our client's expectations. Our completed projects speak for themselves and demonstrate our dedication to delivering innovative and functional designs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">

					{portfolios.map((portfolio) => (
						<div key={portfolio.title} className="
							border border-red-400
							rounded-lg
							p-2
							relative
							h-56
							overflow-hidden
							group
						">
							<span data-name='hover-top-right-effect' className="
							w-0 h-0 rounded-full bg-red-500
							absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4
							group-hover:w-24 group-hover:h-24 duration-500
							transition-all
							" />


							<Image 
								src={portfolio.coverPhoto}
								alt={portfolio.coverPhoto}
								width={350}
								height={350}
								className='w-full rounded-lg aspect-video relative
									hover:scale-[1.01] duration-100
								'
							/>

						<Link href={portfolio.slug} >
							<YoutubeIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' fontSize={60} />
						</Link>

							<span className="
								absolute bottom-0 right-0
								px-12 py-2 
								bg-slate-600
								text-slate-50
								capitalize
								hover:bg-slate-700
							">
								{portfolio.title}
							</span>
						</div>
					))} 

				</div>


				<div data-name="recent-project-container" className='mt-12 text-slate-600 font-light '>
					<h1 className=' 
						text-slate-800
						text-shadow-2xs
					text-2xl md:text-3xl font-extrabold my-4 capitalize mb-8 
					text-center
					'>
						We Are Modern Interior Design Studio in Bangladesh
					</h1>

					{/* <p className="text-slate-600 text-center text-xl ">
						As one of the best interior design companies in Bangladesh, our team has successfully delivered exceptional design solutions that exceed our client's expectations. Our completed projects speak for themselves and demonstrate our dedication to delivering innovative and functional designs.
					</p> */}

					{/* <div className="flex flex-col md:flex-row gap-4 md:gap-8"> */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
						<div data-name='image-container' className="relative min-h-80
							flex flex-col justify-end
						">
							<Image 
								src={directorInfo.photo}
								alt='modern interior design studio'
								fill
								className=' object-cover
								'
							/>
							<div className="bg-red-500 px-8 py-3 text-white font-extrabold text-shadow-2xs
								flex justify-between items-center
								z-10 relative 
								">
								<div className="">
									<h2>{directorInfo.name}</h2>
									<p>{directorInfo.designation}</p>
								</div>

								<DoubleQuoteRight />
							</div>

						</div>

						<div data-name='mission-and-vision-container' className="flex flex-col gap-4 md:gap-8 border border-red-200/80">
							<div data-name='mission-container' className="p-4">
								<h1 className=' text-slate-800 text-shadow-2xs text-xl md:text-2xl font-extrabold capitalize text-center ' > Mission </h1>
								<ul className='list-disc list-inside px-3 py-1.5 text-sm'>
									{missionItems.map((item, index) => (
										<li key={index} className='text-slate-800 font-bold leading-6'>{item}</li>
									))}
								</ul>
							</div>

							<div data-name='vision-container' className="
							flex flex-col gap-4 p-4">
								<h1 className=' 
									text-slate-800
									text-shadow-2xs
									text-xl md:text-2xl font-extrabold capitalize 
									text-center
									'
									> Vision </h1>
									<p className="text-slate-700/90 font-bold text-sm">
										Our interior design company aims to turn your dreams into reality. We meet our customers’ needs with transparency and affordability.
									</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
