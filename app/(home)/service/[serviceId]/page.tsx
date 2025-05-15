import Image from 'next/image'
import { BreadCrumbs } from '@/components'
import { serviceOutlines, services } from '@/data/service'
import { actionApiRequest } from '@/actions/api'
import { ServiceDocument } from '@/types/service'
// import ImageCarouselModal from '@/components/imageCaroselModal'
// import ContactForm from '../../contact-us/contactForm'
// import { useParams } from 'next/navigation'




interface Props {
	params: {
		serviceId: string
	}
}
const ServiceDetailsPage = async ({ params }: Props) => {
	const { serviceId: serviceSlug } = await params

	const { status, message, data: service } = await actionApiRequest<ServiceDocument>(`/api/services/${serviceSlug}`)

	return (
		<>
			<div className="p-2 md:px-20">
				<BreadCrumbs />
			</div>

			<div data-name="hero-image-container" className='-mx-20' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						src={service?.coverPhoto.secure_url || '/images/service/service-hero-image.webp' }
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
						<p className='tracking-widest text-4xl font-extrabold uppercase '> service </p>
						<p className='my-2 capitalize text-shadow text-white italic '>
							{service?.slogan || 'We turn ideas into works of art'}
						</p>
					</div>

				</div>
			</div>

			<div className="p-2 md:px-20">
				<div data-name='category-container' className="grid grid-cols-1 md:grid-cols-4 -mx-8 md:-mx-20 p-8 gap-8 md:gap-0 bg-slate-100/80 ">
					{serviceOutlines.map( outline => (
						<div key={outline.label} className="text-slate-700 flex flex-col gap-4 justify-center items-center ">
							<div className=" border-4 border-white rounded-sm bg-slate-100 overflow-hidden group " >
								<Image 
									src={outline.image}
									alt={outline.image}
									width={350}
									height={250}
									className='w-full h-full object-cover group-hover:scale-105 duration-500 '
								/>
							</div>
							<div className=" flex flex-col gap-0 justify-center items-center ">
								<p className="text-3xl font-bold">{outline.value}</p>
								<p className="uppercase">{outline.label}</p>
							</div>
						</div>
					))}
				</div>

				<div data-name="row-container" className="-mx-8 md:-mx-20 p-8 ">
					<div data-name="service-details" className="py-8 px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">
						<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
							{service?.title}
						</h1>

						<p className="text-slate-900 text-center text-xl font-extrabold my-4 md:my-6 capitalize">
							{service?.summary}
						</p>

						<p className="text-slate-600 text-justify font-extrabold my-8 md:my-12 ">
							{service?.description}
						</p>

						<div className="flex flex-col gap-24">
							{service?.rows.map( (row, index) => (
								<div key={row.text + index} className="
									grid grid-cols-1 md:grid-cols-12 gap-8
									items-start
								">
									<p className={` ${row.isChangeOrder ? 'order-2 ' : ' '} 
									col-span-1 ${row.image ? 'md:col-span-7 ' : 'md:col-span-12 '} text-justify`} >
										{row.text}
									</p>

									<div data-name="hero-image" className={`
										col-span-1 ${row.image ? 'md:col-span-5 ' : 'hidden '} 
										relative min-h-40 md:min-h-60 bg-red-100 text-red-600 
										`}>
										{row.image && (
											<Image 
												src={row.image.secure_url || '/images/service/service-hero-image.webp' }
												alt='hero image missing'
												fill
												className="object-cover brightness-75 "
											/>
										)}
									</div>
								</div>
							))}

						</div>
					</div>
				</div>

				<div data-name="content-container" className="-mx-8 md:-mx-20 p-8 bg-slate-100/80 ">
					<div data-name="service-details" className="py-8 px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">
						<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
							{service?.title}
						</h1>

						{service?.content && (
							<div 
								data-name="content-container" 
								className="ql-editor"
								dangerouslySetInnerHTML = {{ __html: service.content  }}
							/>
						)}
					</div>
				</div>
			</div>

		</>
	)
}
export default ServiceDetailsPage




