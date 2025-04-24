import type { Document, Model } from 'mongoose'
import { Image } from '@/types/common'


export interface Coupon {
	// type: string
	name: string
	description: string
	code: string
	coupon: string
	discount: string
	// quantity: number 		// 0
	isUsed: boolean 		// false
	isVisible: boolean
	startDate: Date
	endDate: Date

	rightBanner: Image
	banners: Image[]


	verifyCoupon: (coupon: string) => Promise<boolean>
}
export interface CouponDocument extends Document, Coupon {}

export interface CreateCoupon extends Coupon {}
export interface UpdateCoupon extends Coupon {}


export interface CouponModel extends Model<CouponDocument> { }



