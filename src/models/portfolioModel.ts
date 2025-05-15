import type { PortfolioDocument, PortfolioModel } from '@/types/portfolio'
import { Collection } from '@/types/constants'
import { model, Schema } from 'mongoose'
import { sanitizeSchema } from '@/services/sanitizeService'
import slugify from 'slugify'
import { customTransform } from '@/lib/utils'


/*
{
	"title": "Apartment Decor',
	"slug": "link-1",
	"location": "badda, dhaka",

	"description": "A beautifully designed apartment with modern decor elements.",
	"content": "<p>Dream Touch Interiors is a leading interior design company in Bangladesh...</p>",

	"coverPhoto": {
    "dataUrl": "https://via.placeholder.com/600x200?text=Banner",
    "alt": "Team working together in modern office",
    "title": "Our collaborative workspace"
  },
	"images": [
		{
			"dataUrl": "https://via.placeholder.com/600x200?text=Banner",
			"alt": "Team working together in modern office",
			"title": "Our collaborative workspace"
		}
	]
}
*/




const portfolioSchema = new Schema<PortfolioDocument>({
	title: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 200,
	},
	slug: { 							// create from name property via pre('save') hook 
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
		default: '',
		set: function (slug: string) { return slugify(slug, { lower: true }) }
	},

	summary: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	},
	description: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
	},
	location: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	},
	content: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	isVisible: {
		type: Boolean,
		default: true
	},

	coverPhoto: {
		public_id: String,
		secure_url: String,

		title: String,
		alt: String,
		description: String,
		caption: String,
	},
	images: [{
		public_id: String,
		secure_url: String,

		title: String,
		alt: String,
		description: String,
		caption: String,
	}],


}, {
	timestamps: true,
	toJSON: {
		// virtuals: true, 										

		transform(_doc, ret, _options) {
			const imageFields = ['coverPhoto', 'images']
			customTransform(ret, imageFields )
		},
	}
})

portfolioSchema.plugin(sanitizeSchema)
// portfolioSchema.pre('save', function(next) {
// 	const slugString = this.slug.trim() ? this.slug : this.name
// 	this.slug = slugify(slugString, { lower: true })
// 	next()
// })
export const Portfolio = model<PortfolioDocument, PortfolioModel>(Collection.Portfolio, portfolioSchema)
export default Portfolio