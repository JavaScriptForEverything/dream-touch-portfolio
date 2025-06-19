import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/store'
import type { InitialState, PortfolioDocument, SetPortfolioPayload } from '@/types/portfolio'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
import { ORIGIN } from '@/config/config'
// import { apiRequest } from '@/lib/api'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	status: 'none',
	portfolio: null,
	portfolios: [],

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0 	
}


export const { reducer, actions } = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
		request: (state: InitialState): InitialState => ({
			...state,
			loading: true,
			error: '',
			status: 'none',
			message: '',
		}),
		failed: (state: InitialState, action: PayloadAction<string>): InitialState => ({
			...state,
			loading: false,
			message: '',
			status: 'none',
			error: action.payload
		}),
		clearError: (state: InitialState): InitialState => ({
			...state,
			loading: false,
			message: '',
			status: 'none',
			error: '',
		}),
		setLimit: (state: InitialState, action: PayloadAction<number>): InitialState => ({
			...state,
			loading: false,
			message: '',
			status: 'none',
			error: '',
			limit: action.payload
		}),


    setPortfolio: (state: InitialState, action: PayloadAction<PortfolioDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			portfolio: action.payload
    }),
    setPortfolios: (state: InitialState, action: PayloadAction<SetPortfolioPayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			portfolios: [ ...action.payload.portfolios ],
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
    addPortfolio: (state: InitialState, action: PayloadAction<PortfolioDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'created',
			portfolios: [ ...state.portfolios, action.payload ]
    }),
    removePortfolio: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'deleted',
			portfolios: state.portfolios.filter(portfolio => portfolio.id !== action.payload)
    }),
    updatePortfolio: (state: InitialState, { payload }: PayloadAction<PortfolioDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'updated',
			portfolios: state.portfolios.map(portfolio => portfolio.id === payload.id ? { ...portfolio, ...payload} : portfolio)
    }),

  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}


export const getPortfolios = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const limit = getState().portfolio.limit

	const res = await fetch(`${ORIGIN}/api/portfolios?_sort=-createdAt&_limit=${limit}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { status, message, data, count, total } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.setPortfolios({ portfolios: data, count, total }))

}, actions.failed)


// export const getProducts = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const limit = getState().portfolio.limit;
// 	const { status, message, data, count, total } = await apiRequest<any>( `/api/portfolios?_sort=-createdAt&_limit=${limit}`)

// 	if (status !== "success") dispatch(actions.failed(message))
// 	else dispatch(actions.setProducts({ portfolios: data, count: count, total: total }))

// }, actions.failed)


// export const getProduct = (idOrSlug: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/portfolios/${idOrSlug}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message, data } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.setProduct(data))

// }, actions.failed)



// export const addProduct = (body: any) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/portfolios`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		body: JSON.stringify(body),
// 		credentials: 'include'
// 	})

// 	const { status, message, data } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.addProduct(data))

// }, actions.failed)


// export const updateProductByIdOrSlug = (idOrSlug: string, body: any) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/portfolios/${idOrSlug}`, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		body: JSON.stringify(body),
// 		credentials: 'include'
// 	})

// 	const { status, message, data } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.updateProduct(data))

// }, actions.failed)


// export const deleteProductById = (id: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/portfolios/${id}`, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.removeProduct(id))

// }, actions.failed)


// export const searchProductBy = (search: string, fields: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/portfolios?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ portfolios: data, count, total }))

// }, actions.failed)


// export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const limit = getState().portfolio.limit
// 	const res = await fetch(`${ORIGIN}/api/portfolios?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ portfolios: data, count, total }))
// }, actions.failed)


export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
	dispatch(actions.setLimit(limit))
}, actions.failed)


