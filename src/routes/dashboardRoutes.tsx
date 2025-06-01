import { Home } from "@/pages/dashboard"
import Users from "@/pages/dashboard/users"
import { routes as portfolioRoutes } from '@/routes/dashboard/portfolioRoutes'
import { routes as serviceRoutes } from '@/routes/dashboard/serviceRoutes'
import { routes as customerRoutes } from '@/routes/dashboard/customerRoutes'
import { routes as notificationRoutes } from '@/routes/dashboard/notificationRoutes'
import { routes as settingRoutes } from '@/routes/dashboard/settingRoutes'
import { routes as pageRoutes } from '@/routes/dashboard/pageRoutes'
import { routes as metadataRoutes } from '@/routes/dashboard/metadataRoutes'
// import { userRoutes } from '@/routes/dashboard/userRoutes'

export const dashboardRoutes = {
  path: "dashboard",
  handle: {
    breadcrumb: "Dashboard",
    sidebar: "Dashboard",
  },
  children: [
    { 
			index: true, 
			element: <Home /> 
		},
		portfolioRoutes,
		serviceRoutes,
		customerRoutes,
		notificationRoutes,
		settingRoutes,
		pageRoutes,
		metadataRoutes,
    {
      path: "user",
      handle: { breadcrumb: "User", sidebar: "User" },
			children: [
				{
					index: true,
      		element: <Users />,
				},
				{
					path: 'profile',
      		element: <Users />,
      		handle: { breadcrumb: "Profile", sidebar: "Profile" },
				}
			],
    },
  ],
};
