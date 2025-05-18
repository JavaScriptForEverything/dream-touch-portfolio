'use client'
import Image from 'next/image'
import { Button } from './mui'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import * as layoutReducer from '@/store/layoutReducer'

type Props = React.ComponentProps<'div'> & {
	avatar: string
}
export const AddReview = ({ avatar, className, ...rest }: Props) => {
	const dispatch = useAppDispatch()
	// const { replyTo } = useAppSelector(state => state.layout)

	const [ searchValue, setSearchValue ] = useState('')
	const [ errorValue, setErrorValue ] = useState('')
	const [ isDisabled, setIsDisabled ] = useState(false)
	const [ isHaveReplyTo, setIsHaveReplyTo ] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)


	// useEffect(() => {
	// 	setIsHaveReplyTo(replyTo !== null)
	// }, [replyTo])

	// useEffect(() => {
  //  	if (inputRef.current) {
	// 		inputRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center', 				// This centers the input in the viewport
  //       inline: 'nearest', 			// This keeps the horizontal scroll behavior as it is
  //     })
  //   }
	// }, [replyTo])

	useEffect(() => {
		setErrorValue('')
		setIsDisabled(false)
	}, [searchValue])

	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value)
	}
	const resetHandler = () => {
		setSearchValue('')
		setIsDisabled(true)
		setErrorValue('')
		setIsHaveReplyTo(false)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		
		if(!searchValue.trim()) return setErrorValue('your review is empty')

		// if(replyTo) {
		// 	console.log({ replyTo: searchValue })
		// 	dispatch(layoutReducer.resetReplyTo())
			
		// } else {

		// 	console.log({ review: searchValue })
		// }
		
		setIsDisabled(true)
		setSearchValue('')

		setTimeout(() => {
			resetHandler()
		}, 1000)

	}

	return (
		<div {...rest} className={`${className} border border-slate-200 p-4 mb-2`}>
			<div className="flex gap-2 items-start">
				<Image 
					src={avatar}
					alt={avatar}
					width={40}
					height={40}
					className='rounded-full'
				/>

				<form onSubmit={submitHandler} className="flex-1 space-y-2">
					<input 
						ref={inputRef}
						autoFocus={isHaveReplyTo}
						placeholder={isHaveReplyTo ? 'your reply' : 'your review'}
						className=' w-full px-3 py-2 border-b border-blue-300 outline-none focus:border-blue-500 ' 
						value={searchValue}
						onChange={changeHandler}
					/>
					{!!errorValue && (
						<small className='text-sm text-red-500 mb-2 mt-1'>{errorValue}</small>
					)}

					<div className="flex items-center justify-end gap-2">
						<Button
							variant='outlined'
							color='primary'
							className='px-8'
							disabled={!searchValue.trim() && !isHaveReplyTo}
							onClick={resetHandler}
						>Reset</Button>
						<Button
							variant='contained'
							color='primary'
							type='submit'
							disabled={isDisabled || !searchValue.trim()}
						>{isHaveReplyTo ? 'Reply' : 'Comment'}</Button>
					</div>

				</form>
			</div>

		</div>
	)
}

