import type { PageDocument, PageModel } from '@/types/page'
import { Collection } from '@/types/constants'
import { model, Schema } from 'mongoose'
import { sanitizeSchema } from '@/services/sanitizeService'
import { customTransform } from '@/lib/utils'


/*
{
	"slug": "/home",
	"slogan": "Inspired by living",
	"sloganSummary": "passion is the fual that drives us forward",
	"coverPhoto": {
    "dataUrl": "https://via.placeholder.com/600x200?text=Banner",
    "alt": "Team working together in modern office",
    "title": "Our collaborative workspace"
  }
}
*/




const pageSchema = new Schema<PageDocument>({
	slug: { 							// create from name property via pre('save') hook 
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},

	slogan: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
	},
	sloganSummary: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	},

	coverPhoto: {
		public_id: String,
		secure_url: String,

		title: String,
		alt: String,
		description: String,
		caption: String,
	},


}, {
	timestamps: true,
	toJSON: {
		// virtuals: true, 										

		transform(_doc, ret, _options) {
			const imageFields = ['coverPhoto']
			customTransform(ret, imageFields )
		},
	}
})

pageSchema.plugin(sanitizeSchema)
export const Page = model<PageDocument, PageModel>(Collection.Page, pageSchema)
export default Page