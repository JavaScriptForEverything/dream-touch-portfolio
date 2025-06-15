import type { NextFunction, Request, RequestHandler, Response } from 'express'
import { Gender, PaymentStatus, PaymentTypes, PolicyType, Roles } from '@/types/constants'


export type AsyncRequestHandler = ( req: Request, res: Response, next: NextFunction) => Promise<void>




export type CheckAdmin = (role: typeof Roles) => RequestHandler
export type RestrictTo = (...roles: string[]) => RequestHandler


export type ErrorStatus = 'error' | 'failed' | 'AuthError' | 'PermissionDenied' | 'DB_Error'
export interface MyError<Status extends string = ErrorStatus> extends Error {
  message: string
  statusCode: number
  status: Status
}

export type ResponseStatus = 'success' | 'fialed' | 'error'
export interface ResponseData<Data = any> {
	status: ResponseStatus
	message?: string, 		// if status === 'success' then message is success message, else error message
	data?: Data,

	count?: number
	total?: number
	limit?: number
}

// export interface Image {
// 	public_id: string
// 	secure_url: string
// }

export interface SEOData {
  alt?: string;
  title?: string;
  caption?: string;
  description?: string;
}
export interface Image extends SEOData {
	public_id: string
	secure_url: string
}
export interface FileUploadReaturn {
	error: string
	image: Image | null
}

// export type Role = 'vendor' | 'user' | 'admin' 
export type Role = (typeof Roles)[keyof typeof Roles] 						// => type Role = "vendor" | "user" | "admin"
// const roles = Object.values(Roles) 														// => [ 'vendor', 'user', 'admin' ]

export type GenderType = (typeof Gender)[keyof typeof Gender]

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]
export type PaymentType = (typeof PaymentTypes)[keyof typeof PaymentTypes]



export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType]
// export type PolicyType = 'faq' | 'privary' | 'terms-and-conditions'

