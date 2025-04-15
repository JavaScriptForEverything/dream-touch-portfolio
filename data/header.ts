import { HomeIcon, MailIcon, PersonIcon, ArticleIcon, HeartIcon, CartIcon } from '@/icons'


export const headerNavItems = [
	{ label: 'home', 			path: '/', 						Icon: HomeIcon  },
	{ label: 'portfolio', path: '/portfolio', 	Icon: PersonIcon  },
	{ label: 'service', 	path: '/service', 		Icon: PersonIcon  },
	{ label: 'blog', 			path: '/blog', 				Icon: ArticleIcon },
	{ label: 'about us', 	path: '/about-us', 		Icon: PersonIcon  },
	{ label: 'contact us', path: '/contact-us', Icon: MailIcon },
	{ label: 'e-catalogue', path: '/e-catalogue', Icon: ArticleIcon },
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