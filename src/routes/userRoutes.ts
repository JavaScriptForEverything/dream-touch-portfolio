// import passport from 'passport'
import { Router } from 'express'
import * as userController from '@/controllers/userController'
// import * as authController from '@/controllers/authController'


// => /api/users/
export const router = Router()

// router.get('/me', authController.protect, userController.addUserId, userController.getUserById)
// router.patch('/me', authController.protect, userController.addUserId, userController.updateUserById)
// router.delete('/me', authController.protect, userController.addUserId, userController.deleteUserById)

// // => POST /api/users/bulk-delete
// router.post('/bulk-delete', authController.protect, userController.bulkDeleteUsers)




router.route('/')
	.get(userController.getAllUsers)
	// .post(authController.protect, authController.restrictTo('admin'), userController.createUserByAdminUser)
	// .get(authController.protect, authController.restrictTo('admin'), userController.getAllUsers)

router.route('/:userId')
	.get(userController.getUserById)
	.patch(
		// authController.restrictTo('admin'),
		userController.updateUserById
	)
	.delete(userController.deleteUserById)
