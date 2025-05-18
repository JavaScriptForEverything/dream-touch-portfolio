'use client'
import { useState } from 'react'


interface Props {
	isStart: boolean
	isEnd: boolean
	onPrev: () => void
	onNext: () => void
}

const MyComp1 = ({ isStart, isEnd, onPrev, onNext }: Props) => {
	return (
		<>
			<h1>Component 1</h1>
			<button 
				onClick={onPrev}
				disabled={isStart}
				className='disabled:text-slate-500'
			>Prev</button>

			<button 
				onClick={onNext}
				disabled={isEnd}
				className='disabled:text-slate-500'
			>Next</button>
		</>
	)
}

const MyComp2 = ({ isStart, isEnd, onPrev, onNext }: Props) => {
	return (
		<>
			<h1>Component 2</h1>
			<button 
				onClick={onPrev}
				disabled={isStart}
				className='disabled:text-slate-500'
			>Prev</button>

			<button 
				onClick={onNext}
				disabled={isEnd}
				className='disabled:text-slate-500'
			>Next</button>
		</>
	)
}

const MyComp3 = ({ isStart, isEnd, onPrev, onNext }: Props) => {
	return (
		<>
			<h1>Component 3</h1>
			<button 
				onClick={onPrev}
				disabled={isStart}
				className='disabled:text-slate-500'
			>Prev</button>

			<button 
				onClick={onNext}
				disabled={isEnd}
				className='disabled:text-slate-500'
			>Next</button>
		</>
	)
}

const steps = [
	MyComp1,
	MyComp2,
	MyComp3,
]

const Test = () => {
	const [ step, setStep ] = useState(0)

	const Step = steps[step]

	const isEnd = step >= steps.length - 1
	const isStart = step <= 0

	const nextHandler = () => {
		if(isEnd) return
		setStep( prevStep => prevStep + 1 )
	}
	const prevHandler = () => {
		if(isStart) return
		setStep( prevStep => prevStep - 1 )
	}

	return (
		<>
			<h2 className='text-red-500 text-2xl'>Test Page</h2>

			<Step 
				isStart={isStart}
				isEnd={isEnd}
				onPrev={prevHandler} 
				onNext={nextHandler} 
			/>

		</>
	)
}
export default Test
