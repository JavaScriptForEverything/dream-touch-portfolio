import type { Metadata } from "next"
import { Footer, Header } from '@/components'


export const metadata: Metadata = {
  title: "Dream Touch | Best Interior Design Company in Bangladesh",
	keywords: "interior design, interior design company, best interior design company, interior design in Bangladesh, interior design in Dhaka",
  description: "Dream Touch is the best interior design company in Bangladesh, specializing in residential and commercial interior design. We transform spaces into aesthetically pleasing and functional ones that align with our client's interests and needs.",
}

type Props = {
	children: Readonly<React.ReactNode>
}

const HomeLayout = ({ children }: Props) => {
  return (
		<>
		<head>
			{/* <link rel="icon" href="/favicon.png" /> */}
		</head>
		<div className=''>
			<Header />
			<div className="container mx-auto px-6 md:px-0">
				{children}
			</div>
			<Footer />
		</div>
		</>
  )
}
export default HomeLayout