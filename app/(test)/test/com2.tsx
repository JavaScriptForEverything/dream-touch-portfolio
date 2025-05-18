interface Props {
	isStart: boolean
	isEnd: boolean
	onPrev: () => void
	onNext: () => void
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

export default MyComp2