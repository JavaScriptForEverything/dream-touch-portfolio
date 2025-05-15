import type { Metadata } from 'next'
import Link from 'next/link'
import { RegisterForm } from './registerForm'


export const metadata: Metadata = {
	title: 'Register | Page',
	description: 'register page description goes here'
}

const Register = () => {

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='w-96 bg-slate-50 m-auto px-4 py-3 shadow-md rounded border border-slate-100 '>
				<h1 className='text-blue-500 text-2xl text-center mb-6'>Register</h1> 
				
				<RegisterForm />

				
				<div className='text-center'>
					<Link className='text-blue-500 ' href="/login">Already have an account ? login here</Link> 
				</div>


			</div>
		</div>
	)
}
export default Register
