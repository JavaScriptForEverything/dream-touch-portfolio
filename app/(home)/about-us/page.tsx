import Link from 'next/link'
import Image from 'next/image'
import { BreadCrumbs } from '@/components'
import { achivements, whyChooseUs } from '@/data/aboutus'

const AboutUs = () => {

	return (
		<>
			<div className="p-2 md:px-20">
				<BreadCrumbs />
			</div>

			<div data-name='image-container' className="relative w-full h-24 md:h-40 ">
				<Image 
					src={'/images/about-us/about-us.png'}
					alt='modern interior design studio'
					fill
					className=' object-cover '
				/>
			</div>

			<div className="p-2 md:px-20">
				<div data-name='our-service-container' className="mt-12">
					<div className=" grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 ">

						<div className="col-span-12 md:col-span-5 ">
							<div data-name='image-container' className="
								flex items-center justify-center relative h-32 md:h-96 ">
								<Image 
									src='/images/about-us/hospital-interior-desgn-services.webp'
									alt='modern interior design studio'
									fill
									className=' object-cover '
								/>
							</div>
						</div>

						<div className="col-span-12 md:col-span-7">
							<h1 className="text-slate-950 font-extrabold">Our Service</h1>
							<h1 className="text-slate-800 text-2xl md:text-4xl font-extrabold my-6 md:my-8">
								Transforming Spaces, Elevating Lives: Your Vision, Our Expertise
							</h1>
							<p className="text-slate-500 text-justify">
								At the heart of our philosophy lies the belief that every space has the potential to inspire and elevate the lives of those who inhabit it. With a perfect blend of creativity, innovation, and expertise, we transform ordinary spaces into extraordinary environments that reflect your unique vision. Whether it’s a personal sanctuary or a professional setting, our team of skilled designers works closely with you to craft spaces that are not only aesthetically stunning but also functional and meaningful. Your dreams drive our designs, and together, we create spaces that leave a lasting impression and enhance the way you live, work, and experience the world.
							</p>
						</div>

					</div>
				</div>

				<div data-name='about-our-company-container' className="mt-12">

						<div className="col-span-12 md:col-span-7">
							<h1 className="text-slate-800 text-2xl md:text-4xl font-extrabold my-6 md:my-8">
								About Our Interior Design Company
							</h1>
							<p className="text-slate-500 text-justify">
								Welcome to <strong className='text-slate-950'>Dream Touch Architects Ltd.</strong>, where innovation meets functionality, and design transforms spaces. Since our inception in 2006, we’ve been at the forefront of the interior design and architecture industry in Bangladesh. Over the years, we’ve earned a reputation for delivering high-quality, bespoke interior and architectural solutions for residential, commercial, and institutional spaces.
							</p>

							<p className="text-slate-500 text-justify mt-4">
								Our commitment to quality, attention to detail, and customer satisfaction sets us apart. From concept development to project completion, we work closely with you to ensure your space is not only aesthetically stunning but also perfectly tailored to your needs. Choose us for a seamless, professional, and inspiring design experience.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-6 md:gap-12 my-8 md:my-12">
							<div>
								<h1 className="text-slate-950 font-extrabold text-center">Our Vision</h1>
								<p className="text-slate-500 text-justify mt-4">
									To be the leading interior design firm in Bangladesh, recognized for our innovative designs, exceptional service, and commitment to sustainability. We aim to create spaces that inspire and elevate the human experience, making a positive impact on the lives of our clients and the communities we serve.
									{/* At Dream Touch, we believe in creating spaces that are not just aesthetically pleasing, but also enhance the quality of life for those who inhabit them. Our vision is to provide exceptional design services that reflect the unique needs of our clients while staying ahead of trends and embracing sustainability. We aim to revolutionize the design landscape in Bangladesh and beyond, offering solutions that are both timeless and innovative. */}
								</p>
							</div>

							<div>
								<h1 className="text-slate-950 font-extrabold text-center">Our Mission</h1>
								<p className="text-slate-500 text-justify mt-4">
									Our mission is to transform spaces into inspiring environments that reflect our clients' unique visions and lifestyles. We are dedicated to delivering exceptional design solutions that combine creativity, functionality, and sustainability. Through collaboration, innovation, and a commitment to excellence, we strive to exceed our clients' expectations and create spaces that enhance their quality of life.
									{/* Our mission is to provide innovative and sustainable interior design solutions that enhance the quality of life for our clients. We aim to create spaces that are not only aesthetically pleasing but also functional and environmentally responsible. By combining creativity with technical expertise, we strive to exceed our clients' expectations and deliver exceptional results. */}
								</p>
							</div>
						</div>

						<div className="">
							<h1 className="text-slate-950 font-extrabold text-sm">Why Choose Us?</h1>
							<ul className="list-disc list-inside text-slate-500 mt-4 ml-3">
								{whyChooseUs.map(({ cause, reason }) => (	
									<li key={cause}>
										<strong className='text-slate-700 '> {cause} :</strong> {reason}
									</li>			
								))}
							</ul>
						</div>
				</div>


				<div data-name='our-offer-container' className="mt-16">
					<div className=" grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 ">

						<div className="col-span-12 md:col-span-7">
							<h1 className="text-slate-950 font-extrabold">What we offer</h1>
							<h1 className="text-slate-800 text-2xl md:text-4xl font-extrabold my-6 md:my-8">
									Crafting Inspiring Interiors for Every Space
							</h1>
							<p className="text-slate-500 text-justify">
									Our interior design services are dedicated to transforming spaces into reflections of your personality and purpose. Whether it's a cozy home, a dynamic office, or a luxurious hospitality venue, we bring creativity, precision, and innovation to every project. 
							</p>
							<p className="text-slate-500 text-justify mt-4">
									From conceptualization to execution, we specialize in designing interiors that are not only visually stunning but also functional and meaningful. Our team of skilled designers collaborates closely with you to ensure every detail aligns with your vision. With expertise in modern trends, timeless aesthetics, and sustainable practices, we create spaces that inspire and elevate your everyday experience.
							</p>
						</div>

						<div className="col-span-12 md:col-span-5 ">
							<div data-name='image-container' className="
								flex items-center justify-center relative h-32 md:h-96 ">
								<Image 
									src='/images/about-us/hospital-interior-design-bangladesh.webp'
									alt='interior design services'
									fill
									className=' object-cover '
								/>
							</div>
						</div>

					</div>
				</div>

				<div data-name='about-our-company-container' className="mt-12">

					<div>
						<h1 className="text-slate-950 font-extrabold">Our Achievements</h1>
						<p className="text-slate-500 text-justify mt-4">
							To be the leading interior design firm in Bangladesh, recognized for our innovative designs, exceptional service, and commitment to sustainability. We aim to create spaces that inspire and elevate the human experience, making a positive impact on the lives of our clients and the communities we serve.
							{/* At Dream Touch, we believe in creating spaces that are not just aesthetically pleasing, but also enhance the quality of life for those who inhabit them. Our vision is to provide exceptional design services that reflect the unique needs of our clients while staying ahead of trends and embracing sustainability. We aim to revolutionize the design landscape in Bangladesh and beyond, offering solutions that are both timeless and innovative. */}
						</p>
					</div>

					<div className="my-4 bg-slate-50 flex items-center justify-evenly gap-8 overflow-scroll ">

						{achivements.map(({ key, value }) => (
							<div key={key} className="flex-1 flex flex-col items-center justify-center p-4 border border-red-200/50 ">
								<p className='text-red-600 font-semibold text-xl'>{key}</p>
								<p className='text-slate-500/80 text-sm whitespace-nowrap'>{value}</p>
							</div>
						))}

					</div>


				</div>
			</div>
		</>
	)
}
export default AboutUs
