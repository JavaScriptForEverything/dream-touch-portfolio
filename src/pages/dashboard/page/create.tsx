import { Button, Input, Select, Textarea } from '@/components/ui'
import { formFields } from '@/data/formData/dashboard/page/create'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { CloudUploadIcon, LoadingIcon } from '@/icons'
import { isFormValid, readAsDataURL } from '@/lib/utils'
import { useEffect, useState } from 'react'

import * as layoutReducer from '@/store/layoutReducer'
import * as pageReducer from '@/store/pageReducer'



type FormFields = {
  slug: string
  slogan: string
  sloganSummary: string
  coverPhotoDataUrl: string
  coverPhotoAlt: string
  coverPhotoTitle: string
}

const initialFields = {
  slug: '',
  slogan: '',
  sloganSummary: '',
  coverPhotoDataUrl: '',
  // coverPhotoAlt: '',
  // coverPhotoTitle: '',
}


export const CreatePage = () => {
	const dispatch = useAppDispatch()
	const { error, status, message, loading } = useAppSelector( state => state.page)

	const [ fields, setFields] = useState<Partial<FormFields>>(initialFields)
	const [ fieldsError, setFieldsError] = useState<Partial<FormFields>>(initialFields)


	useEffect(() => {
		if(error) {
			dispatch(layoutReducer.setIsOpenSnackbar(true, {
				severity: 'error',
				// title: 'Error',
				message: error,
				autoClose: false,
				// closeTime: 999999999,
			}))
		}
	},[error])

	useEffect(() => {
		if(status === 'created') {
			dispatch(layoutReducer.setIsOpenSnackbar(true, {
				severity: 'success',
				// title: 'Login',
				message,
				autoClose: false,
			}))
		}
	},[status, message])

	const changeHandler = (name: string) => async (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { files, value, multiple } = evt.target as HTMLInputElement

    if (!files || files.length === 0) return setFields({ ...fields, [name]: value })

    const images = await Promise.all(Array.from(files).map(file => readAsDataURL(file)))
    setFields({ ...fields, [name]: multiple ? images : images[0] })
	}




	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return

    const data = {
      ...fields,
			coverPhoto: {
				dataUrl: fields.coverPhotoDataUrl,
				dataAlt: fields.coverPhotoAlt,
				dataTitle: fields.coverPhotoTitle,
			}
    }

		// console.log(data)
		// redirect('/dashboard')
		dispatch(pageReducer.AddPage(data))
	}


	return (
		<div className='shadow'>
			<div className=" p-2 bg-slate-100 text-orange-700 font-bold text-2xl ">
				<h2>Create New Page</h2>
			</div>

			<div className=" px-2 py-4">
				<form noValidate onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
					{Object.entries(formFields).map(([key, field]) => (
						<div 
							key={key}
							// className='mb-4' 
							// className='mb-4 col-span-3' 
							className={`mb-4 ${field.type === 'textarea' ? 'col-span-1 md:col-span-3' : '' }`}
						>
							<label className={`block mb-1 text-sm font-bold text-gray-700
								${field.required ? " after:content-['*'] after:text-red-500 after:ml-1 " : ' '}
							`}>
								{field.label}
							</label>

							{field.type === 'textarea' ? (
								<Textarea 
									// type={type}
									rows={field.rows}
									placeholder={field.placeholder}
									value={fields[key as keyof FormFields]}
									onChange={changeHandler(key)}
								/>
							) : field.type === 'select' ? (
								<Select
									options={field.options}
									value={fields[key as keyof FormFields] || ''}
									onChange={changeHandler(key)}
								/>
							) : field.type === 'file' ? (
								<Input
									type={field.type}
									placeholder={field.placeholder}
									onChange={changeHandler(key)}
									multiple={field.multiple}
									accept={field.accept}
									
									// value={fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
								/>
							) : (
								<Input
									type={field.type}
									placeholder={field.placeholder}
									value={fields[key as keyof FormFields]}
									onChange={changeHandler(key)}
								/>
							)
							}

							{fieldsError[key as keyof FormFields] && (
								<span className='text-red-500'>{fieldsError[key as keyof FormFields]}</span>
							)}
							{fieldsError[key as keyof FormFields] && (
								<span className='text-red-500'>{field.helperText}</span>
							)}
						</div>
					))}


          <div className=" col-span-3 flex justify-end ">
						<Button disabled={loading} type='submit' className=''>
							{loading ? (
								<LoadingIcon />
							) : (
								<div className='flex gap-4 items-center'>
									<CloudUploadIcon className='size-6' /> 
									<span> Create </span>
								</div>
							)}
						</Button>
          </div>

				</form>
			</div>

		</div>
	)
}
