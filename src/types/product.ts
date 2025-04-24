import type { Document, Types } from 'mongoose'
import type { Image } from '@/types/common'

type CommonProduct = {
	category: Types.ObjectId 
	subCategory: Types.ObjectId 
	childCategory: Types.ObjectId 
	brand: Types.ObjectId 

  skuCode: string
  manufacturerCode: string
	name: string
	slug: string
	summary: string
	description: string

	price: number
  discount: number
  quantity: number
  vat: number
  tax: number

	coverPhoto?: Image
	thumbnail?: Image
	images?: Image[]

  stock: number

	size: string

	color: string
	// colors: string[]
	// colorsPrice: {
	// 	color: string
	// 	price: number
	// }
	colors: {
		color: string
		price: number
	}[]

	specification: string
	metadata: {
		title: string
		description: string
		keywords: string[]
	},

	flashSale: {
		discount: string
		label: string
	}
}


export interface Product {
	_id?: Types.ObjectId 						// required for seeder
	user: Types.ObjectId

}
export interface ProductDocument extends Document, CommonProduct, Omit<Product, '_id'> {
  _id: Types.ObjectId; // Override _id to ensure compatibility
}
export interface CreateProduct extends CommonProduct {}
export interface UpdateProduct extends CommonProduct {}

