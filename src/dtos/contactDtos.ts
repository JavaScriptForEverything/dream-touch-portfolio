import type { CreateContact, UpdateContact, ContactDocument } from '@/types/contact'
import { filterObjectByArray } from '@/lib/utils'

const commonAllowedFields = [
	'name',
	'phone',
	'email',
	'subject',
	'message',
	'isVisible',
]


// POST 	/api/contacts
export const filterBodyForCreateContact = (body: CreateContact) => {
	const allowedFields = [
		...commonAllowedFields,
	]

	return filterObjectByArray(body, allowedFields)
}

// doc => doc._doc
export const filterContactDocument = (body: ContactDocument) => {
	const allowedFields = [
		...commonAllowedFields,

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(body, allowedFields)
}


// PATCH 	/api/contacts/:contactId
export const filterBodyForUpdateContact = (body: UpdateContact) => {

	const allowedFields = [
		...commonAllowedFields,
	]
	return filterObjectByArray(body, allowedFields)
}


