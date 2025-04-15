'use client'
import type { FormFields } from '@/types/user'
import type { TempObj } from '@/types/common'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Button, FileInput, Alert, TextField } from '../../../components/mui'
import { LoadingIcon } from '../../../icons'
import { isFormValid, readAsDataURL } from '@/lib/utils'
import * as userReducer from '@/store/userReducer'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useRouter } from 'next/navigation'


const formFields = {
	// fname: { label: 'First Name', placeholder: 'Riajul', type: 'text', helperText: '' },
	// lname: { label: 'Last Name', placeholder: 'Islam', type: 'text', helperText: '' },
	name: { label: 'Your Name', placeholder: 'Riajul Islam', type: 'text', helperText: '' },
	email: { label: 'Your Email', placeholder: 'abc@gmail.com', type: 'email', helperText: '' },
	password: { label: 'Your Password', placeholder: '********', type: 'password', helperText: '' },
	confirmPassword: { label: 'Confirm Password', placeholder: '********', type: 'password', helperText: '' },
	avatar: { label: '', placeholder: '', type: 'file', helperText: '' },
}


// // Method-1: Set wrong fields, then add fields
// const initialFields = {} as FormFields 								// set miss value
// Object.keys(formFields).forEach(field => { 						// then set fields
// 	initialFields[field as keyof FormFields] = ''
// })


// Method-2: Set fields, then cast as desigred object: (better than method-1)
const initialFields = Object.keys(formFields).reduce((acc, key) => {
  acc[key as keyof FormFields] = '' 
  return acc;
}, {} as FormFields)
 

export const RegisterForm = () => {
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<FormFields>(initialFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFields)
	const [ imageDefaultValue ] = useState('/images/user/default.jpg')
	const { loading, error, message } = useAppSelector(state => state.user)
	const fileInputRef = useRef<HTMLInputElement|null>(null)
	const navigation = useRouter()

	// to solve 'state always one step behind' problem
	useEffect(() => {
		isFormValid(fields, setFieldsError)  			// Step-1: used error state, so don't put same value as dependencies: which create infinite loop
	},[fields]) 																// Step-2: use different field, to re-render without creating infinite loop

	useEffect(() => {
		
		clearForm()
		setTimeout(() => {
			if(message) navigation.push('/login')
		}, 2000)

	},[navigation, message])


	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}
	const fileChangeHandler = async (evt: React.ChangeEvent<HTMLInputElement>) => {
		const file = evt.target.files?.[0] 
		if(!file) return

		const avatar = await readAsDataURL(file)
		setFields({ ...fields, avatar })
	}
	const deleteAvatarHandler = () => {
		setFields({ ...fields, avatar: imageDefaultValue})
		if(fileInputRef.current) fileInputRef.current.value = ''
	}

	const clearForm = () => {
		setFields(initialFields)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return

		// const data = { ...fields, name: `${fields.fname} ${fields.lname}` }
		dispatch(userReducer.registerUser(fields))
	}

	const closeHandler = () => {
		dispatch(userReducer.clearError())
	}


	// if(error) setTimeout(() => {
	// 	closeHandler()
	// }, 5000)
	// if(message) setTimeout(() => {
	// 	closeHandler()
	// }, 5000)




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

				{/* {Object.entries(formFields).map(([key, {label, type, placeholder, helperText }]) => (
					<TextField key={key}
						label= {label}
						type={type}
						placeholder={placeholder}
            value={type === 'file' ? '' : fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
						onChange={changeHandler(key)}
						helperText={helperText}
						required={true}
					/>
				))}
				{Object.entries(formFields).map(([key, obj]) => (
					<TextField key={key}
						{...obj} 																															// => set label + type + placeholder + helperText
            value={obj.type === 'file' ? '' : fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
						onChange={changeHandler(key)}
						required={true}
					/>
				))} */}


					{/* <div className='flex gap-3'>
						<TextField
							label='First Name'
							placeholder= 'First Name'
							type='text'
							value={fields.name as keyof FormFields}
							onChange={changeHandler('fname')}
							required={true}
							autoFocus={true}
							helperText={fieldsError.fname}
						/>
						
						<TextField
							label= 'Last Name'
							placeholder= 'Last Name'
							type='text'
							value={fields.lname as keyof FormFields}
							onChange={changeHandler('lname')}
							required={true}
							helperText={fieldsError.lname}
						/>
					</div> */}

					<TextField
						label= 'Your Name'
						placeholder= 'Riajul Islam'
						type= 'text'
						value={fields.name as keyof FormFields}
						onChange={changeHandler('name')}
						required={true}
						helperText={fieldsError.name}
					/>
					<TextField
						label= 'Your Email'
						placeholder= 'abc@gmail.com'
						type= 'email'
						value={fields.email as keyof FormFields}
						onChange={changeHandler('email')}
						required={true}
						helperText={fieldsError.email}
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
					<TextField
						label='Confirm Password'
						placeholder= 're-type your password again'
						type='password'
						value={fields.confirmPassword as keyof FormFields}
						onChange={changeHandler('confirmPassword')}
						required={true}
						helperText={fieldsError.confirmPassword}
					/>

					<div className='border border-slate-50 flex gap-3 items-center'>
						<div onClick={deleteAvatarHandler} className='shrink-0 overflow-hidden cursor-pointer bg-slate-300 w-16 h-16 p-[1px] rounded-full shadow relative'>
							<Image  
								src={fields.avatar || imageDefaultValue}
								width={200}
								height={200}
								alt=''
								className='rounded-full object-cover peer/avatar'
							/>
							<label className='
								absolute bottom-1 text-xs bg-white px-2 ml-[50%]
								-translate-x-[50%] rounded cursor-pointer
								opacity-0 hover:opacity-100 peer-hover/avatar:opacity-100 transition-opacity duration-100
								'
							>remove</label> 
						</div>

						<FileInput 
							ref={fileInputRef} 
							onChange={fileChangeHandler} 
							helperText={fieldsError.avatar}
							// disabled={true} 
						/>
					</div>


					<div className='mt-1 '>
						<Button 
							type='submit' 
							disabled={loading}
							color='primary'
							fullWidth
							className='mt-1'
						>
							<span className=''> {loading ? <LoadingIcon /> : 'Register'} </span> 
						</Button>
					</div>
		</form>
	)
}
