
export type ReplyTo = {
	productId: string
	userId: string
	reviewId: string
}



export type InitialState = {
	// error?: string
	// message?: string
	drawerIsOpen: boolean
	carts: string[]
	isProductAddedToCart: boolean

	replyTo: null | ReplyTo
}