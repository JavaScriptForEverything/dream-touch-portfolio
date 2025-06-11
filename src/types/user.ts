import type { Gender, ResponseStatus } from '@/types/common'
import type { Image } from '@/types/common'

// export type Address = {
//   street: string
// 	city: string
// 	state: string
// 	postCode: number
// 	country: string
// }


export type UserDocument = {
	id: string
	createdAt: Date
	updatedAt: Date

	name: string
	username: string
	role: string
	slug: string 									// show user dynamically with slugify url instead of id
	email: string
	password: string
	confirmPassword?: string

	coverPhoto: Image
	avatar: Image

	phone: string
	gender: Gender
	// location: Location,

	// bio: string
  // dateOfBirth: Date
	// address: Address
	passwordResetToken?: string
	comparePassword: (password: string) => Promise<boolean>
	getPasswordResetToken: () => Promise<string>

	emailResetToken: string | undefined
	emailResetTokenExpires: Date | undefined
	createEmailResetToken: () => Promise<string>
	handleEmailUpdate: (resetToken: string, email: string) => Promise<boolean>

	// likes: string[] 				// wishlist
	// carts: string[] 				// cart items
	// orders: string[]

	// status: string
	// customId: string
	// clientId: string 							// social media login 
	// role: Role
	// isActive: boolean
	// isVerified: boolean
	// isVisible: boolean


}

export type RegisterFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
export type LoginFormData = {
  email: string
  password: string
	// isRemembered: boolean
}

// export type ColorItem = {
//   color: string
//   price: number
// }












// export type FormFields = {
// 	name: string
// 	email: string
// 	password: string
// 	confirmPassword: string
// 	avatar: string
// }
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
	// fields: Partial<FormFields>
}


export type SetUsersPayload = { 
	users: UserDocument[], 
	total: number, 
	count: number
}






