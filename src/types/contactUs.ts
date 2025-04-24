import type { Document, Model, Types } from 'mongoose'

export interface ContactUs {
	// user: Types.ObjectId
	isActive: boolean

	fname: string
	lname: string
	phone: string
	email: string
	subject: string
	message: string
}

export interface ContactUsDocument extends Document, ContactUs { }
export interface CreateContactUs extends ContactUs { }
export interface UpdateContactUs extends ContactUs {}

export interface ContactUsModel extends Model<ContactUsDocument> { }
