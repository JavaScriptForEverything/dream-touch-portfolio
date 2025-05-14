import type { ServiceDocument, ServiceModel } from '@/types/service'
import { Collection } from '@/types/constants'
import { model, Schema } from 'mongoose'
import { sanitizeSchema } from '@/services/sanitizeService'
import slugify from 'slugify'
import { customTransform } from '@/lib/utils'


/*
{
  "title": "The Future of AI in Everyday Life 3",
  "slug": "The Future-of-AI-in-Everyday-Life 3",
  "slogan": "The Future-of-AI-in-Everyday-Life 3",
  "summary": "Artificial Intelligence is revolutionizing industries and daily life.",
  "description": "Artificial Intelligence is revolutionizing industries and daily life.",
  "location": "Badda, Dhaka",
  "content": "AI technology is growing rapidly, influencing businesses, healthcare, and consumer applications...",
  "isVisible": true,

	"coverPhoto": {
    "dataUrl": "https://via.placeholder.com/600x200?text=Banner",
    "alt": "Team working together in modern office",
    "title": "Our collaborative workspace"
  },

	"rows": [
		{
  		"isChangeOrder": true,
  		"isVisible": true,
			"text" : "AI technology is growing rapidly, influencing",
			"image": {
				"dataUrl": "https://via.placeholder.com/600x200?text=Banner",
				"alt": "Team working together in modern office",
				"title": "Our collaborative workspace"
			}
		},
		{
  		"isChangeOrder": true,
  		"isVisible": true,
			"text" : "AI technology is growing rapidly, influencing",
			"image": {
				"dataUrl": "https://via.placeholder.com/600x200?text=Banner",
				"alt": "Team working together in modern office",
				"title": "Our collaborative workspace",
				"caption": "Our caption workspace",
				"description": "Our description workspace"
			}
		}
	]
}

*/


const rowSchema = new Schema({
	text: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	image: {
		public_id: String,
		secure_url: String,

		title: String,
		alt: String,
		description: String,
		caption: String,
	},

	isChangeOrder: {
		type: Boolean,
		default: false
	},
	isVisible: {
		type: Boolean,
		default: true
	},
}, {
	toJSON: {
		// virtuals: true, 										

		transform(_doc, ret, _options) {
			const imageFields = ['image']
			customTransform(ret, imageFields )
		},
	}
})


const serviceSchema = new Schema<ServiceDocument>({
	coverPhoto: {
		public_id: String,
		secure_url: String,

		title: String,
		alt: String,
		description: String,
		caption: String,
	},
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
	slogan: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 3,
		maxlength: 200,
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

	rows: [rowSchema],

	isVisible: {
		type: Boolean,
		default: true
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

serviceSchema.plugin(sanitizeSchema)
// serviceSchema.pre('save', function(next) {
// 	const slugString = this.slug.trim() ? this.slug : this.name
// 	this.slug = slugify(slugString, { lower: true })
// 	next()
// })
export const Service = model<ServiceDocument, ServiceModel>(Collection.Service, serviceSchema)
export default Service