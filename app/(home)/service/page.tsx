import { BreadCrumbs } from '@/components'
import Image from 'next/image'

const Service = () => {

	// return (
	// 	<>
	// 		<BreadCrumbs />
	// 	Service page
	// 	</>
	// )

	return (
		<div className=''>

			<div className="">

			</div>

			<div data-name='image-container' className="
				-mx-8 md:-mx-20
				relative w-screen h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] 
			 ">
				<Image 
					src={'/images/home/hero-image.png'}
					alt='modern interior design studio'
					fill
					className=' object-cover '
				/>

				<div className="">

					<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
						<h1 className="text-white text-4xl md:text-6xl font-bold">Service</h1>
					</div>

					<div className="absolute top-1/8 bottom-1/8 right-0 bg-black flex items-center justify-center">	
						<BreadCrumbs />
					</div>

				</div>

			</div>

			<p className="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, illo adipisci commodi culpa odit quas ex unde quaerat et corporis consequatur? Sint beatae modi commodi dolore nihil, ducimus doloremque.
			</p>
		</div>
	)
}
export default Service
