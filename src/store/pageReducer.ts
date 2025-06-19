import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/store'
import type { InitialState, PageDocument, SetPagePayload } from '@/types/page'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
import { ORIGIN } from '@/config/config'
import { apiRequest } from '@/lib/api'
// import { apiRequest } from '@/lib/api'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	status: 'none',
	page: null,
	pages: [],

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0 	
}


export const { reducer, actions } = createSlice({
  name: 'page',
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


    setPage: (state: InitialState, action: PayloadAction<PageDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			status: 'created',
			message: 'page created successfully!!!',
			page: action.payload
    }),
    setPages: (state: InitialState, action: PayloadAction<SetPagePayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			pages: [ ...action.payload.pages ],
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
    // addPage: (state: InitialState, action: PayloadAction<PageDocument>): InitialState => ({
    //   ...state,
		// 	loading: false,
		// 	error: '',
		// 	message: '',
		// 	status: 'created',
		// 	pages: [ ...state.pages, action.payload ]
    // }),
    removePage: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'deleted',
			pages: state.pages.filter(page => page.id !== action.payload)
    }),
    updatePage: (state: InitialState, { payload }: PayloadAction<PageDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'updated',
			pages: state.pages.map(page => page.id === payload.id ? { ...page, ...payload} : page)
    }),

  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}


// // Method-1: Long version
// export const getPages = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const limit = getState().page.limit

// 	const res = await fetch(`${ORIGIN}/api/pages?_sort=-createdAt&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message, data, count, total } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.setPages({ pages: data, count, total }))

// }, actions.failed)


// Method-2: Short version
export const getPages = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const limit = getState().page.limit;
	const { status, message, data, count, total } = await apiRequest<any>( `/api/pages?_sort=-createdAt&_limit=${limit}`)

	if (status !== "success") dispatch(actions.failed(message))
	else dispatch(actions.setPages({ pages: data, count: count, total: total }))

}, actions.failed)


export const AddPage = (body: any) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const { status, message, data: page } = await apiRequest<any>('/api/pages', 'POST', body)
	console.log({ message, status })

	if (status === "success") dispatch(actions.setPage(page))
	else dispatch(actions.failed(message))

}, actions.failed)


export const removePage = (pageId: string) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const { status, message  } = await apiRequest<any>(`/api/pages/${pageId}`, 'DELETE')

	if (status !== "success") dispatch(actions.failed(message))
	else dispatch(actions.removePage(pageId))

}, actions.failed)

// export const removePage = (pageId: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/pages/${pageId}`, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			// 'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message, } = await res.json()
// 	if(status ==='success') dispatch(actions.removePage(pageId))
// 	else dispatch(actions.failed(message))

// }, actions.failed)



// export const getProduct = (idOrSlug: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/pages/${idOrSlug}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/pages`, {
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

// 	const res = await fetch(`${ORIGIN}/api/pages/${idOrSlug}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/pages/${id}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/pages?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ pages: data, count, total }))

// }, actions.failed)


// export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const limit = getState().page.limit
// 	const res = await fetch(`${ORIGIN}/api/pages?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ pages: data, count, total }))
// }, actions.failed)


export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
	dispatch(actions.setLimit(limit))
}, actions.failed)


