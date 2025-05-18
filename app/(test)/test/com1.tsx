interface Props {
	isStart: boolean
	isEnd: boolean
	onPrev: () => void
	onNext: () => void
}

export const MyComp1 = ({ isStart, isEnd, onPrev, onNext }: Props) => {
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

export default MyComp1