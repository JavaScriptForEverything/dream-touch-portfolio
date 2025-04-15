import { AddReview, AddToCart, ClientRating, Review } from '@/components'
import { Carousel } from '@/components/carousel'
import Test from '@/components/test'


type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{
    category?: string;
    color?: string;
    price?: string;
  }>
}
const ProductDetails = async ({ params, searchParams }: Props) => {

	const { slug } = await params
	const query = await searchParams

	// console.log({ slug })
	console.log({ query })

	const price = 500

	const reviews = [1,2,3,4,5] 				// reviewDocument
	const avarageReviewValue = 3 				// avarage value of reviews.length


	return (
		<main className='container mx-auto p-3 text-slate-600 flex flex-col gap-4'>
			{/* -----[ Top Carousel Section & AddToCart ]----- */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

				<Carousel 
					thumbnailLimit={4}
					images={[
						'/images/carousel/image-1.jpg',
						'/images/carousel/image-2.jpg',
						'/images/carousel/image-3.jpg',
						'/images/carousel/image-4.jpg',
						'/images/carousel/image-5.jpg',
						'/images/carousel/image-1.jpg',
						'/images/carousel/image-2.jpg',
						'/images/carousel/image-3.jpg',
						'/images/carousel/image-4.jpg',
						'/images/carousel/image-5.jpg',
					]}
				/>


				<div className="border border-slate-200 p-4 flex flex-col">
					<h2 className='font-semibold text-shadow text-2xl w-full truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laboriosam </h2>
					<p className="text-slate-500/90 mb-2 line-clamp-1">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima suscipit quaerat, 
					</p>

					<div className="flex items-center gap-5">
						<ClientRating 
							value={avarageReviewValue}
							size='small'
							color='primary'
						/>
						<span className="font-semibold">(${avarageReviewValue}) Reviews</span>
					</div>

					<p className="text-3xl font-semibold mt-4"> ${price.toFixed(2)} </p>

					<AddToCart 
						className='my-6'
					/>


					<div className="mt-auto ">
						<p className="text-xl font-semibold">Summary</p>
						<p className="text-slate-600/90 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ipsum non earum sint exercitationem maiores impedit incidunt quae id blanditiis delectus libero ut, nobis soluta corrupti harum veniam expedita!</p>
					</div>

				</div>

			</div>

			{/* -----[ Middle Description & Reviews ]----- */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

				<div id='left-side' className="border border-slate-200 p-4 ">
					<p className="text-xl font-semibold mb-2">Description</p>
					<p className="text-slate-600/90 line-clamp-[8]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ipsum non earum sint exercitationem maiores impedit incidunt quae id blanditiis delectus libero ut, nobis soluta corrupti harum veniam expedita!	
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ipsum non earum sint exercitationem maiores impedit incidunt quae id blanditiis delectus libero ut, nobis soluta corrupti harum veniam expedita!	
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ipsum non earum sint exercitationem maiores impedit incidunt quae id blanditiis delectus libero ut, nobis soluta corrupti harum veniam expedita!	
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates ipsum non earum sint exercitationem maiores impedit incidunt quae id blanditiis delectus libero ut, nobis soluta corrupti harum veniam expedita!	
					</p>
				</div>

				<div id='right-side' className="border border-slate-200 p-4 ">
					<p className="text-xl font-semibold mb-2">Ratings & Reviews</p>

					<div className="text-slate-600/90 flex justify-between gap-6">

						<div className="flex flex-col items-center justify-center p-2">
							<p className="text-5xl">{avarageReviewValue}.00</p>
							<ClientRating color='success' size='small' value={avarageReviewValue} />
						</div>

						<div className="flex-1 border border-slate-200 p-2">
								{[1,2,3,4,5].reverse().map( (value) => (
									<div key={value} className="flex items-center gap-2 ">
										<p>{value}</p>
										<div 
											className={` h-0 border-b-4 ${avarageReviewValue >= value ? 'border-green-600' : 'border-slate-300'} `} 
											style={{ width: `${value * 20}%` }}
										></div>
									</div>
								))}
						</div>

					</div>
				</div>

			</div>

			{/* -----[ Bottom Review/Comments & empth ]----- */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

				<div id='left-side'>
					<AddReview 
							avatar={'/images/users/default.jpg'}
					/>



					{reviews.map((review, index) => ( 						// product.reviews => reviews
						<Review key={review}
							productId={slug}  												// productid
							reviewId={index.toString()} 							// review.id
							user={{
								id: '1', 																// review.user.id
								name: 'riajul islam', 									// review.user.name
								avatar: '/images/users/default.jpg', 		// review.user.avatar 
							}}
							rating={4}
							createdAt={new Date()}
							review={`
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas nobis, quo doloremque optio ad animi ab? Exercitationem blanditiis et, sequi iusto voluptatum incidunt provident aliquam sapiente quia. Rerum, perferendis!
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas nobis, quo doloremque optio ad animi ab? Exercitationem blanditiis et, sequi iusto voluptatum incidunt provident aliquam sapiente quia. Rerum, perferendis!
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas nobis, quo doloremque optio ad animi ab? Exercitationem blanditiis et, sequi iusto voluptatum incidunt provident aliquam sapiente quia. Rerum, perferendis!
								`}
						/>
					))}
				</div>

				<div id='right-side' className="border border-slate-200 p-4 ">
					{/* blank */}
				</div>

			</div>

			<Test />
		</main>
	)
}
export default ProductDetails
// export default withLayout(ProductDetails)
