
type Props = React.ComponentProps<'svg'>

export const ArrowDownIcon = (props: Props) => (
	<svg {...props}
		xmlns="http://www.w3.org/2000/svg" 
		width="1em" 
		height="1em" 
		viewBox="0 0 24 24"
	>
		<path 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			strokeWidth="2" 
			d="m7 10l5 5l5-5"
		/>
	</svg>
)
