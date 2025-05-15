import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { ServiceDocument } from '@/types/service'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import { promisify } from 'node:util'
import { isValidObjectId } from 'mongoose'
import Service from '@/models/serviceModel'
import * as serviceDtos from '@/dtos/serviceDtos'
import * as fileService from '@/services/fileService'


// GET /api/services
export const getServices: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const { query, total } = await apiFeatures(Service, req.query, filter)
	const services = await query
	
	const responseData: ResponseData<ServiceDocument[]> = {
		status: 'success',
		count: services.length,
		total,
		data: services,
	}
	res.status(200).json( responseData )
})



// POST 	/api/services
export const createService: RequestHandler =  async (req, res, next) => {
	try {
		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/services', seoData)
			if(error) return next(appError(`service coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}
		

		if (req.body.rows && Array.isArray(req.body.rows)) {
			const rows = req.body.rows.map( async (row: any, index: number) => {
				const { dataUrl, ...seoData } = row.image

				if(dataUrl) {
					const { error, image } = await fileService.uploadFile(dataUrl, '/services', seoData)
					if(error) return next(appError(`service rows[${index}].image upload error: ${error}`))

					return { ...row, image }
				} else return row
				
			})
			req.body.rows = await Promise.all(rows)
		}



		const filteredBody = serviceDtos.filterBodyForCreateService(req.body)

		const service = await Service.create(filteredBody)
		if(!service) return next(appError('service not found'))

		const responseData: ResponseData = {
			status: 'success',
			data: service,
		}
		res.status(201).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)

		setTimeout(() => {
			req.body.rows.forEach( (row: any) => {
				promisify(fileService.removeFile)(row.image?.secure_url)
			})
		}, 1000)


		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
}

// GET /api/services/:serviceId
export const getServiceByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	const serviceId = req.params.serviceId
	const filter = (isValidObjectId(serviceId)) ?  { _id: serviceId } : { slug: serviceId }

	const service = await Service.findOne(filter)
	if(!service) return next(appError('service not found'))
	
	const responseData: ResponseData<ServiceDocument> = {
		status: 'success',
		data: service
	}
	setTimeout(() => {
		
	res.status(200).json( responseData )
	}, 2000);
})


// PATCH /api/services/:serviceId
export const updateServiceByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	try {
		const serviceId = req.params.serviceId
		const filter = (isValidObjectId(serviceId)) ?  { _id: serviceId } : { slug: serviceId }

		const service = await Service.findOne(filter)
		if(!service) return next(appError('service not found'))


		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/services', seoData)
			if(error) return next(appError(`service coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}
		

		if (req.body.rows && Array.isArray(req.body.rows)) {
			const rows = req.body.rows.map( async (row: any, index: number) => {
				const { dataUrl, ...seoData } = row.image

				if(dataUrl) {
					const { error, image } = await fileService.uploadFile(dataUrl, '/services', seoData)
					if(error) return next(appError(`service rows[${index}].image upload error: ${error}`))

					return { ...row, image }
				} else return row
				
			})
			req.body.rows = await Promise.all(rows)
		}


		const filteredBody = serviceDtos.filterBodyForUpdateService(req.body)

		const updatedService = await Service.findOneAndUpdate(filter, filteredBody, { new: true })
		if(!updatedService) return next(appError('service update failed'))


		if(req.body.coverPhoto) {
			req.body.coverPhoto = service.coverPhoto 	
			
			setTimeout(() => {
				if(service.coverPhoto?.secure_url) promisify(fileService.removeFile)(service.coverPhoto.secure_url)
			}, 1000)
		}

		if (req.body.rows && Array.isArray(req.body.rows)) {
			req.body.rows = service.rows 	
			
			service.rows.map( async (row: any, index: number) => {
				setTimeout(() => {
					if(row.image?.secure_url) promisify(fileService.removeFile)(row.image.secure_url)
				}, 1000)
			})
		}


		const responseData: ResponseData<ServiceDocument> = {
			status: 'success',
			data: updatedService
		}

		res.status(200).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)

		if (req.body.rows && Array.isArray(req.body.rows)) {
			
			req.body.rows.map( async (row: any, index: number) => {
				setTimeout(() => {
					if(row.image?.secure_url) promisify(fileService.removeFile)(row.image.secure_url)
				}, 1000)
			})
		}

		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
})


// DELETE /api/services/:serviceId
export const deleteServiceById:RequestHandler = catchAsync(async (req, res, next) => {
	const serviceId = req.params.serviceId

	const service = await Service.findById(serviceId)
	if(!service) return next(appError('service not found'))

	const deletedService = await Service.findByIdAndDelete(serviceId)
	if(!deletedService) return next(appError('service deletion failed'))

	// delete existing image if have
	setTimeout(() => {
		if(service.coverPhoto?.secure_url) promisify(fileService.removeFile)(service.coverPhoto.secure_url)
	}, 1000)

	if (service.rows.length) {
		service.rows.map( async (row: any, index: number) => {
			setTimeout(() => {
				if(row.image?.secure_url) promisify(fileService.removeFile)(row.image.secure_url)
			}, 1000)
		})
	}


	const responseData: ResponseData<ServiceDocument> = {
		status: 'success',
		data: deletedService
	}
	res.status(204).json( responseData )
})

