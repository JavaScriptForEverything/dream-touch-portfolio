import type { Metadata } from "next"
import Image from 'next/image'
import { clientImages } from '@/data/home'
import { ArrowRight } from 'lucide-react'
import { MessageIcon, StarIcon } from '@/icons'
import GoogleReview from '@/components/home/googleReview'
// import FooterBlock from '@/components/footer/footerBlock'


// const productItems = [
// 	{ title: 't-shart for Man lorem lorem lorem', rating: 4, price: '$5.00', image: '/images/headphone.jpg', path: '/product/1' },
// 	{ title: 't-shart for Kid', rating: 5, price: '$8.00', image: '/images/headphone.jpg', path: '/product/2' },
// 	{ title: 'Skaff for wemon', rating: 5, price: '$5.00', image: '/images/headphone.jpg', path: '/product/3' },
// 	{ title: 't-shart for women', rating: 3, price: '$7.00', image: '/images/headphone.jpg', path: '/product/4' },
// ]


export const metadata: Metadata = {
  title: "Dream Touch | Best Interior Design Company in Bangladesh",
	keywords: "interior design, interior design company, best interior design company, interior design in Bangladesh, interior design in Dhaka",
  description: "Dream Touch is the best interior design company in Bangladesh, specializing in residential and commercial interior design. We transform spaces into aesthetically pleasing and functional ones that align with our client's interests and needs.",
}

