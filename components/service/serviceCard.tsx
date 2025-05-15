import Link from 'next/link'
import Image from 'next/image'
import { ServiceDocument } from '@/types/service'
import { formatISODate } from '@/lib/utils'

interface Props {
	service: ServiceDocument
}
export const ServiceCard = ({ service }: Props ) => {

	return (
		<div key={service.title} className=" border border-red-50 hover:border-red-200 rounded-sm bg-slate-100 overflow-hidden group ">
			<Link href={`/service/${service.slug}`}>
				<Image 
					src={service.coverPhoto.secure_url}
					alt={service.coverPhoto.secure_url}
					width={350}
					height={250}
					className='w-full h-60 group-hover:scale-100 duration-500 '
				/>
			</Link>

			<div className="p-2 bg-slate-100">
				<Link href={`/service/${service.slug}`}>
					<h3 className=' text-red-600 font-extrabold text-lg truncate overflow-hidden whitespace-nowrap hover:text-red-700 '>
						{service.title}
					</h3>
				</Link>

				<p className='text-xs text-slate-800 hover:text-slate-950 line-clamp-1 my-0.5 flex gap-1 '>
					<span className=''> {formatISODate(service.createdAt)} </span>
					<span> | </span>
					<span className='capitalize line-clamp-1'> {service.location} </span>
				</p>

				<p className="border-b border-red-300 my-2 w-0 group-hover:w-full duration-500 "></p>

				<p className='text-slate-600 line-clamp-6 mt-6 '>{service.description}</p>
				<div className="flex justify-start mt-6">


					<Link href={`/service/${service.slug}`} className='
						px-3 py-1.5 rounded-md

						text-white
						bg-red-600

						hover:bg-red-600/90
						hover:text-slate-50	
						active:bg-red-700
						active:text-slate-50	
						transition-colors duration-300

					'>
						Details
					</Link>
				</div>
		</div>

		</div>
	)
}
