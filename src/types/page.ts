import type { Document, Model } from 'mongoose'
import { Image } from '@/types/common'


interface Page {
	slug: string 					// '/home' | '/about' 	| '/home/book'

	slogan: string
	sloganSummary: string

	coverPhoto: Image
}

export interface PageDocument extends Document, Page {
	// _id: Types.ObjectId
	// updatedAt: Date 			// required to update this
}

export interface CreatePage extends Page {}
export interface UpdatePage extends Page {}

export interface PageModel extends Model<PageDocument> {}

