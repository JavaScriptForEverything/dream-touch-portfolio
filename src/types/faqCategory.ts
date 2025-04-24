import type { Document, Model } from 'mongoose'

export interface FaqCategory {
	name: string
}
export interface FaqCategoryDocument extends Document, FaqCategory {}

export interface CreateFaq extends FaqCategory {}
export interface UpdateFaq extends FaqCategory {}

export interface FaqCategoryModel extends Model<FaqCategoryDocument> { }