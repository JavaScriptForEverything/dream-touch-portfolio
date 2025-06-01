import type { Document, Model, Types } from 'mongoose'


interface Metadata {
  page: Types.ObjectId

	title: string  									// *
	description: string 						// *
	keywords: string[]
	alternetes: {
		canonicalUrl: string
	}

	openGraph: {
		title: string
		description: string
		images: string[]
		url: string
	},
}

export interface MetadataDocument extends Document, Metadata {}
export interface CreateMetadata extends Metadata {}
export interface UpdateMetadata extends Metadata {}

export interface MetadataModel extends Model<MetadataDocument> {}

