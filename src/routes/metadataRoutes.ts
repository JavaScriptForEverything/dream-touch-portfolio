import { Router } from 'express'
import * as metadataController from '@/controllers/metadataController'


// => /api/metadatas/
export const router = Router()

router.route('/')
	.get(metadataController.getMetadatas)
	.post(metadataController.addMetadata)

router.route('/:metadataId')
	.get(metadataController.getMetadataById)
	.patch(metadataController.updateMetadataById)
	.delete(metadataController.deleteMetadataById)
