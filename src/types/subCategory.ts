import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'



export interface SubCategory {
	name: string
	slug: string
	description: string
	isVisible: true
	icon?: Image
	thumbnail?: Image
	banner?: Image
}
export interface SubCategoryDocument extends Document, SubCategory {
	category: Types.ObjectId
	user: Types.ObjectId
}

export interface CreateSubCategory extends SubCategory {
	category: Types.ObjectId
	user: Types.ObjectId
}
export interface UpdateSubCategory extends SubCategory {}


export interface SubCategoryModel extends Model<SubCategoryDocument> {}