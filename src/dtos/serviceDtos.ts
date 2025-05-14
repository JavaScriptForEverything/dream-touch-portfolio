import type { CreateService, UpdateService, ServiceDocument } from '@/types/service'
import { filterObjectByArray } from '@/lib/utils'

const commonAllowedFields = [
	'coverPhoto',
	'title',
	'slug',
	'slogan',
	'content',

	'rows',
	'location',
	'summary',
	'description',
	'isVisible',
]


// POST 	/api/services
export const filterBodyForCreateService = (body: CreateService) => {
	const allowedFields = [
		...commonAllowedFields,
	]

	return filterObjectByArray(body, allowedFields)
}

// doc => doc._doc
export const filterWishListDocument = (body: ServiceDocument) => {
	const allowedFields = [
		...commonAllowedFields,

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(body, allowedFields)
}


// PATCH 	/api/wishlists/:wishListId
export const filterBodyForUpdateWishList = (body: UpdateService) => {

	const allowedFields = [
		...commonAllowedFields,
	]
	return filterObjectByArray(body, allowedFields)
}


