import { HomeIcon, MailIcon, PersonIcon, ArticleIcon, HeartIcon, CartIcon } from '@/icons'

export const headerItems = [
	{ label: 'home', 		path: '/', 				Icon: HomeIcon  },
	{ label: 'about', 	path: '/about', 	Icon: PersonIcon  },
	{ label: 'contact', path: '/contact', Icon: MailIcon },
	{ label: 'docs', 		path: '/docs', 		Icon: ArticleIcon },
]

export const cartLabel = 'my cart' 	// based on cartLabel => <Badge> <CartIcon /> </Badge>

export const topRightConrnerMenuItems = [
	{ label: 'profile', path: '/profile', Icon: PersonIcon },
	{ label: 'orders', 	path: '/order', 	Icon: HeartIcon },
	{ label: cartLabel, path: '/cart', 		Icon: CartIcon,  }, 	
]

export const secondHeaderMenuItems = [
	{ label: 'all categories', 	path: '/category', 		Icon: PersonIcon },
	{ label: 'mobile phones', 	path: '/phone', 			Icon: HeartIcon },
	{ label: 'laptop & desktops', path: '/computer', 	Icon: HeartIcon },
	{ label: 'PC games', 				path: '/games', 			Icon: HeartIcon },
	{ label: 'home & funitures', path: '/funitures', 	Icon: HeartIcon },
]