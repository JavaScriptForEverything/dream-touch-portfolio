import { Service, CreateService, EditService, ViewService } from '@/pages/dashboard/service'

export const routes = {
	path: "service",
	// element: <Service />, 																			// Wrapper or Common for nested children
	handle: { breadcrumb: "Service", sidebar: "Service" }, 			// ...
	children: [

		{
			index: true, 										// */
			element: <Service />,
			// handle: { breadcrumb: "Service", sidebar: "Service" },
		},

		{
			path: "create", 								// */edit
			element: <CreateService />,
			handle: { breadcrumb: "Create Service", sidebar: "Create Service" },
		},

		{
			path: "update/:slug", 					// */update/my-unique-slug-n
			element: <EditService />,
			// handle: { breadcrumb: "Update Service", sidebar: "Update Service" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Service" 
			},
		},

		{
			path: "view/:slug", 						// */view/my-unique-slug-n
			element: <ViewService />,
			// handle: { breadcrumb: "View Service", sidebar: "View Service" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Service Details" 
			},
		},

	]
}