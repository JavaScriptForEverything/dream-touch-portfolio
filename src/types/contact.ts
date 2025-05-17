import type { Document, Model } from 'mongoose'

interface Contact {
	name: string
	phone?: string
	email: string
	subject: string
	message: string
	isVisible: boolean
}

export interface ContactDocument extends Document, Contact {}
export interface CreateContact extends Contact {}
export interface UpdateContact extends Contact {}

export interface ContactModel extends Model<ContactDocument> {}
