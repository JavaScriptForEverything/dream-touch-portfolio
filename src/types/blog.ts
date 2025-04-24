import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

export interface Blogs {
	name: string
	slug: string
	summary: string
	content: string 				// content

	isVisible: boolean 			// true
	// isFeatured: boolean 		// false

  additionalUrl?: string
	banner?: Image

	tags: string[]

	// header?: string
	// address?: string
	// footer?: string
  // badge: string
	// type?: string
	// logo?: Image
	// thumbnail?: Image
}
export interface BlogDocument extends Document, Blogs {
	category: Types.ObjectId
	author: Types.ObjectId
}

export interface CreateBlog extends Blogs {
	category: Types.ObjectId
	author: Types.ObjectId
}

export interface UpdateBlog extends Blogs {}



export interface BlogModel extends Model<BlogDocument> { }