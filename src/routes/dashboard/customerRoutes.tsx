import { Customer, CreateCustomer, EditCustomer, ViewCustomer } from '@/pages/dashboard/customer'

export const customerRoutes = {
	path: "customer",
	// element: <Customer />, 																			// Wrapper or Common for nested children
	handle: { breadcrumb: "Customer", sidebar: "Customer" }, 			// ...
	children: [

		{
			index: true, 										// */
			element: <Customer />,
			// handle: { breadcrumb: "Customer", sidebar: "Customer" },
		},

		{
			path: "create", 								// */edit
			element: <CreateCustomer />,
			handle: { breadcrumb: "Create Customer", sidebar: "Create Customer" },
		},

		{
			path: "update/:slug", 					// */update/my-unique-slug-n
			element: <EditCustomer />,
			// handle: { breadcrumb: "Update Customer", sidebar: "Update Customer" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Update Customer" 
			},
		},

		{
			path: "view/:slug", 						// */view/my-unique-slug-n
			element: <ViewCustomer />,
			// handle: { breadcrumb: "View Customer", sidebar: "View Customer" },
			handle: { 
				breadcrumb: (params: { slug: string }) => params.slug,
				sidebar: "Customer Details" 
			},
		},

	]
}