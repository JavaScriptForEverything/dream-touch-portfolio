import { Router } from 'express'

import { router as fileRouter } from '@/routes/fileRoutes' 
import { router as userRouter } from '@/routes/userRoutes' 
import { router as serviceRouter } from '@/routes/serviceRoutes' 
import { router as portfolioRouter } from '@/routes/portfolioRoutes' 
import { router as contactRouter } from '@/routes/contactRoutes' 
import { router as pageRouter } from '@/routes/pageRoutes' 
import { router as metadataRouter } from '@/routes/metadataRoutes' 



// => / 	(root)
const router = Router()

router.use('/upload', fileRouter)
router.use('/api/users', userRouter)
// router.use('/api/auth', authRouter)
router.use('/api/services', serviceRouter)
router.use('/api/portfolios', portfolioRouter)
router.use('/api/contacts', contactRouter)

router.use('/api/pages', pageRouter)
router.use('/api/metadatas', metadataRouter)

// router.use('/api/about-us', aboutUsRouter)
// router.use('/api/contact-us', contactUsRouter)


export default router
