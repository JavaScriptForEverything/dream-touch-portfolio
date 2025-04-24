import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

export interface AboutUs {
	isActive: boolean
	header: string
	slogan: string

	topBanner: Image

	column1Badge: string
	column1Title: string
	column1Description: string
	column1Image: Image

	column2Badge: string
	column2Title: string
	column2Description: string

	column3Badge: string
	column3Title: string
	column3Description: string
	column3Image: Image
}

export interface AboutUsDocument extends Document, AboutUs { }
export interface CreateAboutUs extends AboutUs { }
export interface UpdateAboutUs extends AboutUs {}

export interface AboutUsModel extends Model<AboutUsDocument> { }
