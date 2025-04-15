'use client'
import { useAppSelector } from '@/hooks/redux'
import { Badge } from './mui'

type Props = React.ComponentProps<typeof Badge> 

export const ClientBadge = ( props: Props) => {
	const { carts } = useAppSelector( state => state.layout )
	return (
		<Badge {...props} 
			content={carts.length}
		/>
	)
}
