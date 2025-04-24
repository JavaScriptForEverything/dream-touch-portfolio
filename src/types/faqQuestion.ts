import type { Document, Model, Types } from 'mongoose'

export interface FaqQuestion {
	user: Types.ObjectId
	name: string
	email: string
	message: string
}
export interface FaqQuestionDocument extends Document, FaqQuestion {}

export interface CreateFaqQuestion extends FaqQuestion {}
export interface UpdateFaqQuestion extends FaqQuestion {}

export interface FaqQuestionModel extends Model<FaqQuestionDocument> { }