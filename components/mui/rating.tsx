import type { Color, Size } from '@/types/component'
import { StarIcon } from '@/icons'

type Props = {
  value: number 
  onChange?: (value: number) => void  
  size?: Size
  color?: Color
  readOnly?: boolean
  disabled?: boolean
  max?: number
  className?: React.ComponentProps<'div'>['className']  
}

export const Rating = (props: Props) => {
	const {
		value,
		onChange,
		size = 'medium',
		color = 'default',
		readOnly = false,
		disabled = false,
		max = 5,
		className,
		...rest
	} = props

  // Handle the size classes
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8',
  }

	const colorClasses = {
		default: 'text-yellow-400',
		primary: 'text-blue-500',
		secondary: 'text-green-500 ',
		error: 'text-red-500',
		info: 'text-blue-300',
		warning: 'text-yellow-400',
		success: 'text-green-600',
	}

  // Handle the star hover effects and rating change
  const handleClick = (rating: number) => {
    if (readOnly || disabled || !onChange) return
		onChange(rating)
  }

  // Generate an array of stars based on the max value
  const stars = Array.from({ length: max }, (_, index) => {
    const starIndex = index + 1
    const isFilled = starIndex <= value
    const isHovered = !readOnly && starIndex <= value

		return (
			<StarIcon key={starIndex} {...rest}
        fill={isFilled ? 'currentColor' : 'none'}
        className={`cursor-pointer ${className} ${sizeClasses[size]} ${isFilled ? colorClasses[color] : 'text-gray-300'} transition-colors duration-200 hover:text-yellow-500`}
        onClick={() => handleClick(starIndex)}
			/>
		)
  })

  return (
    <div className="flex items-center space-x-1">
      {stars}
    </div>
  )
}

