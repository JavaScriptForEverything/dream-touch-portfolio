import type { ResponseStatus } from '@/types/common'
import type { Image } from '@/types/common'



export interface PageDocument {
	id: string
	createdAt: string

	slug: string 					// 'home' | 'about' 	| 'home/book'
	slogan: string
	sloganSummary: string
	coverPhoto: Image
}

export interface InitialState {
	loading: boolean
	error: string
	message: string
	status: ResponseStatus

	page: null | PageDocument
	pages: PageDocument[]

	total: number
	count: number
  limit: number
  totalPages: number
}


export type SetPagePayload = { 
	pages: PageDocument[], 
	total: number, 
	count: number
}







