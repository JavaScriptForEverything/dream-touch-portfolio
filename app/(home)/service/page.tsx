import Link from 'next/link'
import { BreadCrumbs, Empty } from '@/components'
import Image from 'next/image'
import { services } from '@/data/service'
import { formatISODate } from '@/lib/utils'
import { ServiceDocument } from '@/types/service'
import { actionApiRequest } from '@/actions/api'
import { ServiceCard } from '@/components/service'


// const showLoading = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('hello world')
// 		}, 3000);
// 	})
// }


const Service = async () => {
	const { status, message, data: services } = await actionApiRequest<ServiceDocument[]>('/api/services')
	// console.log({ status, message, services })


	return (
		<>
			<div className="p-2 md:px-20">
				<BreadCrumbs />
			</div>

			<div data-name="hero-image-container" className='' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						src='/images/service/service-hero-image.webp'
						alt='hero image missing'
						fill
						className="object-cover brightness-75 "
					/>

					<div data-name="hero-image-content" className='absolute left-1/2 top-1/2 -translate-1/2 bg-slate-500/20 w-full py-4 text-shadow-2xs flex flex-col items-center ' >
						<p className='tracking-widest text-4xl font-extrabold uppercase '> Service </p>
						<p className='my-2 capitalize text-shadow text-white italic '> We turn ideas into works of art </p>
					</div>
				</div>
			</div>

			<div className="p-2 md:px-20">
				<div data-name="hero-content-container" className="bg-white ">
					<div className=' mb-16 text-slate-600 font-light '>
						<h1 className=' text-slate-950 text-shadow-2xs text-2xl md:text-4xl font-extrabold my-4 capitalize mb-8 '>
							Our Services
						</h1>

						{services?.length == 0 ? (
							<Empty />
						) : (
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

								{services?.map((service) => (
									<ServiceCard key={service.id} service={service} />
								))}

							</div>
						)}

					</div>
				</div>
			</div>
    
		</>
	)
}
export default Service
