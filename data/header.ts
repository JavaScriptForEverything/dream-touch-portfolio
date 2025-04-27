import { HomeIcon, PersonIcon, HeartIcon, CartIcon, WranchIcon, BlogIcon, PortfolioIcon } from '@/icons'


export const headerNavItems = [
	{ label: 'home', 			path: '/', 						Icon: HomeIcon  },
	{ label: 'portfolio', path: '/portfolio', 	Icon: PortfolioIcon  },
	{ label: 'service', 	path: '/service', 		Icon: WranchIcon  },
	// { label: 'blog', 			path: '/blog', 				Icon: BlogIcon },
	{ label: 'about us', 	path: '/about-us', 		Icon: PersonIcon  },
	{ label: 'contact us', path: '/contact-us', Icon: WranchIcon },
	// { label: 'e-catalogue', path: '/e-catalogue', Icon: ArticleIcon },
]

// export const cartLabel = 'my cart' 	// based on cartLabel => <Badge> <CartIcon /> </Badge>

// export const topRightConrnerMenuItems = [
// 	{ label: 'profile', path: '/profile', Icon: PersonIcon },
// 	{ label: 'orders', 	path: '/order', 	Icon: HeartIcon },
// 	{ label: cartLabel, path: '/cart', 		Icon: CartIcon,  }, 	
// ]

// export const secondHeaderMenuItems = [
// 	{ label: 'all categories', 	path: '/category', 		Icon: PersonIcon },
// 	{ label: 'mobile phones', 	path: '/phone', 			Icon: HeartIcon },
// 	{ label: 'laptop & desktops', path: '/computer', 	Icon: HeartIcon },
// 	{ label: 'PC games', 				path: '/games', 			Icon: HeartIcon },
// 	{ label: 'home & funitures', path: '/funitures', 	Icon: HeartIcon },
// ]