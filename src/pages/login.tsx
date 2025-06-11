import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Input } from '@/components/ui'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { LoadingIcon, LogoutIcon } from '@/icons'
import { isFormValid } from '@/lib/utils'
import { useState, useEffect } from 'react'
import * as layoutReducer from '@/store/layoutReducer'
import * as userReducer from '@/store/userReducer'
import { siteInfo } from '@/data/site'

const formFields = {
	email: { label: 'Your Email', placeholder: 'your@gmail.com', type: 'email', helperText: '' },
	password: { label: 'Your Password', placeholder: '********', type: 'password', helperText: '' },
}

type FormFields = {
  email: string
  password: string
	// isRemembered: boolean
}

const initialFields = {
  email: '',
  password: '',
}

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { error, loading, status, message, isAuthenticated } = useAppSelector( state => state.user)

	const [ fields, setFields] = useState<FormFields>(initialFields)
	const [ fieldsError, setFieldsError] = useState<FormFields>(initialFields)
	// const [ isChecked, setIsChecked ] = useState(isRemembered)



	const location = useLocation()
	console.log(location.search)



	useEffect(() => {
		if(isAuthenticated) navigate('/dashboard')
	},[isAuthenticated])


	useEffect(() => {
		if(error) {
			dispatch(layoutReducer.setIsOpenSnackbar(true, {
				severity: 'error',
				title: 'Error',
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
				title: 'Login',
				message: 'your Login successfull!!!',
				autoClose: false,
			}))
		}
	},[status, message])

	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}


	// const switchChangeHandler = (checked: boolean) => {
	// 	setIsChecked(checked)
	// }


	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return


    const data = {
      ...fields,
			// isRemembered: isChecked
    }

		dispatch(userReducer.loginUser(data))
		console.log(data)
	}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 w-full ">
      <div className=" flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex-col md:flex-row">

        {/* Left Panel */}
        <div className="hidden md:block relative md:w-1/2 w-full p-8 text-white bg-[url(/assets/login-bg.jpg)] bg-no-repeat ">
          <div className="text-black mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Simplify Management <br /> with our dashboard
            </h1>
            <p className="text-base">Login with your personal info.</p>
          </div>

          <div className="px-8 ">
            <img
              src="/assets/login-person.png"
              alt="Login Visual"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 w-full p-8  flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{siteInfo.companyName}</h1>
            <p className="text-gray-700 mt-1">Nice to see you again!</p>
          </div>

          <form onSubmit={submitHandler} className="w-full max-w-md">

						{Object.entries(formFields).map(([key, {label, type, placeholder, helperText }]) => (
							<div className="mb-4" key={key}>
								<label className="block mb-1 text-sm font-bold text-gray-700">
									{label}
								</label>
								<Input
									type={type}
									placeholder={placeholder}
									value={fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
									onChange={changeHandler(key)}
								/>
								{fieldsError[key as keyof FormFields] && (
									<span className='text-red-500'>{fieldsError[key as keyof FormFields]}</span>
								)}
								{fieldsError[key as keyof FormFields] && (
									<span className='text-red-500'>{helperText}</span>
								)}
							</div>
						))}

            {/* <div className="mb-6 flex items-center gap-2">
							<Switch id='remember' checked={isChecked} onChange={switchChangeHandler} />
              <label htmlFor="remember" className="cursor-pointer text-sm text-gray-700">
                Remember me
              </label>
            </div> */}

						<Button disabled={loading} type='submit' className='w-full'>
							{loading ? (
								<LoadingIcon />
							) : (
								<>
									Login <LogoutIcon className='ml-1 ' />
								</>
							)}
						</Button>

          </form>

					<div className="mt-6 text-slate-800">

						<h2 className=' text-center'>Yaven Account? 
								<Link to='/register' className='text-orange-500'> Register </Link>
							here</h2>
					</div>
        </div>
      </div>
    </div>
  )
}

export default Login

