import type { Document, Model } from 'mongoose'

export interface Faq {
	category: string
	question: string
	answer: string
	listOrder: number

	isVisible: boolean
}
export interface FaqDocument extends Document, Faq {}

export interface CreateFaq extends Faq {}
export interface UpdateFaq extends Faq {}

export interface FaqModel extends Model<FaqDocument> { }