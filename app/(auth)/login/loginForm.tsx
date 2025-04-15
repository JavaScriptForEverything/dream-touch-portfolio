'use client'
import type { FormFields } from '@/types/user'
import type { TempObj } from '@/types/common'
import { useState, useEffect } from 'react'
import { Button, Alert, TextField } from '../../../components/mui'
import { LoadingIcon } from '@/icons'
import { isFormValid } from '@/lib/utils'
import * as userReducer from '@/store/userReducer'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useRouter } from 'next/navigation'


const formFields = {
	email: { label: 'Your Email', placeholder: 'abc@gmail.com', type: 'email', helperText: '' },
	password: { label: 'Your Password', placeholder: '********', type: 'password', helperText: '' },
}




// Method-2: Set fields, then cast as desigred object: (better than method-1)
const initialFields = Object.keys(formFields).reduce((acc, key) => {
  acc[key as keyof FormFields] = '' 
  return acc;
}, {} as FormFields)
 

export const LoginForm = () => {
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<FormFields>(initialFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFields)
	const { loading, error, message } = useAppSelector(state => state.user)
	const navigation = useRouter()

	// to solve 'state always one step behind' problem
	useEffect(() => {
		isFormValid(fields, setFieldsError)  			// Step-1: used error state, so don't put same value as dependencies: which create infinite loop
	},[fields]) 																// Step-2: use different field, to re-render without creating infinite loop

	useEffect(() => {
		
		clearForm()
		setTimeout(() => {
			if(message) navigation.push('/')
		}, 2000)

	},[navigation, message])


	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}

	const clearForm = () => {
		setFields(initialFields)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return console.log(fieldsError)
		dispatch(userReducer.loginUser(fields))
	}

	const closeHandler = () => {
		dispatch(userReducer.clearError())
	}




	return (
		<form className='flex flex-col gap-2 mb-2' onSubmit={submitHandler} >

			{error &&  (<Alert 
				severity='error'
				message={error}
				showSeverity={true}
				action={true}
				onClose={closeHandler}
			/>)}

			{message && ( <Alert 
				severity='success'
				message={message}
				showSeverity={true}
				action={true}
				onClose={closeHandler}
			/>)}  

			{/* {Object.entries(formFields).map(([key, obj]) => (
				<TextField key={key}
					{...obj} 																															// => set label + type + placeholder + helperText
					value={obj.type === 'file' ? '' : fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
					onChange={changeHandler(key)}
					required={true}
					helperText={fieldsError[key]}
				/>
			))}  */}


			<TextField
				label= 'Your Email'
				placeholder= 'abc@gmail.com'
				type= 'email'
				value={fields.email as keyof FormFields}
				onChange={changeHandler('email')}
				required={true}
				helperText={fieldsError.email}
				autoFocus={true}
			/>

			<TextField
				label= 'Your Password'
				placeholder='yourPa$$w0rd'
				type= 'password'
				value={fields.password as keyof FormFields}
				onChange={changeHandler('password')}
				required={true}
				helperText={fieldsError.password}
			/>

			<Button 
				type='submit' 
				disabled={loading}
				color='primary'
				fullWidth
				className='mt-1'
			>
				<span className=''> {loading ? <LoadingIcon /> : 'Login'} </span> 
			</Button>

		</form>

	)
}
