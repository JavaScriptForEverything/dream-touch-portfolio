interface Props {
	isStart: boolean
	isEnd: boolean
	onPrev: () => void
	onNext: () => void
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

export default MyComp3