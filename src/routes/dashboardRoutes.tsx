import { Home } from "@/pages/dashboard"
import Users from "@/pages/dashboard/users"
import { portfolioRoutes } from '@/routes/dashboard/portfolioRoutes'
import { serviceRoutes } from '@/routes/dashboard/serviceRoutes'
import { customerRoutes } from '@/routes/dashboard/customerRoutes'
import { notificationRoutes } from '@/routes/dashboard/notificationRoutes'
import { settingRoutes } from '@/routes/dashboard/settingRoutes'
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
		// userRoutes,
    // {
    //   path: "portfolio",
    //   element: <Portfolio />,
    //   handle: { breadcrumb: "Portfolio", sidebar: "Portfolio" },
    // },
    // {
    //   path: "service",
    //   element: <Service />,
    //   handle: { breadcrumb: "Service", sidebar: "Service" },
    // },
    // {
    //   path: "customer",
    //   element: <Customer />,
    //   handle: { breadcrumb: "Customer", sidebar: "Customer" },
    // },
    // {
    //   path: "notification",
    //   element: <Notification />,
    //   handle: { breadcrumb: "Notification", sidebar: "Notification" },
    // },
    // {
    //   path: "setting",
    //   element: <Setting />,
    //   handle: { breadcrumb: "Setting", sidebar: "Setting" },
    // },
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
