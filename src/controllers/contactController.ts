import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { ContactDocument } from '@/types/contact'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import Contact from '@/models/contactModel'
import * as contactDtos from '@/dtos/contactDtos'


// GET /api/contacts
export const getContacts: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const { query, total } = await apiFeatures(Contact, req.query, filter)
	const contacts = await query
	
	const responseData: ResponseData<ContactDocument[]> = {
		status: 'success',
		count: contacts.length,
		total,
		data: contacts,
	}
	res.status(200).json( responseData )
})


// POST 	/api/contacts
export const addContact: RequestHandler =  catchAsync(async (req, res, next) => {

	// delete req.body.isActive 	// only update my seperate route

	const filteredBody = contactDtos.filterBodyForCreateContact(req.body)
	const contact = await Contact.create(filteredBody)
	if(!contact) return next(appError('contact not found'))

	const responseData: ResponseData = {
		status: 'success',
		data: contact,
	}
	res.status(201).json( responseData )
})

// GET /api/contacts/:contactId
export const getContactById:RequestHandler = catchAsync(async (req, res, next) => {
	const contactId = req.params.contactId

	const contact = await Contact.findById(contactId)
	if(!contact) return next(appError('contact not found'))
	
	const responseData: ResponseData<ContactDocument> = {
		status: 'success',
		data: contact
	}
	res.status(200).json( responseData )
})


// PATCH /api/contacts/:contactId
export const updateContactById:RequestHandler = catchAsync(async (req, res, next) => {
	const contactId = req.params.contactId

	// delete req.body.isActive  	// only update my seperate route
	const filteredBody = contactDtos.filterBodyForUpdateContact(req.body)
	const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
	if(!contact) return next(appError('contact update failed'))


	const responseData: ResponseData<ContactDocument> = {
		status: 'success',
		data: contact
	}

	res.status(200).json( responseData )
})


// DELETE /api/contacts/:contactId
export const deleteContactById:RequestHandler = catchAsync(async (req, res, next) => {
	const contactId = req.params.contactId

	const contact = await Contact.findByIdAndDelete(contactId)
	if(!contact) return next(appError('contact not found'))

	const responseData: ResponseData<ContactDocument> = {
		status: 'success',
		data: contact
	}
	res.status(204).json( responseData )
})

