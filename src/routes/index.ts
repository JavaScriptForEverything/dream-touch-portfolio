import { Router } from 'express'

import { router as fileRouter } from '@/routes/fileRoutes' 
import { router as userRouter } from '@/routes/userRoutes' 
import { router as serviceRouter } from '@/routes/serviceRoutes' 



// => / 	(root)
const router = Router()

router.use('/upload', fileRouter)
router.use('/api/users', userRouter)
// router.use('/api/auth', authRouter)
router.use('/api/services', serviceRouter)
// router.use('/api/reviews', reviewRouter)

// router.use('/api/homes', homeRouter)

// router.use('/api/about-us', aboutUsRouter)
// router.use('/api/contact-us', contactUsRouter)


export default router
