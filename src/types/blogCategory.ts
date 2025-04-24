import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

/*
	"name": "Technology",
	"slug": "Technology",
	"title": "Latest Tech Trends & Innovations",
	"description": "Stay updated with the latest advancements in technology and gadgets."
	"isVisible": true,
	"image": "https://via.placeholder.com/300x200?text=Technology+Blog",
*/ 

export interface BlogCategory {
	user: Types.ObjectId
	name: string
	slug: string
	title: string
	description?: string
	isVisible: true
	image?: Image
}
export interface BlogCategoryDocument extends Document, BlogCategory {}

export interface CreateBlogCategory extends BlogCategory { }
export interface UpdateBlogCategory extends BlogCategory {}



export interface BlogCategoryModel extends Model<BlogCategoryDocument> { }