
type Props = {
	title: string
	description: string
}
export const DayHeading = ({ title, description }: Props) => {

	return (
		<div>
			<h2 className='text-xl font-semibold text-shadow text-slate-600'>{title}</h2>
			<p className='text-sm mb-2 text-slate-500/80'>{description}</p>
		</div>
	)
}
