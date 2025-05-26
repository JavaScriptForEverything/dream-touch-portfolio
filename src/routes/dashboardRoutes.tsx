import { Home, Portfolio, Service, Customer, Notification, Setting } from "@/pages/dashboard"
import Users from "@/pages/dashboard/users"

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
    {
      path: "portfolio",
      element: <Portfolio />,
      handle: { breadcrumb: "Portfolio", sidebar: "Portfolio" },
    },
    {
      path: "service",
      element: <Service />,
      handle: { breadcrumb: "Service", sidebar: "Service" },
    },
    {
      path: "customer",
      element: <Customer />,
      handle: { breadcrumb: "Customer", sidebar: "Customer" },
    },
    {
      path: "notification",
      element: <Notification />,
      handle: { breadcrumb: "Notification", sidebar: "Notification" },
    },
    {
      path: "setting",
      element: <Setting />,
      handle: { breadcrumb: "Setting", sidebar: "Setting" },
    },
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
