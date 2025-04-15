import type { Size } from '@/types/component';

type Props = React.ComponentProps<'button'> & {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text'; // Added 'text' variant
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'; // Added more color options
    size?: Size;
    fullWidth?: boolean;
};

export const Button = (props: Props) => {
	const {
		className = '',
		type = 'button',
		disabled = false,
		children,
		variant = 'contained',
		color = 'default',
		size = 'medium',
		fullWidth = false,
		...rest
	} = props

	const baseStyles = `${fullWidth ? 'w-full' : ''} font-medium rounded focus:outline-none transition duration-150 ease-in-out`;
	const disabledStyles = 'disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-400/30'

	const sizeStyles = {
		small: 'px-2 py-1 text-sm',
		medium: 'px-4 py-2',
		large: 'px-6 py-3 text-lg',
	}

	const colorStyles = {
		default: {
			contained: 'bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500',
			outlined: 'border border-gray-500 text-gray-500 bg-white hover:bg-gray-50 active:bg-gray-100',
			text: 'text-gray-500 hover:bg-gray-100 active:bg-gray-200',
		},
		primary: {
			contained: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
			outlined: 'border border-blue-500 text-blue-500 bg-white hover:bg-blue-50 active:bg-blue-100',
			text: 'text-blue-500 hover:bg-blue-100 active:bg-blue-200',
		},
		secondary: {
			contained: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
			outlined: 'border border-green-500 text-green-500 bg-white hover:bg-green-50 active:bg-green-100',
			text: 'text-green-500 hover:bg-green-100 active:bg-green-200',
		},
		error: {
			contained: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
			outlined: 'border border-red-500 text-red-500 bg-white hover:bg-red-50 active:bg-red-100',
			text: 'text-red-500 hover:bg-red-100 active:bg-red-200',
		},
		info: {
			contained: 'bg-blue-300 text-white hover:bg-blue-400 active:bg-blue-500',
			outlined: 'border border-blue-300 text-blue-300 bg-white hover:bg-blue-50 active:bg-blue-100',
			text: 'text-blue-300 hover:bg-blue-100 active:bg-blue-200',
		},
		warning: {
			contained: 'bg-yellow-400 text-white hover:bg-yellow-500 active:bg-yellow-600',
			outlined: 'border border-yellow-400 text-yellow-400 bg-white hover:bg-yellow-50 active:bg-yellow-100',
			text: 'text-yellow-400 hover:bg-yellow-100 active:bg-yellow-200',
		},
		success: {
			contained: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
			outlined: 'border border-green-600 text-green-600 bg-white hover:bg-green-50 active:bg-green-100',
			text: 'text-green-600 hover:bg-green-100 active:bg-green-200',
		},
	}

	const variantStyles = colorStyles[color][variant]

	return (
		<button
			{...rest}
			type={type}
			disabled={disabled}
			className={`${baseStyles} ${sizeStyles[size]} ${variantStyles} ${className} ${disabled ? disabledStyles : ''}`}
		>
			{children}
		</button>
	)
}
