import { configureStore } from '@reduxjs/toolkit'
import { reducer as layoutReducer } from '@/store/layoutReducer'
import { reducer as userReducer } from '@/store/userReducer'
import { reducer as serviceReducer } from '@/store/serviceReducer'

// export const makeStore = () => configureStore({
export const store = configureStore({
  reducer: {
		layout: layoutReducer,
		user: userReducer,
		service: serviceReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
