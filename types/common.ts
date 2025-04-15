export type ResponseStatus = 'created' | 'updated' | 'deleted' | 'none'
export type ResponseData<Data = unknown> = {
	status: ResponseStatus
	count?: number
	total?: number
	data?: Data,
	message?: string
}


export type TempObj = {
	[key: string]: string
}



export type Image = {
	public_id: string
	secure_url: string
}

export type Status = 'active' | 'inactive'
export type Currency = string

export type Address = {
  street: string
	city: string
	state: string
	postCode: number
	country: string
}


export type	Gender = 'male' | 'female' | null
export type Role = 'vendor' | 'user' | 'admin' 
// export type Role = (typeof Roles)[keyof typeof Roles] 						// => type Role = "vendor" | "user" | "admin"
// const roles = Object.values(Roles) 														// => [ 'vendor', 'user', 'admin' ]



// export type ColorItem = {
//   color: string
//   price: number
// }