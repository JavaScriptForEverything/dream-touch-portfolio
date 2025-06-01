import type { CreatePage, UpdatePage, PageDocument } from '@/types/page'
import { filterObjectByArray } from '@/lib/utils'

const commonAllowedFields = [
	'slug',
	'slogan',
	'sloganSummary',
	'coverPhoto',
]


// POST 	/api/pages
export const filterBodyForCreatePage = (body: CreatePage) => {
	const allowedFields = [
		...commonAllowedFields,
	]

	return filterObjectByArray(body, allowedFields)
}

// doc => doc._doc
export const filterPageDocument = (body: PageDocument) => {
	const allowedFields = [
		...commonAllowedFields,

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(body, allowedFields)
}


// PATCH 	/api/pages/:pageId
export const filterBodyForUpdatePage = (body: UpdatePage) => {

	const allowedFields = [
		...commonAllowedFields,
	]
	return filterObjectByArray(body, allowedFields)
}


