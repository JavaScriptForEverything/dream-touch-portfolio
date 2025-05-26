import type { ResponseStatus } from '@/types/common'
import type { Image } from '@/types/common'



export interface PortfolioDocument {
	id: string
	title: string
	slug: string
	slogan: string
	content: string

	coverPhoto: Image
	images: Image[]
	location: string
	summary: string
	description: string
	isVisible: boolean

	createdAt: string
}

export interface InitialState {
	loading: boolean
	error: string
	message: string
	status: ResponseStatus

	portfolio: null | PortfolioDocument
	portfolios: PortfolioDocument[]

	total: number
	count: number
  limit: number
  totalPages: number
}


export type SetPortfolioPayload = { 
	services: PortfolioDocument[], 
	total: number, 
	count: number
}







