import { Switch, Button, Input } from '@/components/ui'
import { LoadingIcon, LogoutIcon } from '@/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
	const navigate = useNavigate()
	const [ isChecked, setIsChecked ] = useState(false)
	const [ loading, setLoading ] = useState(false)

	const switchChangeHandler = (checked: boolean) => {
		setIsChecked(checked)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		const formData = new FormData(evt.currentTarget)
		const fields = Object.fromEntries(formData)

		console.log(fields)
		setLoading(true)

		setTimeout(() => {
			navigate('/dashboard')
			setLoading(false)
		}, 1000)
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900"> Dream Touch Arciture Ltd.  </h1>
            <p className="text-gray-700 mt-1">Nice to see you again!</p>
          </div>

          <form onSubmit={submitHandler} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block mb-1 text-sm font-bold text-gray-700">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-bold text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
								<button
									type="button"
									className="absolute right-3 top-2.5 text-gray-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20"
										width="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
										<circle cx="12" cy="12" r="3"></circle>
									</svg>
								</button>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-2">

							<Switch 
								checked={isChecked}
								onChange={switchChangeHandler}
							/>

              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

							<Button disabled={loading} type='submit' className='w-full'>
								{loading ? (
									<LoadingIcon />
								) : (
									<>
										Login
										<LogoutIcon className='ml-1 ' />
									</>
								)}
							</Button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
