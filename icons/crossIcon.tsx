
type Props = {
	className?: React.ComponentProps<'svg'>['className']
	fontSize?: React.ComponentProps<'svg'>['fontSize']
}
export const CrossIcon = ({ className, fontSize }: Props) => {

	return (
		<svg className={`w-5 h-5 ${className}`} 
			xmlns="http://www.w3.org/2000/svg" 
			width="24" 
			height="24" 
			viewBox="0 0 32 32"
			fontSize={fontSize}
		>
			<path 
				fill="currentColor" 
				d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"
			/>
		</svg>
	)
}
