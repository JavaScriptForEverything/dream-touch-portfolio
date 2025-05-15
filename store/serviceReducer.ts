import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/store'
import type { InitialState, SetServicePayload } from '@/types/service'
import type { ServiceDocument } from '@/types/service'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
import { ORIGIN } from '@/lib/config'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	status: 'none',

	service: null ,
	services: [],

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0, 	

}


export const { reducer, actions } = createSlice({
  name: 'service',
  initialState,
  reducers: {
		request: (state: InitialState): InitialState => ({
			...state,
			loading: true,
			error: '',
			message: '',
			status: 'none',
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


    updateSuccessMessage: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			status: 'updated',
			message: action.payload
    }),

    setServices: (state: InitialState, action: PayloadAction<SetServicePayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			// services: [ ...action.payload.services ],
			services: [ ...action.payload.services.filter( service => service.id !== state.service?.id) ], 		// filter logedInUser
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
	
    addService: (state: InitialState, action: PayloadAction<ServiceDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'created',
			services: [ ...state.services, action.payload ]
    }),
    setService: (state: InitialState, action: PayloadAction<ServiceDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			service: action.payload
    }),
    removeService: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			status: 'deleted',
			services: state.services.filter(service => service.id !== action.payload)
    }),
    removeServices: (state: InitialState, action: PayloadAction<{ userIds: string[], message: string }>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: action.payload.message,

			status: 'deleted',
			services: state.services.filter(service => !action.payload.userIds.includes(service.id))
    }),
  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}






export const getServices = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	// const limit = getState().user.limit
	const limit = 20

	const res = await fetch(`${ORIGIN}/api/services?_sort=createdAt&_limit=${limit}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { status, error: errorMessage, data, count, total } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(errorMessage))

	dispatch(actions.setServices({ services: data, count, total }))
}, actions.failed)



// export const createUserBy = (fields: any) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/services`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		body: JSON.stringify(fields),
// 		credentials: 'include'
// 	})

// 	const { status, message, data: user } = await res.json()
// 	if(status !== 'success') dispatch(actions.failed(message))
// 	else dispatch(actions.addUser(user))
// }, actions.failed)


// export const searchUserBy = (search: string, fields: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/services?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setUsers({ services: data, count, total }))

// }, actions.failed)


// export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const limit = getState().user.limit
// 	const res = await fetch(`${ORIGIN}/api/services?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setServices({ services: data, count, total }))
// }, actions.failed)


// export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
// 	dispatch(actions.setLimit(limit))
// }, actions.failed)





// // In your userReducer or userActions file
// export const deleteUser = (userId: string) => async (dispatch) => {
//   try {
//     await api.delete(`/services/${userId}`); // Replace with your API call
//     dispatch({ type: "DELETE_USER", payload: userId });
//   } catch (error) {
//     console.error("Failed to delete user:", error);
//   }
// };

// export const deleteUsers = (userIds: string[]) => async (dispatch) => {
//   try {
//     await api.post("/services/delete-many", { userIds }); // Replace with your API call
//     dispatch({ type: "DELETE_USERS", payload: userIds });
//   } catch (error) {
//     console.error("Failed to delete services:", error);
//   }
// };


// export const deleteUserById = (userId: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/services/${userId}`, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message } = await res.json()
// 	if(status !=='success') throw dispatch(actions.failed(message))

// 	dispatch(actions.removeUser(userId))
// }, actions.failed)


// export const bulkUserDeleteByIds = (userIds: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/services/bulk-delete`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		body: JSON.stringify({ userIds }),
// 		credentials: 'include'
// 	})

// 	const { status, message } = await res.json()
// 	if(status !=='success') throw dispatch(actions.failed(message))

// 	dispatch(actions.removeUsers({
// 		userIds,
// 		message
// 	}))
// }, actions.failed)



