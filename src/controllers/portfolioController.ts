import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { PortfolioDocument } from '@/types/portfolio'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import { promisify } from 'node:util'
import { isValidObjectId } from 'mongoose'
import Portfolio from '@/models/portfolioModel'
import * as portfolioDtos from '@/dtos/portfolioDtos'
import * as fileService from '@/services/fileService'


// GET /api/portfolios
export const getPortfolios: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const { query, total } = await apiFeatures(Portfolio, req.query, filter)
	const portfolios = await query
	
	const responseData: ResponseData<PortfolioDocument[]> = {
		status: 'success',
		count: portfolios.length,
		total,
		data: portfolios,
	}
	res.status(200).json( responseData )
})



// POST 	/api/portfolios
export const createPortfolio: RequestHandler =  async (req, res, next) => {
	try {
		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/portfolios', seoData)
			if(error) return next(appError(`Portfolio coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}
		

		if (req.body.images && Array.isArray(req.body.images)) {
			const images = req.body.images.map( async (image: any, index: number) => {
				const { dataUrl, ...seoData } = image

				if(dataUrl) {
					const { error, image } = await fileService.uploadFile(dataUrl, '/portfolios', seoData)
					if(error) return next(appError(`Portfolio images[${index}].image upload error: ${error}`))

					return image
				} else return image
				
			})
			req.body.images = await Promise.all(images)
		}



		const filteredBody = portfolioDtos.filterBodyForCreatePortfolio(req.body)

		const portfolio = await Portfolio.create(filteredBody)
		if(!portfolio) return next(appError('portfolio not found'))

		const responseData: ResponseData = {
			status: 'success',
			data: portfolio,
		}
		res.status(201).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)

		setTimeout(() => {
			req.body.images.forEach( (image: any) => {
				promisify(fileService.removeFile)(image?.secure_url)
			})
		}, 1000)


		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
}

// GET /api/portfolios/:portfolioId
export const getPortfolioByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	const portfolioId = req.params.portfolioId
	const filter = (isValidObjectId(portfolioId)) ?  { _id: portfolioId } : { slug: portfolioId }

	const portfolio = await Portfolio.findOne(filter)
	if(!portfolio) return next(appError('portfolio not found'))
	
	const responseData: ResponseData<PortfolioDocument> = {
		status: 'success',
		data: portfolio
	}
	setTimeout(() => {
		
	res.status(200).json( responseData )
	}, 2000);
})


// PATCH /api/portfolios/:portfolioId
export const updatePortfolioByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	try {
		const portfolioId = req.params.portfolioId
		const filter = (isValidObjectId(portfolioId)) ?  { _id: portfolioId } : { slug: portfolioId }

		const portfolio = await Portfolio.findOne(filter)
		if(!portfolio) return next(appError('portfolio not found'))


		if(req.body.coverPhoto) {
			const { dataUrl, ...seoData } = req.body.coverPhoto

			const { error, image } = await fileService.uploadFile(dataUrl, '/portfolios', seoData)
			if(error) return next(appError(`portfolio coverPhoto upload error: ${error}`))

			req.body.coverPhoto = image
		}
		

		if (req.body.images && Array.isArray(req.body.images)) {
			const images = req.body.images.map( async (image: any, index: number) => {
				const { dataUrl, ...seoData } = image

				if(dataUrl) {
					const { error, image } = await fileService.uploadFile(dataUrl, '/portfolios', seoData)
					if(error) return next(appError(`portfolio images[${index}].image upload error: ${error}`))

					return image 
				} else return image
				
			})
			req.body.images = await Promise.all(images)
		}


		const filteredBody = portfolioDtos.filterBodyForUpdatePortfolio(req.body)

		const updatedPortfolio = await Portfolio.findOneAndUpdate(filter, filteredBody, { new: true })
		if(!updatedPortfolio) return next(appError('Portfolio update failed'))


		if(req.body.coverPhoto) {
			req.body.coverPhoto = portfolio.coverPhoto 	
			
			setTimeout(() => {
				if(portfolio.coverPhoto?.secure_url) promisify(fileService.removeFile)(portfolio.coverPhoto.secure_url)
			}, 1000)
		}

		if (req.body.images && Array.isArray(req.body.images)) {
			req.body.images = portfolio.images 	
			
			portfolio.images.map( async (image: any, index: number) => {
				setTimeout(() => {
					if(image?.secure_url) promisify(fileService.removeFile)(image.secure_url)
				}, 1000)
			})
		}


		const responseData: ResponseData<PortfolioDocument> = {
			status: 'success',
			data: updatedPortfolio
		}

		res.status(200).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)

		if (req.body.images && Array.isArray(req.body.images)) {
			
			req.body.images.map( async (image: any, index: number) => {
				setTimeout(() => {
					if(image?.secure_url) promisify(fileService.removeFile)(image.secure_url)
				}, 1000)
			})
		}

		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
})


// DELETE /api/portfolios/:portfolioId
export const deletePortfolioById:RequestHandler = catchAsync(async (req, res, next) => {
	const portfolioId = req.params.portfolioId

	const portfolio = await Portfolio.findById(portfolioId)
	if(!portfolio) return next(appError('portfolio not found'))

	const deletedPortfolio = await Portfolio.findByIdAndDelete(portfolioId)
	if(!deletedPortfolio) return next(appError('portfolio deletion failed'))

	// delete existing image if have
	setTimeout(() => {
		if(portfolio.coverPhoto?.secure_url) promisify(fileService.removeFile)(portfolio.coverPhoto.secure_url)
	}, 1000)

	if (portfolio.images.length) {
		portfolio.images.map( async (image: any, index: number) => {
			setTimeout(() => {
				if(image?.secure_url) promisify(fileService.removeFile)(image.secure_url)
			}, 1000)
		})
	}


	const responseData: ResponseData<PortfolioDocument> = {
		status: 'success',
		data: deletedPortfolio
	}
	res.status(204).json( responseData )
})

