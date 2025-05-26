
type Props = React.ComponentProps<'input'>

export const Input = ({ className, ...rest }: Props) => {

	return (
		<input {...rest}
			className={`${className}
				w-full px-4 py-2 pr-10 border rounded-lg 
				focus:outline-none focus:ring focus:ring-orange-300
			`}
		/>
	)
}
