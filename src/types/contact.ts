import type { ResponseStatus } from '@/types/common'



export interface ContactDocument {

	id: string
	createdAt: string
}

export interface InitialState {
	loading: boolean
	error: string
	message: string
	status: ResponseStatus

	contact: null | ContactDocument
	contacts: ContactDocument[]

	total: number
	count: number
  limit: number
  totalPages: number
}


export type SetContactPayload = { 
	contacts: ContactDocument[], 
	total: number, 
	count: number
}







