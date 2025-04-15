import Image from 'next/image'
import { ClientRating } from './clientRating'
// import { timeSince } from '@/lib/utils'
import { ClientLikeDislike } from './clientLikeDislike'
import { ReplyTo } from './replyTo'

type Props = React.ComponentProps<'div'> & {
	productId: string
	reviewId: string
	user: {
		id: string
		name: string
		avatar: string
	},
	rating: number
	createdAt: Date
	review: string
}
export const Review = (props: Props) => {
	const { 
		productId, 
		reviewId,
		user,
		rating,
		createdAt,
		review,

		className, 
		...rest 
	} = props


	return (
		<div {...rest} className={`${className} border border-slate-200 p-4 `}>
			<div className="flex gap-2 items-start">
				<Image 
					src={user.avatar}
					alt={user.avatar}
					width={40}
					height={40}
					className='rounded-full'
				/>

				<div className="">

					<div className="flex gap-8">
						<div>
							<p className="capitalize font-semibold text-shadow">{user.name}</p>
							<ClientRating color='success' size='small' value={rating} className='mt-1' />
						</div>

						<div className="">
							{/* <p className="capitalize whitespace-nowrap ">{ timeSince(createdAt) }</p> */}
							<p className="capitalize whitespace-nowrap ">12/32/1200</p>
						</div>
					</div>

					<p className="text-slate-600 line-clamp-2 mt-4">{review}</p>

					<div className="mt-8 flex items-center gap-8">
						<ClientLikeDislike productId={productId} />
						<ReplyTo 
							productId={productId}
							userId={user.id}
							reviewId={reviewId}

						/>
					</div>

				</div>
			</div>

		</div>
	)
}
