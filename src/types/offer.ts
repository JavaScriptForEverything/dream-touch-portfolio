import type { Types, Document, Model } from 'mongoose'
import type { Image } from '@/types/common'



export interface Offer {
	product: Types.ObjectId

	name: string
	slug: string
	buttonName?: string
	headerSlogan?: string

	isSelecte: boolean

	startDate: Date
	endDate: Date

	image?: Image
	thumbnail?: Image
	banner?: Image
	footerBanner?: Image
}
export interface OfferDocument extends Document, Offer {}

export interface CreateOffer extends Offer {}
export interface UpdateOffer extends Offer {}

export interface OfferModel extends Model<OfferDocument> { }