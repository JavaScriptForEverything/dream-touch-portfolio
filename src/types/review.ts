import type { Document, Model } from 'mongoose'
import type { Image } from '@/types/common'


interface Review {
	avatar: Image
	name: string
	rating: number
	review: string
}

export interface ReviewDocument extends Document, Review {}
export interface CreateReview extends Review {}
export interface UpdateReview extends Review {}

export interface ReviewModel extends Model<ReviewDocument> {}
