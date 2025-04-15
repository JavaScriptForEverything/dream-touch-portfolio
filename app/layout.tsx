import type { Metadata } from "next"
// import localFont from "next/font/local"
import { Roboto } from "next/font/google"
// import { Poppins as Roboto } from "next/font/google"
import "./globals.css"
import { DrawerPanel, ReduxProvider } from '@/components'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400'],
  // variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Home Page | ",
  description: "Generated by create next app",
}

type Props = {
	children: Readonly<React.ReactNode>
}

const RootLayout = ({ children, }: Props) => {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} > */}
      <body className={`${roboto.className}`} >
				<ReduxProvider>
					<DrawerPanel /> 
					{children}
				</ReduxProvider>
      </body>
    </html>
  )
}
export default RootLayout
