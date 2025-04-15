
type Props = React.ComponentProps<'div'> & {
	children: React.ReactNode
	isOpen?: boolean
	onClose?: () => void
	position?: 'left' | 'right' | 'top' | 'bottom'
	variant?: 'persistent' | 'temporary'
}

export const Drawer = (props: Props) => {
	const {
    children,
    isOpen,
    onClose,
    position = 'left',
    variant = 'temporary',

	} = props

	const drawerClasses = `
		fixed z-30 h-full bg-white shadow-lg transition-transform 
		${variant === 'temporary' ? 'transform' : 'translate-x-0'}
		${position === 'left' ? 'left-0' : position === 'right' ? 'right-0' : ''}
		${isOpen ? 'translate-x-0' : '-translate-x-full'}
	`

	const overlayClasses = `
		fixed inset-0 transition-opacity z-20 
		${isOpen ? 'opacity-50 bg-black opacity-50 ' : 'opacity-0 pointer-events-none'}
	`

	return (
		<>
		{variant === 'temporary' && (
			<div className={overlayClasses} onClick={onClose} />
		)}
		<div className={drawerClasses}>
			<div className="p-4">
				<button className="text-gray-500" onClick={onClose}> Close </button>
				{children}
			</div>
		</div>
		</>
	)
}

