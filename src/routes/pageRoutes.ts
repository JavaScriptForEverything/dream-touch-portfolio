import { Router } from 'express'
import * as pageContainer from '@/controllers/pageContainer'


// => /api/pages/
export const router = Router()

router.route('/')
	.get(pageContainer.getPages)
	.post(pageContainer.addPage)

router.route('/:pageId')
	.get(pageContainer.getPageByIdOrSlug)
	.patch(pageContainer.updatePageByIdOrSlug)
	.delete(pageContainer.deletePageById)