const Home = () => {

	return (
		<div className='min-h-screen w-full flex flex-col gap-8'>

			<div data-name="hero-image-container" className='-mx-12' >
				<div data-name="hero-image" className='relative h-72 md:h-96 bg-red-500 text-red-700 '>
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
						<p className='tracking-widest text-4xl font-extrabold
							uppercase
							mb-8
						'>
							Inspired by living
						</p>

						<a href='#' className='bg-red-100 border-red-400 px-3 py-1.5 rounded
							hover:border-red-500	
							hover:text-red-600	
							active:text-red-800	
							active:bg-red-200	
						'>
							more
						</a>
					</div>


				</div>
			</div>

			<div data-name="hero-content-container" className='text-slate-600 font-light '>
				<h1 className=' 
					text-slate-800
					text-shadow-2xs
				 text-4xl md:text-4xl font-extrabold my-4 capitalize mb-8 '>
					We provide the best interior design services in Bangladesh
				</h1>

				<p className="text-slate-600 text-center text-xl ">
					As a leading interior design company in Bangladesh, we provide the best interior design services. We have professional designers who create beautiful, functional environments that reflect your unique style and vision. Transform your space with the best interior designs today!
				</p>
			</div>


			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">

				{clientImages.map((item) => (
					<div key={item.image} className="
					border
					border-red-200 hover:outline 
					hover:border-red-300
					hover:outline-red-400/40 

					rounded-3xl
					bg-slate-100
					p-6
					group
					">
						<Image 
							src={item.image}
							alt={item.image}
							width={350}
							height={250}
							className='w-full rounded-3xl h-60 
							group-hover:scale-110 duration-500 
							'
						/>

						<div className="p-4 bg-slate-100">
							<a href={item.url}>
								<h3 className='text-red-700 font-extrabold text-lg truncate overflow-hidden whitespace-nowrap hover:text-red-700 '>{item.title}</h3>
							</a>
							<p className="border-b border-red-700 my-4 w-0 group-hover:w-full
							duration-500
							"></p>

							<p className='text-slate-600 line-clamp-2 my-2 '>{item.description}</p>
							<div className="flex justify-end">
								<a href={item.url} className='
								
									p-3 rounded-full
									-rotate-45

									text-red-600
									bg-red-100 

									group-hover:bg-red-600
									group-hover:text-slate-50	
									group-active:bg-red-700
									group-active:text-slate-50	

								'>
									<ArrowRight className='w-6 h-6 inline-block ' />
								</a>
							</div>
					</div>

					</div>
				))}
			</div>


			<div className="flex gap-2 justify-center items-center ">
				<div className="
					bg-red-600
					text-slate-50
					hover:bg-slate-600
					flex gap-2 justify-center items-center
					rounded-xl
					py-3 px-6
					transition-all
					duration-500

					relative 
					group
					overflow-hidden
				">
					<a href='#' className='z-10'>Book An Appointment</a>
					<a href='#' className='z-10'>
						<MessageIcon fontSize={32} className='text-white' />
					</a>
					<div className="
						absolute inset-0
					bg-slate-600
						translate-x-full
						group-hover:translate-x-0
						duration-500 
						z-0
					"></div>
				</div>
			</div>


			<div data-name="clients-container" className=' p-8 border border-slate-300 rounded text-red-600 font-extrabold mt-8'>
				<h2 className='uppercase text-2xl mb-4'>Our Happy Clients</h2>
				<div className="grid grid-cols-3 md:grid-cols-6 gap-2">

					{clientImages.map((item) => (
						<a href='' title={item.title} key={item.image} className="p-4 w-auto h-auto border border-red-500/70 rounded hover:outline hover:outline-red-500/40 ">
							<Image 
								src={item.image}
								alt={item.image}
								width={250}
								height={250}
								className=' hover:scale-110 duration-200 '
							/>
						</a>
					))}
				</div>
			</div>


			<div data-name="ratting-container" className='text-red-600 font-extrabold '>
				<h2 className='capitalize text-2xl mb-6'>What our clients say about us</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
					{[1, 2, 3, 4, 5, 6].map((item) => (

						<GoogleReview key={item}
							numberOfStars={5}
							reviewText='I recently came across Barnomala Architect & Interior and Im absolutely thrilled with their services! The attention to detail, creativity, and professionalism they bring to the table is truly commendable. I highly recommend them for any interior design needs!'
							reviewerName='John Doe'
							reviewerImage='/images/user/default.jpg'
						/>
					))}
				</div>


			</div> 

			{/* <div data-name="hero-content-container" className='text-slate-600 font-light '>
				<h1 className=' text-red-600 text-3xl md:text-4xl font-extrabold my-4 capitalize '> Best interior design company in Bangladesh </h1>

				<div className="flex flex-col md:flex-row gap-4 md:gap-8">
					<div className='flex-1/2 flex flex-col gap-3'>
						<p className='text-justify'>
							Barnomala Architects & Interior is the best 
							<strong className='text-slate-950 font-bold'> interior design company in Bangladesh, </strong>
							we emerged as a professional and expert interior service provider 
							<strong className='text-slate-950 font-bold'> in 2018 </strong>
							. Our core services include transforming spaces into aesthetically pleasant and functional ones that align with our client's interests and needs.  More About Us
						</p>

						<p className="text-justify">
							We have specialized in <strong className='text-red-600 font-semibold'> residential </strong> and 
							<strong className='text-red-600 font-semibold'> commercial interior design </strong>
							across Bangladesh, delivering exceptional flat, apartment, home, office, restaurant, and hospitality venue projects. Over the years, we’ve proudly completed numerous prestigious projects nationwide.
						</p>

						<p className="text-justify">
							Call us at <strong className='text-red-600 font-semibold'> +8801713776555 </strong>, and let us help you turn your vision into reality with our customized interior design solutions.
						</p>

						<div className="my-4">
							<a href='#' className='
								px-6 py-3 bg-red-500 rounded text-slate-50
								hover:bg-red-600 hover:text-slate-100 
							'>More About Us</a>
						</div>

					</div>

					<div data-name="hero-image" className='relative flex-1/2 w-full min-h-80 bg-red-500 text-red-700 '>
						<Image 
							src='/images/home/best-interior-design-company-in-dhaka-bangladesh.webp'
							alt='side image missing'
							fill
							className="object-fill"
						/>
					</div>
				</div>


			</div> */}

			{/* <div data-name="portfolio-container" className=' p-8 
					border border-slate-300 rounded
			text-red-600 font-extrabold mt-8'>
				<div className="mb-8">
					<h2 className='capitalize text-2xl'>
						Portfolios
					</h2>
					<p className="text-slate-600 ml-4"> - Your Famous Interior Design Firm In BD </p>
				</div>
				

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">

						{clientImages.map((item) => (
							<div key={item.image} className="w-auto h-auto border 
							border-red-400 rounded hover:outline 
							hover:border-red-500
							hover:outline-red-500/40 
							">
								<Image 
									src={item.image}
									alt={item.image}
									width={250}
									height={350}
									className='w-full rounded '
								/>

								<div className="p-4 ">
									<a href={item.url}>
										<h3 className='text-red-600 font-extrabold text-lg truncate overflow-hidden whitespace-nowrap hover:text-red-700 '>{item.title}</h3>
									</a>
									<p className='text-slate-600 line-clamp-2 mb-4'>{item.description}</p>
									<a href={item.url} className='
									
										bg-red-100 border-red-400 px-3 py-1.5 rounded
										hover:bg-red-200/80	
										hover:border-red-600	
										hover:text-red-600	
										active:text-red-800	
										active:bg-red-200

										border 
									'> see more </a>
							</div>

							</div>
						))}
					</div>

			</div> */}


			{/* <div data-name="video-gallery-container" className='text-red-600 font-extrabold '>
				<h2 className='uppercase text-2xl mb-4'>Video Gallery</h2>
				<VideoGallery />
			</div> */}



		</div>
	)
}
export default Home
