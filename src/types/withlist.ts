import type { Types, Document, Model } from 'mongoose'

export interface WishList {
	product: Types.ObjectId
	user: Types.ObjectId
}
export interface WishListDocument extends Document, WishList {}

export interface CreateWishList extends WishList {}
export interface UpdateWishList extends WishList {}

export interface WishListModel extends Model<WishListDocument> {}