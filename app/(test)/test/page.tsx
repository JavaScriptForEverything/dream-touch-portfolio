'use client'
import { lazy, Suspense, useState } from 'react'

// import MyComp1 from './com1'
// import MyComp2 from './com2'
// import MyComp3 from './com3'

const MyComp1 = lazy( async () => {
	const module = await import('./com1')
	return { default: module.MyComp1 }
})
// const MyComp1 = lazy( () => import('./com1'))
const MyComp2 = lazy(() => import('./com2'))
const MyComp3 = lazy(() => import('./com3'))


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

			<Suspense fallback={<h2>Loading</h2>}>

				<Step 
					isStart={isStart}
					isEnd={isEnd}
					onPrev={prevHandler} 
					onNext={nextHandler} 
				/>
			</Suspense>

		</>
	)
}
export default Test
