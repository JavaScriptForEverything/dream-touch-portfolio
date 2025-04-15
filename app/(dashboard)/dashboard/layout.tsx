// import { Header } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboart Layout'
}

type Props = {
	children: Readonly<React.ReactNode>
}
const DashboardLayout = ({ children }: Props) => {

	return (
		<>
		{/* <Header /> */}
		{children}
		</>
	)
}
export default DashboardLayout
