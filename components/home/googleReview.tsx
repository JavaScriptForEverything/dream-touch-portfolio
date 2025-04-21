'use client'
import Image from 'next/image'
import { StarIcon } from '@/icons'
import { useState } from 'react'

interface Props {
	numberOfStars?: number
	reviewerName?: string
	reviewText: string
	reviewerImage: string
}
const GoogleReview = (props: Props) => {

	const {
		numberOfStars = 5,
		reviewerName, 
		reviewText, 
		reviewerImage, 
	} = props

	const [ isOpen, setIsOpen ] = useState(false)

	const toggleMoreHandle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div className="flex justify-between items-center">

				<div className="flex gap-1 justify-start items-center">
					{[...new Array(props.numberOfStars)].map((_, index) => (
						<StarIcon key={index} className='text-amber-500 w-5 h-5' />
					))}
				</div>

				<Image 
					src={reviewerImage || '/images/user/default.jpg'}
					alt='user image'
					width={40}
					height={40}
					className='rounded-full border-2 border-slate-300/70'
				/>
			</div>

			<div className={`mt-4 text-slate-600 text-justify transition-all duration-500
				${isOpen ? 'line-clamp-none' : 'line-clamp-2' } 
			`}>
				{reviewText} 
			</div>

				<p className={`my-2 `}>
					{/* {reviewText.length > reviewTextLength && ( */}
						<button onClick={toggleMoreHandle} className='
							text-red-600 font-semibold
							underline underline-offset-2 decoration-1 decoration-red-500/70
							hover:text-red-700
							cursor-pointer
						'>{isOpen ? 'less' : 'more'}</button>
					{/* )} */}
				</p>
		</div>
	)
}
export default GoogleReview
