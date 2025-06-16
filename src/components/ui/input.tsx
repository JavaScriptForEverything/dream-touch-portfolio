
type Props = React.ComponentProps<'input'>

export const Input = ({ className, ...rest }: Props) => {

	return (
		<input {...rest}
			className={`${className}
      ${rest.type === 'file' ? `
				file:text-white 
				file:bg-black 
				file:px-4 
				file:py-2 
				file:rounded-tl-md 
				file:cursor-pointer
				file:mr-3
				` : 'px-4 py-2'}

				w-full 
				border border-slate-300 
				rounded-lg focus:outline-none focus:border-slate-400
			`}
		/>
	)
}


// type Props = React.ComponentProps<'input'>

// export const Input = ({ className = '', type = "text", ...rest }: Props) => {
//   return (
//     <input
//       type={type}
//       {...rest}
//       className={`
//         w-full px-4 py-2 border border-slate-300 rounded-lg
//         focus:outline-none focus:border-slate-400
//         ${type === 'file' ? 'file:text-white file:bg-black file:border file:border-slate-300 file:px-4 file:py-2 file:rounded-md file:cursor-pointer' : ''}
//         ${className}
//       `}
//     />
//   )
// }
