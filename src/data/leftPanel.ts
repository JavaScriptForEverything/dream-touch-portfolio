import { 
	GroupIcon, 
	PortfolioIcon, 
	SettingsIcon,
	AccountIcon,
	ServiceIcon,
	NotificationIcon,
	DashboardIcon,
	LogoutIcon,

} from '@/icons'

interface SidebarList {
	label: string
	Icon: React.ComponentType<any>
	path: string
}

export const leftPanelListItems: SidebarList[] = [
	{ 
		label: 'dashboard', 	
		Icon: DashboardIcon, 
		path: '/dashboard'
	},
	{ 
		label: 'portfolio', 	
		Icon: PortfolioIcon, 
		path: '/dashboard/portfolio'
	},
	{ 
		label: 'service', 	
		Icon: ServiceIcon, 
		path: '/dashboard/service'
	},
	{ 
		label: 'customer', 	
		Icon: GroupIcon, 
		path: '/dashboard/customer'
	},
	{ 
		label: 'notification', 	
		Icon: NotificationIcon, 
		path: '/dashboard/notification'
	},
	{ 
		label: 'setting', 	
		Icon: SettingsIcon, 
		path: '/dashboard/setting'
	},
	{ 
		label: 'profile', 	
		Icon: AccountIcon, 
		path: '/dashboard/user/profile'
	},
	{ 
		label: 'logout', 	
		Icon: LogoutIcon, 
		path: '/login'
	},
]

