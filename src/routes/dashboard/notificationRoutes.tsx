import { Notification, CreateNotification, EditNotification, ViewNotification } from '@/pages/dashboard/notification'

export const notificationRoutes = {
	path: "notification",
	handle: { breadcrumb: "Notification", sidebar: "Notification" }, 
	children: [

		{
			index: true,
			element: <Notification />,
		},

		{
			path: "create", 
			element: <CreateNotification />,
			handle: { breadcrumb: "Create Notification", sidebar: "Create Notification" },
		},

		{
			path: "update/:slug", 
			element: <EditNotification />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Notification" 
			},
		},

		{
			path: "view/:slug", 
			element: <ViewNotification />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Notification Details" 
			},
		},

	]
}