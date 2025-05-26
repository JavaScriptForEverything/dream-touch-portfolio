import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '@/store'
import type { InitialState, ProductDocument, SetProductsPayload } from '@/types/product'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
// import { ORIGIN } from '@/lib/config'
// import { apiRequest } from '@/lib/api'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	status: 'none',
	product: null,
	products: [],

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0 	
}


export const { reducer, actions } = createSlice({
  name: 'product',
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


    setProduct: (state: InitialState, action: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			product: action.payload
    }),
    setProducts: (state: InitialState, action: PayloadAction<SetProductsPayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			products: [ ...action.payload.products ],
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
    addProduct: (state: InitialState, action: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'created',
			products: [ ...state.products, action.payload ]
    }),
    removeProduct: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'deleted',
			products: state.products.filter(product => product.id !== action.payload)
    }),
    updateProduct: (state: InitialState, { payload }: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'updated',
			products: state.products.map(product => product.id === payload.id ? { ...product, ...payload} : product)
    }),

  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}


// export const getProducts = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const limit = getState().product.limit

// 	const res = await fetch(`${ORIGIN}/api/products?_sort=-createdAt&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message, data, count, total } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.setProducts({ products: data, count, total }))

// }, actions.failed)


// export const getProducts = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const limit = getState().product.limit;
// 	const { status, message, data, count, total } = await apiRequest<any>( `/api/products?_sort=-createdAt&_limit=${limit}`)

// 	if (status !== "success") dispatch(actions.failed(message))
// 	else dispatch(actions.setProducts({ products: data, count: count, total: total }))

// }, actions.failed)


// export const getProduct = (idOrSlug: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/products/${idOrSlug}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/products`, {
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

// 	const res = await fetch(`${ORIGIN}/api/products/${idOrSlug}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/products/${id}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/products?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ products: data, count, total }))

// }, actions.failed)


// export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const limit = getState().product.limit
// 	const res = await fetch(`${ORIGIN}/api/products?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setProducts({ products: data, count, total }))
// }, actions.failed)


export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
	dispatch(actions.setLimit(limit))
}, actions.failed)


