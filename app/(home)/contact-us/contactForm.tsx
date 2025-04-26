'use client'
import { Button, TextField } from '@/components/mui'
import { LoadingIcon } from '@/icons/loadingIcon'
import { useState } from 'react'

const formFields = {
	name: { label: 'Your Name', placeholder: 'Riajul Islam', type: 'text', helperText: '', required: true, autoFocus: true },
	phone: { label: 'Your Phone No', placeholder: '018xxxxxxxx', type: 'text', helperText: '' },
	email: { label: 'Your Email', placeholder: 'abc@gmail.com', type: 'email', helperText: '', required: true },
	subject: { label: 'Your Subject', placeholder: 'your subject goes here', type: 'text', helperText: '', required: true },
	message: { label: 'Your Message', placeholder: 'your message goes here...', type: 'text', helperText: '', required: true },
}


const ContactForm = () => {
	const [ loading, setLoading ] = useState(false)
	const [ fields, setFields ] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	})
	const [ fieldsError, setFieldsError ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({
			...fields,
			[name]: evt.target.value
		})
		// setFieldsError({
		// 	...fieldsError,
		// 	[name]: 'alsdfa'
		// })
	}

	const submitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		setLoading(true)

		// const res = await fetch('/api/contact', {
		// 	method: 'POST',
		// 	body: JSON.stringify(fields)
		// })
		// const data = await res.json()
		console.log(fields)
		
		setTimeout(() => {
			setLoading(false)
		}, 1000);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="flex flex-col gap-4">

				{	Object.entries(formFields).map(([key, field]) => (
						<TextField key={key} {...field}
							onChange={changeHandler(key)}
							value={fields[key as keyof typeof fields]}
						/>
				))}

			</div>

			<div className='mt-6 '>
				<Button 
					type='submit' 
					disabled={loading}
					color='error'
					fullWidth
					className='mt-1'
				>
					<span className='flex justify-center'> {loading ? <LoadingIcon /> : 'Send Message'} </span> 
				</Button>
			</div>


		</form>
	)
}
export default ContactForm
