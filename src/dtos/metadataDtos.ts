import type { CreateMetadata, UpdateMetadata, MetadataDocument } from '@/types/metadata'
import { filterObjectByArray } from '@/lib/utils'

const commonAllowedFields = [
	'page',
	'title',
	'description',
	'keywords',
	'alternetes',
	'openGraph',
]


// POST 	/api/metadatas
export const filterBodyForCreateMetadata = (body: CreateMetadata) => {
	const allowedFields = [
		...commonAllowedFields,
	]

	return filterObjectByArray(body, allowedFields)
}

// doc => doc._doc
export const filterPageDocument = (body: MetadataDocument) => {
	const allowedFields = [
		...commonAllowedFields,

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(body, allowedFields)
}


// PATCH 	/api/metadatas/:metadataId
export const filterBodyForUpdateMetadata = (body: UpdateMetadata) => {

	const allowedFields = [
		...commonAllowedFields,
	]
	return filterObjectByArray(body, allowedFields)
}


