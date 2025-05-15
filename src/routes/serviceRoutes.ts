import { Router } from 'express'
import * as serviceController from '@/controllers/serviceController'


// => /api/services/
export const router = Router()

router.route('/')
	.get(serviceController.getServices)
	.post(serviceController.createService)

router.route('/:serviceId')
	.get(serviceController.getServiceByIdOrSlug)
	.patch(serviceController.updateServiceByIdOrSlug)
	.delete(serviceController.deleteServiceById)