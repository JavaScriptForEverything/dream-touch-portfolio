'use client'
import { usePathname } from 'next/navigation'
import { headerNavItems } from '@/data'

export const HeaderNavBar = () => {
	const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

	return (
		<nav className="hidden md:flex gap-4">
			{headerNavItems.map( ({ label, path }) => (
				<a key={label} href={path} className={`
				whitespace-nowrap 
				${isActive(path) ? 'text-red-500' : ''}
				hover:text-red-500 
				transition-colors 
				duration-300 uppercase `} >{label}</a>
			))}
		</nav>
	)
}
