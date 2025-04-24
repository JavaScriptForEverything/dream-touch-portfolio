import type { Types, Document, Model } from 'mongoose'



export interface BillingInfo {
	user: Types.ObjectId

	phone: string
	email: string
	street: string
	country: string
	city: string
	region: string
	postCode: string
}
export interface BillingInfoDocument extends Document, BillingInfo {}

export interface CreateBillingInfo extends BillingInfo {}
export interface UpdateBillingInfo extends BillingInfo {}

export interface BillingInfoModel extends Model<BillingInfoDocument> { }