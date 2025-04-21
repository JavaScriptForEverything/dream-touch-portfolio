import React from 'react'

interface Props {
	Icon: React.ReactElement
	text: string
	link: string
}
const AnimationButton = ({ Icon, text, link }: Props) => {

	return (
			<div className="flex gap-2 justify-center items-center ">
				<div className="
					bg-red-600
					text-slate-50
					hover:bg-slate-600
					flex gap-2 justify-center items-center
					rounded-xl
					py-3 px-6
					transition-all
					duration-500

					relative 
					group
					overflow-hidden
				">
					<a href={link} className='z-10'>{text}</a>
					<a href={link} className='z-10'>
						{/* <Icon fontSize={32} className='text-white' /> */}
						{Icon}
					</a>
					<div className="
						absolute inset-0
					bg-slate-600
						translate-x-full
						group-hover:translate-x-0
						duration-500 
						z-0
					"></div>
				</div>
			</div>
	)
}
export default AnimationButton
