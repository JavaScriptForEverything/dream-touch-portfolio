import type { Types, Document, Model } from 'mongoose'



export interface ShippingInfo {
	user: Types.ObjectId

	fname: string
	lname: string
	phone: string
	email: string
	street: string
	postCode: string
	region: string
	city: string
	country: string
}
export interface ShippingInfoDocument extends Document, ShippingInfo {}

export interface CreateShippingInfo extends ShippingInfo {}
export interface UpdateShippingInfo extends ShippingInfo {}

export interface ShippingInfoModel extends Model<ShippingInfoDocument> {}