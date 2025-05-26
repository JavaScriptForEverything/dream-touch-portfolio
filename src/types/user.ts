import type { Gender, ResponseStatus } from '@/types/common'
import type { Image, Role } from '@/types/common'

export type Address = {
  street: string
	city: string
	state: string
	postCode: number
	country: string
}


export type UserDocument = {
	id: string
	createdAt: Date
	updatedAt: Date

	customId: string
	fname: string
	lname: string
	fullName: string
	username: string
	slug: string
	email: string
	password: string
	confirmPassword?: string
	coverPhoto: Image
	avatar: Image
	clientId: string 							// social media login 
	role: Role
	isActive: boolean
	isVerified: boolean
	isVisible: boolean
	passwordResetToken?: string

	phone: string
	location: Location,
	gender: Gender

	bio: string
  dateOfBirth: Date
	address: Address

	comparePassword: (password: string) => Promise<boolean>
	getPasswordResetToken: () => Promise<string>

	emailResetToken: string | undefined
	emailResetTokenExpires: Date | undefined
	createEmailResetToken: () => Promise<string>
	handleEmailUpdate: (resetToken: string, email: string) => Promise<boolean>

	likes: string[] 				// wishlist
	carts: string[] 				// cart items
	orders: string[]

	// idCardFrontPageImage: Image
	// idCardBackPageImage: Image
	// bankStatementImage: Image
	// idCardNumber: string
	// accountHolderName: string
	// accountNumber: string
	// routingNumber: string
	// bankName: string
	// bankBranch: string

	status: string
}

export type ReviewDocument = {
	id: string
	createdAt: Date
	updatedAt: Date
}


export type ColorItem = {
  color: string
  price: number
}












export type FormFields = {
	name: string
	email: string
	password: string
	confirmPassword: string
	avatar: string
}
export type RegisterData = {
	name: string
	email: string
	password: string
	confirmPassword: string
	avatar: string
}
export type LoginData = {
	email: string
	password: string
}

export type InitialState = {
	loading: boolean
	error: string
	message: string
	user: null | UserDocument
	users: UserDocument[]
	isAuthenticated: boolean

	status: ResponseStatus
	authToken: string | null
	userId: string | null


	total: number
	count: number
  limit: number
  totalPages: number

	isRemembered: boolean
	fields: Partial<FormFields>
}


export type SetUsersPayload = { 
	users: UserDocument[], 
	total: number, 
	count: number
}






