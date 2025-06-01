import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { PageDocument } from '@/types/page'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import Page from '@/models/pageModel'
import * as pageDtos from '@/dtos/pageDtos'
import * as fileService from '@/services/fileService'
import { promisify } from 'node:util'


// GET /api/pages
export const getPages: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const { query, total } = await apiFeatures(Page, req.query, filter)
	const pages = await query
	
	const responseData: ResponseData<PageDocument[]> = {
		status: 'success',
		count: pages.length,
		total,
		data: pages,
	}
	res.status(200).json( responseData )
})


// POST 	/api/pages
export const addPage: RequestHandler =  catchAsync(async (req, res, next) => {

	try {
		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/pages', seoData)
			if(error) return next(appError(`Page coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}

		const filteredBody = pageDtos.filterBodyForCreatePage(req.body)
		const page = await Page.create(filteredBody)
		if(!page) return next(appError('page not found'))

		const responseData: ResponseData = {
			status: 'success',
			data: page,
		}
			
		res.status(201).json( responseData )


	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)


		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}

})

// GET /api/pages/:pageId
export const getPageById:RequestHandler = catchAsync(async (req, res, next) => {
	const pageId = req.params.pageId

	const page = await Page.findById(pageId)
	if(!page) return next(appError('page not found'))
	
	const responseData: ResponseData<PageDocument> = {
		status: 'success',
		data: page
	}
	res.status(200).json( responseData )
})


// PATCH /api/pages/:pageId
export const updatePageById:RequestHandler = catchAsync(async (req, res, next) => {
	const pageId = req.params.pageId

	try {
		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/pages', seoData)
			if(error) return next(appError(`Page coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}

		const filteredBody = pageDtos.filterBodyForUpdatePage(req.body)
		const page = await Page.findByIdAndUpdate(pageId, filteredBody, { new: true })
		if(!page) return next(appError('page update failed'))

		if(req.body.coverPhoto) {
			req.body.coverPhoto = page.coverPhoto 	
			
			setTimeout(() => {
				if(page.coverPhoto?.secure_url) promisify(fileService.removeFile)(page.coverPhoto.secure_url)
			}, 1000)
		}

		const responseData: ResponseData<PageDocument> = {
			status: 'success',
			data: page
		}

		res.status(200).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)


		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
})


// DELETE /api/pages/:pageId
export const deletePageById:RequestHandler = catchAsync(async (req, res, next) => {
	const pageId = req.params.pageId

	const page = await Page.findByIdAndDelete(pageId)
	if(!page) return next(appError('page not found'))

	const responseData: ResponseData<PageDocument> = {
		status: 'success',
		data: page
	}
	res.status(204).json( responseData )
})


