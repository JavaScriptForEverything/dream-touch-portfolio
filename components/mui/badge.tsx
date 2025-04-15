import { Color } from '@/types/component'

// type Props = React.ComponentProps<'div'> & {
type Props = {
	children: React.ReactNode 				
	content?: number
	color?: Color
	variant?: 'dot' | 'standard' 
	max?: number 
	overlap?: 'circle' | 'rectangular'
};

export const Badge = (props: Props) => {
	const {
    children,
    content,
    color = 'default',
    // variant = 'standard',
    max = 99,
    // overlap = 'circle',
	} = props

	const colorClasses = {
		default: 'bg-gray-300 text-gray-800',
		primary: 'bg-blue-500 text-white',
		secondary: 'bg-green-500 text-white',
		error: 'bg-red-500 text-white',
		info: 'bg-blue-300 text-white',
		warning: 'bg-yellow-400 text-white',
		success: 'bg-green-600 text-white',
	}

	const badgeStyles = `
		${colorClasses[color]} 
		inline-flex items-center justify-center rounded-full text-xs font-medium 
		absolute ransform -translate-x-1/2 -translate-y-1/2 
		w-5 h-5 text-xs 
	`
	const displayValue = (typeof max === 'number' && typeof content === 'number' && content > max) ? `${max}+` : content

    return (
			<div className="relative inline-block">
				{children}
				{!!content && (
					<span className={`${badgeStyles} top-1 -right-4 `} >
						{displayValue}
					</span>
				)}

				{/* {variant === 'dot' ? (
						<span className={`${badgeStyles} h-2 w-2`} />
				) : (
						<span className={`${badgeStyles}`} style={{ top: '0', right: '0' }}>
								{displayValue}
						</span>
				)} */}
			</div>
    )
}

