import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/store'
import type { ContactDocument, InitialState, SetContactPayload } from '@/types/contact'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
import { ORIGIN } from '@/lib/config'
import { apiRequest } from '@/lib/api'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',

	status: 'none',
	contact: null ,
	contacts: [],

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0, 	

}


export const { reducer, actions } = createSlice({
  name: 'contact',
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


    setContacts: (state: InitialState, action: PayloadAction<SetContactPayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			// contacts: [ ...action.payload.contacts ],
			contacts: [ ...action.payload.contacts.filter( contact => contact.id !== state.contact?.id) ], 		// filter logedInUser
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
    setContact: (state: InitialState, action: PayloadAction<ContactDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			contact: action.payload
    }),
    addContact: (state: InitialState, action: PayloadAction<ContactDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'created',
			contacts: [ ...state.contacts, action.payload ]
    }),
    removeContact: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			status: 'deleted',
			contacts: state.contacts.filter(contact => contact.id !== action.payload)
    }),
    removeContacts: (state: InitialState, action: PayloadAction<{ userIds: string[], message: string }>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: action.payload.message,

			status: 'deleted',
			contacts: state.contacts.filter(contact => !action.payload.userIds.includes(contact.id))
    }),
  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}






// export const getContacts = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const limit = getState().contact.limit

// 	const res = await fetch(`${ORIGIN}/api/contacts?_sort=role&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})
// 	const { status, message, data, count, total } = await res.json()

// }, actions.failed)

export const getContacts = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const limit = getState().contact.limit

	const { status, message, data, count, total } = await apiRequest<ContactDocument[]>(`/api/contacts?_sort=role&_limit=${limit}`)
	if(status !=='success') throw dispatch(actions.failed(message))

	dispatch(actions.setContacts({ contacts: data, count, total }))

}, actions.failed)



export const createContact = (fields: any) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const { status, message, data } = await apiRequest<ContactDocument>('/api/contacts', 'POST', fields )
	if(status !=='success') throw dispatch(actions.failed(message))
	dispatch(actions.addContact(data))

}, actions.failed)


// export const searchUserBy = (search: string, fields: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/contacts?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setUsers({ contacts: data, count, total }))

// }, actions.failed)


// export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	// dispatch(actions.request())

// 	const limit = getState().user.limit
// 	const res = await fetch(`${ORIGIN}/api/contacts?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${getState().user.authToken}`
// 		},
// 		credentials: 'include'
// 	})

// 	const { count, total, data } = await res.json()
// 	// if(status !=='success') dispatch(actions.failed(message))
// 	dispatch(actions.setUsers({ contacts: data, count, total }))
// }, actions.failed)


// export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
// 	dispatch(actions.setLimit(limit))
// }, actions.failed)





// // In your userReducer or userActions file
// export const deleteUser = (userId: string) => async (dispatch) => {
//   try {
//     await api.delete(`/contacts/${userId}`); // Replace with your API call
//     dispatch({ type: "DELETE_USER", payload: userId });
//   } catch (error) {
//     console.error("Failed to delete user:", error);
//   }
// };

// export const deleteUsers = (userIds: string[]) => async (dispatch) => {
//   try {
//     await api.post("/contacts/delete-many", { userIds }); // Replace with your API call
//     dispatch({ type: "DELETE_USERS", payload: userIds });
//   } catch (error) {
//     console.error("Failed to delete contacts:", error);
//   }
// };


// export const deleteUserById = (userId: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/contacts/${userId}`, {
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

// 	const res = await fetch(`${ORIGIN}/api/contacts/bulk-delete`, {
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



