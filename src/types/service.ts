import type { Document, Model, Types } from 'mongoose'
import type { Image } from '@/types/common'

// used in serviceController
export interface Row {
	text: string
	image?: Image
	isChangeOrder: boolean
	isVisible: boolean
}

interface Service {
	coverPhoto: Image
	title: string
	slug: string
	slogan: string
	content: string

	rows: Row[]
	createdAt: string
	location: string
	summary: string
	description: string
	isVisible: boolean
}

export interface ServiceDocument extends Document, Service {}
export interface CreateService extends Service {}
export interface UpdateService extends Service {}

export interface ServiceModel extends Model<ServiceDocument> {}
