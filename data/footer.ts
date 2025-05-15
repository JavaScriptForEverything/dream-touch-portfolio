import { PhoneIcon, EmailIcon, LocationIcon, FacebookIcon, TwitterIcon, LinkedInIcon, YoutubeIcon, InstagramIcon } from '@/icons'
import { headerNavItems } from './header'

export const contactInfo = [
	{ 
		label: 'phone', 
		placeholder:'+8801955-521500',	
		href: 'tel:+8801955-521500', 
		Icon: PhoneIcon  
	},
	{ 
		label: 'email', 	
		placeholder:'info@dreamtouch-bd.com',	
		href: 'mailto:info@dreamtouch-bd.com', 
		Icon: EmailIcon  
	},
	{ 
		label: 'address', 
		placeholder:'Bir Uttam CR Dutta Road, Hatirpool, Dhaka-1205',	
		href: 'https://maps.app.goo.gl/327qpf4y2yx6dfuN9', 
		Icon: LocationIcon 
	},
]




export const socialMediaItems = [
	{ label: 'facebook', 	Icon: FacebookIcon, path: 'https://facebook.com/interior.design.dream.touch' },
	{ label: 'twitter',  	Icon: TwitterIcon, 	path: 'https://twitter.com/interior_dtal' },
	{ label: 'linkedin', 	Icon: LinkedInIcon, path: 'https://bd.linkedin.com/company/dream-touch-architects-ltd' },
	{ label: 'youtube',  	Icon: YoutubeIcon, 	path: 'https://www.youtube.com/channel/UCmflcWW7bGBvkDQmElTwGFw' },
	{ label: 'instagram', Icon: InstagramIcon, path: 'https://www.instagram.com/dreamtouchbd' },
]



export const footerLinkItems = [
	{ 
		title: 'Pages', 
		child: [
			...headerNavItems.map(({ label, path }) => ({
				label,
				placeholder: label,
				href: path,
			})),
		],
	},
	{ 
		title: 'Policies', 
		child: [
			{ 
				label: 'FAQ', 	
				placeholder:'FAQ',	
				href: 'faq', 
			},
			{ 
				label: 'terms and conditions', 	
				placeholder:'terms and conditions',	
				href: 'terms-and-conditions', 
			},
			{ 
				label: 'privacy policy',
				placeholder:'privacy policy',
				href: 'privacy-policy', 	
			},
		],
	},
	{ 
		title: 'Utility', 
		child: [
			{ 
				label: 'Review', 	
				placeholder:'review',	
				href: '/review', 
			},
			{ 
				label: 'Appointment', 	
				placeholder:'appointment',	
				href: '/contact-us', 
			},
			{ 
				label: 'Site Map', 	
				placeholder:'Site Map',	
				href: '/site-map', 
			},
			{ 
				label: 'Google Map', 	
				placeholder:'Google Map',	
				href: '/maps/google', 
			},
		],
	},
	{ 
		title: 'Social Media', 
		child: socialMediaItems.map(({ label, path }) => ({
			label,
			placeholder: label,
			href: path,
		})),
	},
	{ 
		title: 'Others', 
		child: [
			{ 
				label: 'dream touch', 	
				placeholder:'https://dreamtouch-bd.com/',	
				href: 'https://dreamtouch-bd.com/', 
			},
			{ 
				label: 'dream door', 	
				placeholder:'https://dreamdoor.com.bd/',	
				href: 'https://dreamdoor.com.bd/', 
			},
		],
	},
]


