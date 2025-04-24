import type { Document, Model } from 'mongoose'
import type { Image } from '@/types/common'



export interface Brand {
	name: string
	slug: string
	description?: string
	isVisible: boolean

	// image?: Image
	logo?: Image
	thumbnail?: Image
	banner?: Image
}
export interface BrandDocument extends Document, Brand {}

export interface CreateBrand extends Brand {}
export interface UpdateBrand extends Brand {}

// export interface CreateBrand = {
// 	name: string
// 	description: string
// 	isVisible: boolean

// 	image?: Image
// 	logo?: Image
// 	thumbnail?: Image
// 	banner?: Image
// }


// export interface UpdateBrand = {
// 	name: string
// 	description: string
// 	isVisible: boolean

// 	image?: Image
// 	logo?: Image
// 	thumbnail?: Image
// 	banner?: Image
// }



export interface BrandModel extends Model<BrandDocument> { }