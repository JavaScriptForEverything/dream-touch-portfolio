import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { MetadataDocument } from '@/types/metadata'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import Metadata from '@/models/metadataModel'
import * as metadataDtos from '@/dtos/metadataDtos'


// GET /api/metadatas
export const getMetadatas: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const { query, total } = await apiFeatures(Metadata, req.query, filter)
	const metadatas = await query
	
	const responseData: ResponseData<MetadataDocument[]> = {
		status: 'success',
		count: metadatas.length,
		total,
		data: metadatas,
	}
	res.status(200).json( responseData )
})


// POST 	/api/metadatas
export const addMetadata: RequestHandler =  catchAsync(async (req, res, next) => {

	const filteredBody = metadataDtos.filterBodyForCreateMetadata(req.body)
	const metadata = await Metadata.create(filteredBody)
	if(!metadata) return next(appError('metadata not found'))

	const responseData: ResponseData = {
		status: 'success',
		data: metadata,
	}
		
	res.status(201).json( responseData )
})

// GET /api/metadatas/:metadataId
export const getMetadataById:RequestHandler = catchAsync(async (req, res, next) => {
	const metadataId = req.params.metadataId

	const metadata = await Metadata.findById(metadataId)
	if(!metadata) return next(appError('metadata not found'))
	
	const responseData: ResponseData<MetadataDocument> = {
		status: 'success',
		data: metadata
	}
	res.status(200).json( responseData )
})


// PATCH /api/metadatas/:metadataId
export const updateMetadataById:RequestHandler = catchAsync(async (req, res, next) => {
	const metadataId = req.params.metadataId

	// delete req.body.isActive  	// only update my seperate route
	const filteredBody = metadataDtos.filterBodyForUpdateMetadata(req.body)
	const metadata = await Metadata.findByIdAndUpdate(metadataId, filteredBody, { new: true })
	if(!metadata) return next(appError('metadata update failed'))


	const responseData: ResponseData<MetadataDocument> = {
		status: 'success',
		data: metadata
	}

	res.status(200).json( responseData )
})


// DELETE /api/metadatas/:metadataId
export const deleteMetadataById:RequestHandler = catchAsync(async (req, res, next) => {
	const metadataId = req.params.metadataId

	const metadata = await Metadata.findByIdAndDelete(metadataId)
	if(!metadata) return next(appError('metadata not found'))

	const responseData: ResponseData<MetadataDocument> = {
		status: 'success',
		data: metadata
	}
	res.status(204).json( responseData )
})


