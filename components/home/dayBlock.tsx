
type Props = {
	day: number
}
export const DayBlock = ({ day }: Props) => {

	return (
		<div className="bg-blue-500 text-slate-50 p-2 rounded flex flex-col items-center justify-center">
			<p className='text-2xl font-extrabold'>{day}</p>
			<p className='capitalize'>days</p>
		</div>
	)
}
