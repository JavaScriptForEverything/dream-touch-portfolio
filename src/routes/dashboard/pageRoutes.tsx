import { Page, CreatePage, EditPage, ViewPage } from '@/pages/dashboard/page'

export const routes = {
	path: "page",
	// element: <Page />, 																			
	handle: { breadcrumb: "Page", sidebar: "Page" }, 
	children: [

		{
			index: true, 				
			element: <Page />,
		},

		{
			path: "create", 			
			element: <CreatePage />,
			handle: { breadcrumb: "Create Page", sidebar: "Create Page" },
		},

		{
			path: "update/:slug", 	
			element: <EditPage />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Page" 
			},
		},

		{
			path: "view/:slug", 		
			element: <ViewPage />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Page Details" 
			},
		},

	]
}