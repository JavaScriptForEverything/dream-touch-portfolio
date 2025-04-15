type Props = React.ComponentProps<'svg'>

export const GiftIcon = (props: Props) => (
	<svg {...props}
		xmlns="http://www.w3.org/2000/svg" 
		width="1em" 
		height="1em" 
		viewBox="0 0 24 24"
	>
		<path 
			fill="currentColor" 
			d="M4 22V11H2V5h5.2q-.125-.225-.162-.475T7 4q0-1.25.875-2.125T10 1q.575 0 1.075.213T12 1.8q.425-.4.925-.6T14 1q1.25 0 2.125.875T17 4q0 .275-.05.513T16.8 5H22v6h-2v11zM14 3q-.425 0-.712.288T13 4t.288.713T14 5t.713-.288T15 4t-.288-.712T14 3M9 4q0 .425.288.713T10 5t.713-.288T11 4t-.288-.712T10 3t-.712.288T9 4M4 7v2h7V7zm7 13v-9H6v9zm2 0h5v-9h-5zm7-11V7h-7v2z"
		/>
	</svg>
)
