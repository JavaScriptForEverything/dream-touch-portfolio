import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { PageDocument } from '@/types/page'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import Page from '@/models/pageModel'
import * as pageDtos from '@/dtos/pageDtos'
import * as fileService from '@/services/fileService'
import { promisify } from 'node:util'
import { isValidObjectId } from 'mongoose'


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
	console.log(req.body.coverPhoto)

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
			message: 'page created successful',
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
export const getPageByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	const pageId = req.params.pageId
	const filter = (isValidObjectId(pageId)) ?  { _id: pageId } : { slug: pageId }

	const page = await Page.findOne(filter)
	if(!page) return next(appError('page not found'))
	
	const responseData: ResponseData<PageDocument> = {
		status: 'success',
		data: page
	}
	res.status(200).json( responseData )
})


// PATCH /api/pages/:pageId
export const updatePageByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	try {
		const pageId = req.params.pageId
		const filter = (isValidObjectId(pageId)) ?  { _id: pageId } : { slug: pageId }
		const page = await Page.findOne(filter)
		if(!page) return next(appError('no page found'))

		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/pages', seoData)
			if(error) return next(appError(`Page coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}

		const filteredBody = pageDtos.filterBodyForUpdatePage(req.body)
		const updatedPage = await Page.findOneAndUpdate(filter, filteredBody, { new: true })
		if(!updatedPage) return next(appError('page update failed'))

		if(req.body.coverPhoto) {
			req.body.coverPhoto = page.coverPhoto 	
			
			setTimeout(() => {
				if(page.coverPhoto?.secure_url) promisify(fileService.removeFile)(page.coverPhoto.secure_url)
			}, 1000)
		}

		const responseData: ResponseData<PageDocument> = {
			status: 'success',
			data: updatedPage,
			message: 'page updated successful',
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
// export const updatePageByIdOrSlug: RequestHandler = catchAsync(async (req, res, next) => {
// 	const pageId = req.params.pageId
// 	const filter = isValidObjectId(pageId) ? { _id: pageId } : { slug: pageId }
// 	const page = await Page.findOne(filter)
// 	if (!page) return next(appError('no page found'))

// 	let newCoverPhoto = null
// 	let oldCoverPhoto = page.coverPhoto

// 	try {
// 		if (req.body.coverPhoto) {
// 				const { dataUrl, ...seoData } = req.body.coverPhoto;
// 				const { error, image } = await fileService.uploadFile(dataUrl, '/pages', seoData);
// 				if (error) return next(appError(`Page coverPhoto upload error: ${error}`));

// 				newCoverPhoto = image;
// 				req.body.coverPhoto = image;
// 		}

// 		const filteredBody = pageDtos.filterBodyForUpdatePage(req.body);
// 		const updatedPage = await Page.findOneAndUpdate(filter, filteredBody, { new: true });
// 		if (!updatedPage) {
// 				// If update failed but we uploaded a new image, clean it up
// 				if (newCoverPhoto?.secure_url) {
// 						await promisify(fileService.removeFile)(newCoverPhoto.secure_url);
// 				}
// 				return next(appError('page update failed'));
// 		}

// 		// Only delete old image if new image was successfully uploaded and saved
// 		if (newCoverPhoto && oldCoverPhoto?.secure_url) {
// 			try {
// 				await promisify(fileService.removeFile)(oldCoverPhoto.secure_url);
// 			} catch (err) {
// 				console.error('Failed to delete old image:', err);
// 				// Don't fail the request if deletion of old image fails
// 			}
// 		}

// 		const responseData: ResponseData<PageDocument> = {
// 			status: 'success',
// 			data: updatedPage,
// 			message: 'page updated successful',
// 		}

// 		res.status(200).json(responseData);

// 	} catch (err: unknown) {
// 		// Clean up newly uploaded image if error occurred
// 		if (newCoverPhoto?.secure_url) {
// 			try {
// 				await promisify(fileService.removeFile)(newCoverPhoto.secure_url);
// 			} catch (cleanupErr) {
// 				console.error('Failed to cleanup new image after error:', cleanupErr);
// 			}
// 		}

// 		if (err instanceof Error) next(appError(err.message, 400, 'error'));
// 		if (typeof err === 'string') next(appError(err, 400, 'error'));
// 	}
// })


// DELETE /api/pages/:pageId
export const deletePageById:RequestHandler = catchAsync(async (req, res, next) => {
	const pageId = req.params.pageId

	const page = await Page.findByIdAndDelete(pageId)
	if(!page) return next(appError('page not found'))

	const responseData: ResponseData<PageDocument> = {
		status: 'success',
		data: page
	}
	res.status(200).json( responseData )
	// res.status(204).json( responseData ) 	// if use 404, then api call .json() failes
})


