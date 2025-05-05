'use client'
import { usePathname } from 'next/navigation'
import { headerNavItems } from '@/data'
import Link from 'next/link'

export const HeaderNavBar = () => {
	const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

	return (
		<nav className="h-full hidden md:flex items-center gap-4">

			{headerNavItems.map( ({ label, path }) => (
				<Link key={label} href={path} className={`
					shrink-0
				whitespace-nowrap 
				${isActive(path) ? 'text-red-500' : ''}
				hover:text-red-500 
				transition-colors 
				duration-300 uppercase `} >{label}</Link>
			))}

		</nav>
	)
}
