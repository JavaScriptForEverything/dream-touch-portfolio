export const maxImageSize = 1024 * 1024 * 5 			// => 5 MB

export enum Collection {
	Service = 'Service',
	Portfolio = 'Portfolio',
	Contact = 'Contact',

	Page = 'Page',
	Metadata = 'Metadata',

	User = 'User',
}


export const Gender = {
	MALE: 'male',
	FEMALE: 'female',
	OTHER: null
}


export const Roles = {
  SUPER_ADMIN: 'super_admin',
  SITE_SETTING: 'site_setting',
  ADMIN: 'admin',
  USER: 'user',
} as const







export const Pages = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACT: 'contact',
	PORTFOLIO: 'portfolio',
	SERVICE: 'service',
} as const