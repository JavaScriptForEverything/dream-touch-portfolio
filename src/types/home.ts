import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

export interface Home {
	isActive: boolean

	mainBannerRedirectUrl: string
	flashSaleBannerRedirectUrl: string,

	mainBanner: Image
	flashSaleBanner: Image

	middleBanners1: Image[]
	middleBanners2: Image[]
	middleBanners3: Image[]
	giftCardBanners: Image[]
}

export interface HomeDocument extends Document, Home {}
export interface CreateHome extends Home {}
export interface UpdateHome extends Home {}

export interface HomeModel extends Model<HomeDocument> {}

