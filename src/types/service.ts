import type { ResponseStatus } from '@/types/common'
import type { Image } from '@/types/common'


interface Row {
	text: string
	image?: Image
	isChangeOrder: boolean
	isVisible?: boolean
}

export interface ServiceDocument {
	id: string
	coverPhoto: Image
	title: string
	slug: string
	slogan: string
	content: string

	rows: Row[]
	createdAt: string
	location: string
	summary: string
	description: string
	isVisible: boolean
}

export interface InitialState {
	loading: boolean
	error: string
	message: string
	status: ResponseStatus

	service: null | ServiceDocument
	services: ServiceDocument[]

	total: number
	count: number
  limit: number
  totalPages: number
}


export type SetServicePayload = { 
	services: ServiceDocument[], 
	total: number, 
	count: number
}







