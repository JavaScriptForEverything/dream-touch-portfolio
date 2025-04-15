'use client'
import { DislikeIcon, LikeIcon } from '@/icons'
import { IconButton } from './mui'
import { useState } from 'react'

type Props = React.ComponentProps<'div'> & {
	productId: string
}

export const ClientLikeDislike = ({ productId, className, ...rest}: Props) => {
	const [ likes, setLikes ] = useState([''])
	const [ dislikes, setDislikes ] = useState([''])

	const likeHandler = (id: string) => () => {
		// like AddToCart: if already dislikes then disable
		// disable on like, until request success, then disable
		setLikes( [...likes, id])
	}
	const dislikeHandler = (id: string) => () => {
		// ...
		setDislikes( [...dislikes, id])
	}

	return (
		<div {...rest} className={`${className} flex items-center gap-6`}>
			<div className="flex items-center gap-1">
				<IconButton onClick={likeHandler(productId)}  className='bg-slate-50 hover:bg-slate-100 active:bg-slate-200 hover:text-slate-700 active:font-bold active:text-blue-500 '>
					<LikeIcon fontSize={28} />	
				</IconButton>
				<span className='mt-1'>{likes.length}</span>
			</div>

			<div className="flex items-center gap-1">
				<IconButton onClick={dislikeHandler(productId)} className='bg-slate-50 hover:bg-slate-100 active:bg-slate-200 hover:text-slate-700 active:font-bold active:text-blue-500 '>
					<DislikeIcon fontSize={28} />
				</IconButton>
				<span className='mt-1'>{dislikes.length}</span>
			</div>
		</div>
	)
}
