'use client'

import { useAppDispatch } from '@/hooks/redux'
import * as layoutReducer from '@/store/layoutReducer'

type Props = {
	productId: string
	userId: string
	reviewId: string
}

export const ReplyTo = ({ productId, userId, reviewId }: Props) => {
	const dispatch = useAppDispatch()

	const clickHandler = () => {
		dispatch(layoutReducer.replyTo({  productId, userId, reviewId }))
	}

	return (
		<span 
			className=' cursor-pointer hover:text-shadow hover:text-slate-950 ' 
			onClick={clickHandler}
		>Reply</span>
	)
}
