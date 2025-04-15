type Props = React.ComponentProps<'svg'>

export const AddPlusIcon = (props: Props) => (
	<svg {...props}
		xmlns="http://www.w3.org/2000/svg" 
		width="1em" 
		height="1em" 
		viewBox="0 0 16 16"
	>
		<path 
			fill="currentColor" 
			d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
		/>
		<path 
			fill="currentColor" 
			d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5"
		/>
		<path 
			fill="currentColor" 
			d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"
		/>
	</svg>
)
