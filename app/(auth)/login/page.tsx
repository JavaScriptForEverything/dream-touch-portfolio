import type { Metadata } from 'next'
import Link from 'next/link'
import { LoginForm } from './loginForm'
import { ORIGIN } from '@/lib/config'
// import { Button } from '@/components/mui'
// import { GoogleIcon } from '@/icons'

export const metadata: Metadata = {
	title: 'Login | Page',
	description: 'Login page description goes here'
}

const Login = () => {

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='w-96 bg-slate-50 m-auto px-4 py-3 shadow-md rounded border border-slate-100 '>
				<h1 className='text-blue-500 text-2xl text-center mb-6'>Login</h1> 
				
				<LoginForm />

				
				<div className='text-center'>
					<Link className='text-blue-500 ' href="/register">Don&apos;t have an account ? register here</Link> 
				</div>

				<Link href={`${ORIGIN}/api/auth/google`}>
					<button
						// size='medium'
						// color='primary'
						// variant='contained'
						// fullWidth
						className=' bg-orange-500 border-orange-600 hover:bg-orange-600/90 active:bg-orange-500 flex justify-between mt-12 '
					>
						<span className='w-24 flex justify-center items-center '>
 {/* <GoogleIcon fontSize={20} />  */}
						</span>
						<span className='w-full flex justify-center items-center capitalize'> login with google </span> 
					</button>

				</Link>

			</div>
		</div>
	)
}
export default Login
