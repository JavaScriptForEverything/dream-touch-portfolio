import { configureStore } from '@reduxjs/toolkit'
import { reducer as layoutReducer } from './layoutReducer'
import { reducer as userReducer } from './userReducer'
import { reducer as productReducer } from './productReducer'
// import { reducer as reviewReducer } from './reviewReducer'

export const store = configureStore({
  reducer: {
		layout: layoutReducer,
		user: userReducer,
		product: productReducer,
		// review: reviewReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
