'use client'
import { Rating } from './mui'

type Props = React.ComponentProps<typeof Rating>

export const ClientRating = ( props: Props) => {
	return (
		<Rating {...props} />
	)
}
