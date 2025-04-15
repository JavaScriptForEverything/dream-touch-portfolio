'use client'
import Image from 'next/image'
import { useState } from 'react'
import { IconButton } from './mui'
import { ArrowLeftIcon, ArrowRightIcon } from '@/icons'

/*
<Carousel 
	thumbnailLimit={4}
	images={[
		'/images/carousel/image-1.jpg',
		'/images/carousel/image-2.jpg',
		'/images/carousel/image-3.jpg',
		'/images/carousel/image-4.jpg',
		'/images/carousel/image-5.jpg',
		'/images/carousel/image-1.jpg',
		'/images/carousel/image-2.jpg',
		'/images/carousel/image-3.jpg',
		'/images/carousel/image-4.jpg',
		'/images/carousel/image-5.jpg',
	]}
/>
*/

type Props = React.ComponentProps<'div'> & {
	images: string[]
	thumbnailLimit?: number 				// thumbnailLimit: 0 => hide the thumbnail
}
export const Carousel = ({ images, thumbnailLimit=5 }: Props) => {
	const [ selectedIndex, setSelectedIndex ] = useState(0)

	const lastIndex = images.length - 1
	const getActiveColor = (index: number) => selectedIndex === index ? '#fffc' : '#fff3'

	const prevIndicatorHandler = () => {
		if(selectedIndex <= 0 ) return setSelectedIndex(lastIndex)
		setSelectedIndex(index => index - 1)
	}
	const nextIndicatorHandler = () => {
		if(selectedIndex >= lastIndex ) return setSelectedIndex(0)
		setSelectedIndex(index => index + 1)
	}
	const thumbnailClickHandler = (index: number) => () => {
		setSelectedIndex(index)
		console.log({ index })
	}




	return (
		<div className="relative h-56 md:h-96 w-full border border-slate-300 rounded " >
			<Image 
				src={images[selectedIndex]}
				alt={images[selectedIndex]}
				fill
				sizes='400px'
			/>

			<div className={`absolute inset-0 z-10 flex justify-between items-center box-border px-1`} >
				<IconButton onClick={prevIndicatorHandler} > <ArrowLeftIcon /> </IconButton>
				<IconButton onClick={nextIndicatorHandler} > <ArrowRightIcon /> </IconButton>
			</div>

			<div className="
				absolute left-0 right-0 bottom-0 z-10 
				flex justify-center gap-1 flex-nowrap overflow-scroll
			">
				{images.map( (image, index) => index <= (thumbnailLimit - 1) && (
					<div key={index} className='relative flex-shrink-0 border border-slate-50 w-16 aspect-video cursor-pointer' >
						{!!image && <Image
							src={image}
							alt={image}
							fill
							onClick={thumbnailClickHandler(index)}
						/> }
					</div>
				))}
			</div>

		</div>
	)
}
