import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Auth Layout',
	description: 'register page description goes here'
}

type Props = {
	children: Readonly<React.ReactNode>
}
const AuthLayout = ({ children }: Props) => {

	return (
		<>
			{children}
		</>
	)
}
export default AuthLayout
