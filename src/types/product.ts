import { Image, ResponseStatus } from '@/types/common'


type CommonProduct = {
	id: string

	brand: string
	category: string
	subCategory: string
	childCategory: string

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
	colors: {
		color: string
		price: number
	}[]

	specification: string
	metadata: {
		title: string
		description: string
		keywords: string[]
	}
	flashSale: {
		discount: string
		label: string
	}
}


export type Product = {
	_id?: string
	user: string

}
export type ProductDocument = CommonProduct & Product
export type CreateProduct = CommonProduct
export type UpdateProduct = CommonProduct


export type InitialState = {
	loading: boolean
	error: string
	message: string
	status: ResponseStatus
	product: null | ProductDocument
	products: ProductDocument[]

	total: number
	count: number
  limit: number
  totalPages: number
}


export type SetProductsPayload = { 
	products: ProductDocument[], 
	total: number, 
	count: number
}