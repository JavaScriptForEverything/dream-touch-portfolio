import type { CreateUser, UpdateOTP, UpdateUser, UserDocument } from '@/types/user'
import { filterObjectByArray } from '@/lib/utils'




const commonAllowedFields = [
	"role",
	"name",
	"slug",
	"username",
	"email",
	"password",
	"confirmPassword",
	"phone",
	"gender",
	"dateOfBirth",
	"address",
	"coverPhoto",
	"avatar",
	"isVisible",


]

// POST 	/api/users
export const filterBodyForCreateUserByAdmin = (body: CreateUser) => {
	const allowedFields = [
		"name",
		"email",
		"password",
		"confirmPassword",
		"role",
	]

	return filterObjectByArray(body, allowedFields)
}



// POST 	/api/auth/register
export const filterBodyForCreateUser = (body: CreateUser) => {
	const allowedFields = [
		...commonAllowedFields,

	]

	return filterObjectByArray(body, allowedFields)
}

// user => user._doc
export const filterUserDocument = (user: UserDocument) => {
	const allowedFields = [
		...commonAllowedFields,
		"clientId",
		"passwordResetToken",
		"emailResetToken",
		"emailResetTokenExpires",

		"isActive",
		'isVerified',
		"role",

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(user, allowedFields)
}


// PATCH 	/api/users/:userId
// PATCH 	/api/users/me
export const filterBodyForUpdate = (body: UpdateUser) => {
	const allowedFields = [
		...commonAllowedFields,

		"role",

		'isVerified',
		"isActive",
	]
	return filterObjectByArray(body, allowedFields)
}



// POST 	/api/auth/update-otp
export const updateOTPCode = (body: UpdateOTP) => {
	const allowedFields = [
		'otpCode'
	]

	return filterObjectByArray(body, allowedFields)
}



