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
const CardReview = (props: Props) => {


	const [ isOpen, setIsOpen ] = useState(false)

	const toggleMoreHandle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className='p-4 flex flex-col gap-4 
		bg-slate-50
		border border-slate-300 md:border-0
		rounded-lg
		'>
		
			<div data-name='top-row' className="flex items-center gap-4 ">
				<div data-name='avatar-container' className="flex justify-between items-center">
					<Image 
						src={props.reviewerImage || '/images/user/default.jpg'}
						alt='user image'
						width={60}
						height={60}
						className='rounded-full border-2 border-slate-300/70'
					/>
				</div>

				<div data-name='top-right-section' className="text-red-600 flex flex-col gap-1 ">
					<h1>{props.reviewerName}</h1>

					<div data-name='star-container' className="flex gap-1 justify-start items-center">
						{[...new Array(props.numberOfStars)].map((_, index) => (
							<StarIcon key={index} className='w-4 h-4 text-red-500 ' />
						))}
					</div>

				</div>
			</div>

			<div className="font-thin">

				<div className={`text-slate-500 transition-all duration-500
					${isOpen ? 'line-clamp-none' : 'line-clamp-2' } 
				`}>
					{props.reviewText} 
				</div>

				<p className=''>
					{/* {reviewText.length > reviewTextLength && ( */}
						<button onClick={toggleMoreHandle} className='
							text-xs
							text-red-500 font-semibold
							underline underline-offset-2 decoration-1 decoration-red-500/70
							hover:text-red-700
							cursor-pointer
							uppercase
						'>Show {isOpen ? 'less' : 'more'}</button>
					{/* )} */}
				</p>

			</div>
		</div>
	)
}
export default CardReview
