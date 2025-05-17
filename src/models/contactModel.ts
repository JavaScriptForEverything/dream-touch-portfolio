import type { ContactDocument, ContactModel } from '@/types/contact'
import { Collection } from '@/types/constants'
import { model, Schema } from 'mongoose'
import { sanitizeSchema } from '@/services/sanitizeService'
import { customTransform } from '@/lib/utils'
import isEmail from 'validator/lib/isEmail'


/*
{
	"name": "Riajul Islam",
	"phone": "01957500605",
	"email": "riajul@gmail.com",

	"subject": "A beautifully designed apartment with modern decor elements.",
	"message": "<p>Dream Touch Interiors is a leading interior design company in Bangladesh...</p>"
}
*/




const contactSchema = new Schema<ContactDocument>({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 200,
	},

	phone: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		validate: isEmail
	},
	subject: {
		type: String,
		trim: true,
		lowercase: true,
		minlength: 3,
		// maxlength: 250,
	},
	message: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	isVisible: {
		type: Boolean,
		default: true
	},

}, {
	timestamps: true,
	toJSON: {
		// virtuals: true, 										

		transform(_doc, ret, _options) {
			customTransform(ret, [] )
		},
	}
})

contactSchema.plugin(sanitizeSchema)

export const Contact = model<ContactDocument, ContactModel>(Collection.Contact, contactSchema)
export default Contact