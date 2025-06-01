import type { MetadataDocument, MetadataModel } from '@/types/metadata'
import { Collection } from '@/types/constants'
import { model, Schema } from 'mongoose'
import { sanitizeSchema } from '@/services/sanitizeService'
import { customTransform } from '@/lib/utils'


/*
{
	"page": "abcdef454545454",

  "title": "Top Web Development Services",
  "description": "We offer full-stack web development solutions...",
  "keywords": ["web development", "frontend", "backend"],

	"alternetes" : {
  	"canonicalUrl": "https://example.com/services/web"
	},

	"openGraph" : {
		"title": "Hire Web Developers Today",
		"description": "Our experts deliver full-stack apps on time.",
		"url": "https://example.com/images/og/web.jpg",
		"images": [
			"https://example.com/images/og/web.jpg"
		]
	}
}
*/




const metadataSchema = new Schema<MetadataDocument>({
	page: { 												
		type: Schema.Types.ObjectId,
		required: true,
	},

	title: { 							// create from name property via pre('save') hook 
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},

	description: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
	},
	keywords: [{
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	}],

	alternetes: {
		canonicalUrl: String,
	},

	openGraph: {
		title: String,
		description: String,
		images: [String],
		url: String
	},


}, {
	timestamps: true,
	toJSON: {
		virtuals: true, 										

		transform(_doc, ret, _options) {
			const imageFields = ['']
			customTransform(ret, imageFields )
		},
	}
})

metadataSchema.plugin(sanitizeSchema)
export const Metadata = model<MetadataDocument, MetadataModel>(Collection.Metadata, metadataSchema)
export default Metadata