import type { Types, Document, Model } from 'mongoose'

export interface ProductReviewLike {
	review: Types.ObjectId
	user: Types.ObjectId
	product: Types.ObjectId
}
export interface ProductReviewLikeDocument extends Document, ProductReviewLike {}

export interface CreateProductReviewLike extends ProductReviewLike {}
export interface UpdateProductReviewLike extends ProductReviewLike {}

export interface ProductReviewLikeModel extends Model<ProductReviewLikeDocument> {}