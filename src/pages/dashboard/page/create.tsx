import { Button, Input, Select, Textarea } from '@/components/ui'
import { formFields } from '@/data/formData/dashboard/page/create'
import { CloudUploadIcon, LoadingIcon } from '@/icons'
import { isFormValid, readAsDataURL } from '@/lib/utils'
import { useState } from 'react'


// import { Link, useNavigate } from 'react-router-dom'
// import { useAppDispatch, useAppSelector } from '@/hooks/redux'
// import * as layoutReducer from '@/store/layoutReducer'
// import * as userReducer from '@/store/userReducer'
// import { siteInfo } from '@/data/site'



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
  coverPhotoAlt: '',
  coverPhotoTitle: '',
}


export const CreatePage = () => {
	// const { error, loading, status, message, isAuthenticated } = useAppSelector( state => state.user)
	const loading = false

	const [ fields, setFields] = useState<FormFields>(initialFields)
	const [ fieldsError, setFieldsError] = useState<FormFields>(initialFields)


	// const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
	// 	setFields({ ...fields, [name]: evt.target.value })
	// }

	const changeHandler = (name: string) => async (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { files, value, multiple } = evt.target as HTMLInputElement

    if (!files || files.length === 0) return setFields({ ...fields, [name]: value })

    const images = await Promise.all(Array.from(files).map(file => readAsDataURL(file)))
    setFields({ ...fields, [name]: multiple ? images : images[0] })
	}




	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		// if(!isFormValid(fields, setFieldsError)) return


    const data = {
      ...fields,
			coverPhtoto: {
				dataUrl: fields.coverPhotoDataUrl,
				dataAlt: fields.coverPhotoAlt,
				dataTitle: fields.coverPhotoTitle,
			}
    }

		console.log(data)
		// redirect('/dashboard')
		// dispatch(userReducer.registerUser(data))
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
							className={`mb-4 ${field.type === 'textarea' ?  'col-span-1 md:col-span-3' : '' }`}
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
									value={fields[key as keyof FormFields]}
									onChange={changeHandler(key)}
								/>
							) : field.type === 'file' ? (
								<Input
									type={field.type}
									placeholder={field.placeholder}
									onChange={changeHandler(key)}
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
