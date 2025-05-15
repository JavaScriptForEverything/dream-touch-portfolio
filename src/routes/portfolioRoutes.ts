import { Router } from 'express'
import * as portfolioController from '@/controllers/portfolioController'


// => /api/portfolios/
export const router = Router()

router.route('/')
	.get(portfolioController.getPortfolios)
	.post(portfolioController.createPortfolio)

router.route('/:portfolioId')
	.get(portfolioController.getPortfolioByIdOrSlug)
	.patch(portfolioController.updatePortfolioByIdOrSlug)
	.delete(portfolioController.deletePortfolioById)