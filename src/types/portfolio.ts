import type { Document, Model } from 'mongoose'
import type { Image } from '@/types/common'


interface Portfolio {
	title: string
	slug: string
	location: string
	summary: string
	description: string
	content: string
	isVisible: boolean

	coverPhoto: Image
	images: Image[]
}

export interface PortfolioDocument extends Document, Portfolio {}
export interface CreatePortfolio extends Portfolio {}
export interface UpdatePortfolio extends Portfolio {}

export interface PortfolioModel extends Model<PortfolioDocument> {}
