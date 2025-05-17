import { Router } from 'express'
import * as contactController from '@/controllers/contactController'


// => /api/contacts/
export const router = Router()

router.route('/')
	.get(contactController.getContacts)
	.post(contactController.addContact)

router.route('/:contactId')
	.get(contactController.getContactById)
	.patch(contactController.updateContactById)
	.delete(contactController.deleteContactById)