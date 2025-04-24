import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'


export interface ChildCategory {
	name: string
	slug: string
	description: string
	isVisible: true
	icon?: Image
	thumbnail?: Image
	banner?: Image
}
export interface ChildCategoryDocument extends Document, ChildCategory {
	subCategory: Types.ObjectId
	user: Types.ObjectId
}


export interface CreateChildCategory extends ChildCategory {
	subCategory: Types.ObjectId
	user: Types.ObjectId
}
export interface UpdateChildCategory extends ChildCategory {}


export interface ChildCategoryModel extends Model<ChildCategoryDocument> { }