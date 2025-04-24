import type { Types, Document, Model } from 'mongoose'

export interface Subscribe {
	user: Types.ObjectId
	email: string
}
export interface SubscribeDocument extends Document, Subscribe {}

export interface CreateSubscribe extends Subscribe {}
export interface UpdateSubscribe extends Subscribe {}

export interface SubscribeModel extends Model<SubscribeDocument> {}