import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

/*
      "user": "user.id",
      "name": "Electronics",
      "description": "Find the latest and greatest in electronics, from smartphones to smart home devices.",
      "isVisible": true,
      "icon": "https://via.placeholder.com/50x50?text=Electronics",
      "thumbnail": "https://via.placeholder.com/100x100?text=Electronics",
      "banner": "https://via.placeholder.com/600x200?text=Electronics+Banner",

*/ 

export interface Category {
	user: Types.ObjectId
	name: string
	slug: string
	description: string
	isVisible: true
	icon?: Image
	thumbnail?: Image
	banner?: Image
	isCategoryShownOnFrontend: boolean
}
export interface CategoryDocument extends Document, Category {}

export interface CreateCategory extends Category { }
export interface UpdateCategory extends Category {}


export interface CategoryModel extends Model<CategoryDocument> { }