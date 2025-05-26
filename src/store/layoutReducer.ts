import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '@/store'
import type { InitialState, SnackbarOption } from '@/types/layout'
import { createSlice } from '@reduxjs/toolkit'


const initialState: InitialState = {
	drawerIsOpen: false,
	isOpenSnackbar: false,
	snackbarOption: {
		severity: 'success',
		variant: 'filled',
		title: '',
		message: '',
		position: 'top-1 right-1',
		action: true,
		showSeverity: true,
		autoClose: false,
		closeTime: 3000,
	}
}

interface SetSnackbar {
	isOpen: boolean, 
	option: SnackbarOption
}

export const { reducer, actions } = createSlice({
  name: 'layout',
  initialState,
  reducers: {
		setDrawerIsOpen: (state, action: PayloadAction<boolean>): InitialState => ({
			...state,
			drawerIsOpen: action.payload,
		}),
		setIsOpenSnackbar: (state, action: PayloadAction<SetSnackbar>): InitialState => ({
			...state,
			isOpenSnackbar: action.payload.isOpen,
			snackbarOption: { ...state.snackbarOption, ...action.payload.option }
		}),

		// addItemToCart: (state, action: PayloadAction<string>): InitialState => ({
		// 	...state,
		// 	carts: [ ...state.carts, action.payload]
		// }),
		// removeItemFromCart: (state, action: PayloadAction<string>): InitialState => ({
		// 	...state,
		// 	carts: state.carts.filter(cartId => cartId !== action.payload )
		// }),
		// setIsProductAddedToCart: (state, action: PayloadAction<string>): InitialState => ({
		// 	...state,
		// 	isProductAddedToCart: !!state.carts.find(cartId => cartId === action.payload )
		// }),

		// setReplyTo: (state, action: PayloadAction<ReplyTo>): InitialState => ({
		// 	...state,
		// 	replyTo: action.payload
		// }),
		// resetReplyTo: (state ): InitialState => ({
		// 	...state,
		// 	replyTo: null
		// })
  },
})

export const setDrawerIsOpen = (isOpen: boolean) => (dispatch: AppDispatch): void => {
	dispatch(actions.setDrawerIsOpen(isOpen))
}

export const setIsOpenSnackbar = (isOpen: boolean, option: SnackbarOption) => (dispatch: AppDispatch): void => {
	dispatch(actions.setIsOpenSnackbar({ isOpen, option }))
}


// // update cart details in localStorage or server too
// export const addItemToCart = (cart: string) => (dispatch: AppDispatch): void => {
// 	dispatch(actions.addItemToCart(cart))
// 	dispatch(actions.setIsProductAddedToCart(cart))

// }
// // update cart details in localStorage or server too
// export const removeItemFromCart = (cart: string) => (dispatch: AppDispatch): void => {
// 	dispatch(actions.removeItemFromCart(cart)) 
// 	dispatch(actions.setIsProductAddedToCart(cart))
// }


// export const replyTo = (replyTo: ReplyTo) => (dispatch: AppDispatch): void => {
// 	dispatch(actions.setReplyTo(replyTo))
// }
// export const resetReplyTo = () => (dispatch: AppDispatch): void => {
// 	dispatch(actions.resetReplyTo())
// }
