import type { CreatePortfolio, UpdatePortfolio, PortfolioDocument } from '@/types/portfolio'
import { filterObjectByArray } from '@/lib/utils'

const commonAllowedFields = [
	'title',
	'slug',
	'location',
	'summary',
	'description',
	'content',
	'isVisible',

	'coverPhoto',
	'images',
]


// POST 	/api/portfolios
export const filterBodyForCreatePortfolio = (body: CreatePortfolio) => {
	const allowedFields = [
		...commonAllowedFields,
	]

	return filterObjectByArray(body, allowedFields)
}

// doc => doc._doc
export const filterPortfolioDocument = (body: PortfolioDocument) => {
	const allowedFields = [
		...commonAllowedFields,

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(body, allowedFields)
}


// PATCH 	/api/portfolios/:portfolioId
export const filterBodyForUpdatePortfolio = (body: UpdatePortfolio) => {

	const allowedFields = [
		...commonAllowedFields,
	]
	return filterObjectByArray(body, allowedFields)
}


