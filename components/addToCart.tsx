'use client'
import { MinusIcon, PlusIcon } from '@/icons'
import { Button, IconButton } from '@/components/mui'
import { useState } from 'react'
import * as layoutReducer from '@/store/layoutReducer'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useParams } from 'next/navigation'

type Props = React.ComponentProps<'div'>

export const AddToCart = ({ className, ...rest }: Props) => {
	const dispatch = useAppDispatch()
	const { slug } = useParams()
	const [ value, setValue ] = useState(1)
	const maxValue = 10
	const [ fields, setFields ] = useState({
		add: false,
		minus: false,
		addToCart: false,
	})
	// const { isProductAddedToCart } = useAppSelector( state => state.layout )

	const productId = slug 	as string	 || ''			// productId / string
	const isMaxValue = value >= maxValue
	const isMinValue = value <= 0

	const increaseHandler = () => {
		if(isMaxValue) return setFields({ ...fields, add: true })
		setValue( value + 1)
	}
	const decreaseHandler = () => {
		if(isMinValue) return setFields({ ...fields, minus: true })
		setValue( value - 1)
	}


	// const addItemToCart = () => {
	// 	dispatch(layoutReducer.addItemToCart(productId))
	// 	setFields({ ...fields, addToCart: true }) 			// disable addToCart
	// }
	// const removeItemFormCart = () => {
	// 	dispatch(layoutReducer.removeItemFromCart(productId))
	// 	setFields({ ...fields, addToCart: false }) 			// enable addToCart
	// }

	return (
		<div {...rest} className={`${className} flex items-center gap-4`}>
			<div className='flex items-center gap-2'>
				<IconButton onClick={increaseHandler} disabled={isMaxValue}>
					<PlusIcon className='text-blue-600' />
				</IconButton>

				<span className="text-xl"> {value} </span>

				<IconButton onClick={decreaseHandler} disabled={isMinValue}>
					<MinusIcon className='text-red-600' /> 
				</IconButton>
			</div>


		{/* {isProductAddedToCart ? (
			<Button color='error' variant='contained' onClick={removeItemFormCart}  >Remove From Cart</Button>
		) : (
			<Button color='primary' variant='contained' onClick={addItemToCart} >Add To Cart</Button>
		)} */}

		</div>
	)
}
