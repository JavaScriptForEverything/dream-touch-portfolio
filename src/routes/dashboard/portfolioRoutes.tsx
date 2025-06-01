import { Portfolio, CreatePortfolio, EditPortfolio, ViewPortfolio } from '@/pages/dashboard/portfolio'

export const routes = {
	path: "portfolio",
	// element: <Portfolio />, 																			// Wrapper or Common for nested children
	handle: { breadcrumb: "Portfolio", sidebar: "Portfolio" }, 			// ...
	children: [

		{
			index: true, 										// */
			element: <Portfolio />,
			// handle: { breadcrumb: "Portfolio", sidebar: "Portfolio" },
		},

		{
			path: "create", 								// */edit
			element: <CreatePortfolio />,
			handle: { breadcrumb: "Create Portfolio", sidebar: "Create Portfolio" },
		},

		{
			path: "update/:slug", 					// */update/my-unique-slug-n
			element: <EditPortfolio />,
			// handle: { breadcrumb: "Update Portfolio", sidebar: "Update Portfolio" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Portfolio" 
			},
		},

		{
			path: "view/:slug", 						// */view/my-unique-slug-n
			element: <ViewPortfolio />,
			// handle: { breadcrumb: "View Portfolio", sidebar: "View Portfolio" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Portfolio Details" 
			},
		},

	]
}