import { Button } from '@/components/mui'
import Image from 'next/image'
import Link from 'next/link'

export const AboutBlockOne = () => {

	return (
		<div className=''>

			{/* <div data-name='image-container' className="relative w-full h-60 md:h-96 ">
				<Image 
					src={'/images/about-us/about-one.png'}
					alt='modern interior design studio'
					fill
					className=' object-cover '
				/>
			</div> */}

			<div data-name='our-service-container' className="mt-12">
				<div className=" grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 ">

					<div className="col-span-12 md:col-span-5 
							border border-red-200
					">
						<div data-name='image-container' className="
							flex items-center justify-center relative h-32 md:h-96 
							">
							<Image 
								src='/images/about-us/about-one.png'
								alt='modern interior design studio'
								fill
								className=' object-cover '
							/>
						</div>
					</div>

					<div className="col-span-12 md:col-span-7">
						<h1 className="text-slate-950 font-extrabold">About Us</h1>
						<h1 className="text-slate-800 text-4xl font-extrabold my-6 md:my-8 capitalize">
							Make Your Place The Best Makeover possible
						</h1>
						<p className="text-slate-500 text-justify">
							At the heart of our philosophy lies the belief that every space has the potential to inspire and elevate the lives of those who inhabit it. With a perfect blend of creativity, innovation, and expertise, we transform ordinary spaces into extraordinary environments that reflect your unique vision. Whether it’s a personal sanctuary or a professional setting, our team of skilled designers works closely with you to craft spaces that are not only aesthetically stunning but also functional and meaningful. Your dreams drive our designs, and together, we create spaces that leave a lasting impression and enhance the way you live, work, and experience the world.
						</p>

						<Link href='/about-us' className='my-8 block'>
							<Button color='error' className='cursor-pointer'>Read More</Button>
						</Link>
					</div>

				</div>
			</div>
		
		</div>
	)
}

