import { configureStore } from '@reduxjs/toolkit'

import { reducer as layoutReducer } from '@/store/layoutReducer'
import { reducer as userReducer } from '@/store/userReducer'
import { reducer as serviceReducer } from '@/store/serviceReducer'
import { reducer as portfolioReducer } from '@/store/portfolioReducer'
import { reducer as pageReducer } from '@/store/pageReducer'

export const store = configureStore({
  reducer: {
		layout: layoutReducer,
		user: userReducer,
		service: serviceReducer,
		portfolio: portfolioReducer,
		page: pageReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
