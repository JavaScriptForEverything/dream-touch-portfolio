import { Metadata, CreateMetadata, EditMetadata, ViewMetadata } from '@/pages/dashboard/metadata'

export const routes = {
	path: "metadata",
	// element: <Page />, 																			
	handle: { breadcrumb: "Metadata", sidebar: "Metadata" }, 
	children: [

		{
			index: true, 				
			element: <Metadata />,
		},

		{
			path: "create", 			
			element: <CreateMetadata />,
			handle: { breadcrumb: "Create Metadata", sidebar: "Create Metadata" },
		},

		{
			path: "update/:slug", 	
			element: <EditMetadata />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Metadata" 
			},
		},

		{
			path: "view/:slug", 		
			element: <ViewMetadata />,
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Metadata Details" 
			},
		},

	]
}