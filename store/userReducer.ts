import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/store'
import type { InitialState, LoginData, SetUsersPayload } from '@/types/user'
import type { UserDocument } from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '@/lib/utils'
import { ORIGIN } from '@/lib/config'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	user: null ,
	status: 'none',
	users: [],
	userId: '',
	// isAuthenticated: !!localStorage.getItem('authToken'),
	// authToken: localStorage.getItem('authToken') || '',
	isAuthenticated: false,
	authToken: '',

	total: 0,
	count: 0,
  limit: 10, 			// Default page size
  totalPages: 0, 	

	// isRemembered: !!localStorage.getItem('login'),
	// fields: localStorage.getItem('login') 
	// 	? JSON.parse( JSON.parse(JSON.stringify(localStorage.getItem('login'))) )
	// 	: {
	// 		email: '',
	// 		password: ''
	// 	},
	isRemembered: false,
	fields: {
		email: '',
		password: ''
	},
}

type AuthenticatePayload = {
	isAuthenticated: boolean
	authToken: string | null
	userId?: string | null
}

export const { reducer, actions } = createSlice({
  name: 'user',
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

    setUsers: (state: InitialState, action: PayloadAction<SetUsersPayload>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			// users: [ ...action.payload.users ],
			users: [ ...action.payload.users.filter( user => user.id !== state.user?.id) ], 		// filter logedInUser
			total: action.payload.total,
			count: action.payload.count,
			totalPages: Math.ceil(action.payload.total / (state.limit || 10)) 
    }),
	
    addUser: (state: InitialState, action: PayloadAction<UserDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'created',
			users: [ ...state.users, action.payload ]
    }),
    authenticate: (state: InitialState, action: PayloadAction<AuthenticatePayload >): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			status: 'none',
			...action.payload
    }),
    setUser: (state: InitialState, action: PayloadAction<UserDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			user: action.payload
    }),
    removeUser: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',

			status: 'deleted',
			users: state.users.filter(user => user.id !== action.payload)
    }),
    removeUsers: (state: InitialState, action: PayloadAction<{ userIds: string[], message: string }>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: action.payload.message,

			status: 'deleted',
			users: state.users.filter(user => !action.payload.userIds.includes(user.id))
    }),
    logout: (state: InitialState ): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			user: null,
			isAuthenticated: false,
			userId: null
    }),
    setIsRemembered: (state: InitialState, action: PayloadAction<boolean> ): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			isRemembered: action.payload,
    }),
  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.clearError())
}




export const loginUser = (fields: LoginData) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(fields),
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	// if(res.status === 401) dispatch(actions.failed(message))
	if(status !== 'success') dispatch(actions.failed(message))


	else {
		dispatch(actions.updateSuccessMessage(message))

		const responseData: AuthenticatePayload = {
			userId: data.userId,
			authToken: data.authToken,
			isAuthenticated: true
		} 

		if(data.authToken) localStorage.setItem('authToken', data.authToken)
		dispatch(actions.authenticate(responseData))
	}

}, actions.failed)


export const logoutHandler = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/auth/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	await res.json()
	localStorage.removeItem('authToken')
	dispatch(actions.logout())

}, actions.failed)

export const getLogedInUser = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users/me`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { status, message, data: user } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(message))

	// dispatch(actions.setUser(user))
	if(user.role === 'admin') dispatch(actions.setUser(user))
	else dispatch(actions.logout())


}, actions.failed)

export const getAllUsers = () => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const limit = getState().user.limit

	const res = await fetch(`${ORIGIN}/api/users?_sort=role&_limit=${limit}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { status, message, data, count, total } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(message))

	dispatch(actions.setUsers({ users: data, count, total }))
}, actions.failed)



export const createUserBy = (fields: any) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		body: JSON.stringify(fields),
		credentials: 'include'
	})

	const { status, message, data: user } = await res.json()
	if(status !== 'success') dispatch(actions.failed(message))
	else dispatch(actions.addUser(user))
}, actions.failed)


export const searchUserBy = (search: string, fields: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	// dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users?_sort=-createdAt&_limit=10&_search=${search},${fields.join(',')}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { count, total, data } = await res.json()
	// if(status !=='success') dispatch(actions.failed(message))
	dispatch(actions.setUsers({ users: data, count, total }))

}, actions.failed)


export const paginate = (page: number) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	// dispatch(actions.request())

	const limit = getState().user.limit
	const res = await fetch(`${ORIGIN}/api/users?_sort=-createdAt&_page=${page}&_limit=${limit}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { count, total, data } = await res.json()
	// if(status !=='success') dispatch(actions.failed(message))
	dispatch(actions.setUsers({ users: data, count, total }))
}, actions.failed)


export const setLimit = (limit: number) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {
	dispatch(actions.setLimit(limit))
}, actions.failed)





// // In your userReducer or userActions file
// export const deleteUser = (userId: string) => async (dispatch) => {
//   try {
//     await api.delete(`/users/${userId}`); // Replace with your API call
//     dispatch({ type: "DELETE_USER", payload: userId });
//   } catch (error) {
//     console.error("Failed to delete user:", error);
//   }
// };

// export const deleteUsers = (userIds: string[]) => async (dispatch) => {
//   try {
//     await api.post("/users/delete-many", { userIds }); // Replace with your API call
//     dispatch({ type: "DELETE_USERS", payload: userIds });
//   } catch (error) {
//     console.error("Failed to delete users:", error);
//   }
// };


export const deleteUserById = (userId: string) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users/${userId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		credentials: 'include'
	})

	const { status, message } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(message))

	dispatch(actions.removeUser(userId))
}, actions.failed)


export const bulkUserDeleteByIds = (userIds: string[]) => catchAsyncDispatch( async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users/bulk-delete`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${getState().user.authToken}`
		},
		body: JSON.stringify({ userIds }),
		credentials: 'include'
	})

	const { status, message } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(message))

	dispatch(actions.removeUsers({
		userIds,
		message
	}))
}, actions.failed)


export const handleIsRemembered = (isRemembered: boolean, fields: any) => catchAsyncDispatch( async (dispatch: AppDispatch ): Promise<void> => {

	dispatch(actions.setIsRemembered(isRemembered))

	if(isRemembered) {
		localStorage.setItem('login', JSON.stringify(fields))
	} else {
		localStorage.removeItem('login')
	}

}, actions.failed)

export function registerUser(data: { name: string; email: string; password: string; confirmPassword: string; avatar: string }): any {
	throw new Error('Function not implemented.')
}
