import { BreadCrumbs } from '@/components'
import Image from 'next/image'
import { reviews } from '@/data/review'
import CardReview from '@/components/review/cardReview'


const Review = () => {

	return (
		<>
			<BreadCrumbs />
			<div data-name="hero-image-container" className='-mx-20' >
				<div data-name="hero-image" className='relative h-40 md:h-60 bg-red-100 text-red-600 '>
					<Image 
						src='/images/portfolio/portfolio-hero-image.webp'
						alt='hero image missing'
						fill
						className="object-cover
						brightness-75
						"
					/>

					<div data-name="hero-image-content"
						className='absolute left-1/2 top-1/2 -translate-1/2
							bg-slate-500/20 w-full py-4
							text-shadow-2xs
							flex flex-col items-center
						'
					>
						<p className='tracking-widest text-4xl font-extrabold
							uppercase
						'>
							Reviews 
						</p>

						<p className='my-2 capitalize text-shadow text-white italic
						'>
							Reviews & Testimonials
						</p>
					</div>

				</div>
			</div>

			<div className="bg-slate-100/20 py-2 mb-40">
				<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
						Reviews
				</h1>

				<div className="px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed my-12">
					<p>
						At <a href='/' className='text-red-500
							hover:text-red-600
						'>Dream Touch </a> Interiors, we value the feedback of our clients. Here, you can explore genuine reviews and testimonials from our satisfied customers. Their experiences reflect our commitment to excellence in interior design and customer satisfaction.
					</p>
				</div>

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
			</div>
		</>
	)
}
export default Review
