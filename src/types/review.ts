import type { Types, Document, Model } from 'mongoose'
import type { Image } from '@/types/common'

type CommonReview = {
	product: Types.ObjectId,
	like: number, 

	review: string, 							// used for review
	images: Image[]
	rating: number, 			
}

export interface ReviewDocument extends Document, CommonReview {
	user: Types.ObjectId, 				
	// likes: Types.ObjectId[],
}

export interface CreateReview extends CommonReview {
	user: Types.ObjectId, 				
}
export interface UpdateReview extends CommonReview {}


// export interface ReviewModel = Model<ReviewDocument> & {
// 	populate(arg0: string): unknown
// }