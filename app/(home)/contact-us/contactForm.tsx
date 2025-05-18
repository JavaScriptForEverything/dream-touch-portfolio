'use client'
import { useEffect, useState } from 'react'
import { Button, TextField } from '@/components/mui'
import { LoadingIcon } from '@/icons/loadingIcon'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import * as layoutReducer from '@/store/layoutReducer'
import * as contactReducer from '@/store/contactReducer'
import { actionApiRequest } from '@/actions/api'
import { isFormValid } from '@/lib/utils'

// interface FormField {
// 	label: string
// 	placeholder: string
// 	type: 'text' | 'email' | 'number' | 'checkbox' | 'textarea' | 'select' | 'radio' | 'file' | 'password'
// 	helperText: string
// 	required?: boolean
// 	autoFocus?: boolean
// }

// const formFields:Record<string, FormField> = {
const formFields = {
	name: { label: 'Your Name', placeholder: 'Riajul Islam', type: 'text', helperText: '', required: true, autoFocus: true, multiline: false, rows: undefined },
	phone: { label: 'Your Phone No', placeholder: '018xxxxxxxx', type: 'text', helperText: '', multiline: false, rows: undefined },
	email: { label: 'Your Email', placeholder: 'abc@gmail.com', type: 'email', helperText: '', required: true, multiline: false, rows: undefined },
	subject: { label: 'Your Subject', placeholder: 'your subject goes here', type: 'text', helperText: '', required: true, multiline: false, rows: undefined },
	message: { label: 'Your Message', placeholder: 'your message goes here...', type: 'text', helperText: '', required: true, multiline: true, rows: 3 },
}

interface InitialFieldsType {
	name: string
	phone?: string
	email: string
	subject: string
	message: string
}

// const initialFields = Object.keys(formFields).reduce((acc, key) => ({ ...acc, [key]: '' }), {} as InitialFieldsType) 
const initialFields: InitialFieldsType = {
	name: '',
	// phone: '',
	email: '',
	subject: '',
	message: ''
}

interface Props {
	isAutoFocus?: boolean
}

const ContactForm = ({ isAutoFocus = false }: Props) => {
	const dispatch = useAppDispatch()
	const { status, loading, error, contacts } = useAppSelector( state => state.contact )

	const [ fields, setFields ] = useState<InitialFieldsType>(initialFields)
	const [ fieldsError, setFieldsError ] = useState(initialFields)
	// const [ fieldsError, setFieldsError ] = useState({
	// 	name: '',
	// 	// phone: '',
	// 	email: '',
	// 	subject: '',
	// 	message: ''
	// })

	useEffect(() => {
		if(status === 'created') {

			dispatch( layoutReducer.setIsOpenSnackbar( true, {
				severity: 'success',
				message: 'your message is sent',
				autoClose: true,
			}))

			dispatch(contactReducer.clearError())
		}

		setFields(initialFields) 			// reset form
	}, [dispatch, status])

	useEffect(() => {
		if(error) dispatch( layoutReducer.setIsOpenSnackbar( true, {
			severity: 'error',
			message: error 
		}))
	}, [dispatch, error])



	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({
			...fields,
			[name]: evt.target.value
		})
	}

	const submitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return console.log(fieldsError)

		dispatch(contactReducer.createContact( fields ))
	}

	return (
		<form onSubmit={submitHandler}>

			<div className="flex flex-col gap-4">

				{	Object.entries(formFields).map(([key, field], index) => (
						<TextField key={key} 
							{...field}
							autoFocus={index === 0 && isAutoFocus}
							onChange={changeHandler(key)}
							value={fields[key as keyof typeof fields] || ''}
							helperText={fieldsError[key as keyof typeof fieldsError]}
						/>
				))}

			</div>

			<div className='mt-6 '>
				<Button 
					type='submit' 
					disabled={loading}
					color='error'
					fullWidth
					className='mt-1 cursor-pointer'
				>
					<span className='flex justify-center'> {loading ? <LoadingIcon /> : 'Send Message'} </span> 
				</Button>
			</div>


		</form>
	)
}
export default ContactForm
