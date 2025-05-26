// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { requireAuth } from "@/utils/requireAuth";

import MainLayout from "@/layouts/mainLayout";
import { Home } from "@/pages/dashboard/home";

import Users from "@/pages/dashboard/users";
import { Setting } from "@/pages/dashboard/setting";

import RolesHome from "@/pages/roles/home";
import Permissions from "@/pages/roles/permissions";


import PublicLayout from "@/layouts/publicLayout";
import Login from "@/pages/login";
import Register from "@/pages/register";

import ErrorPage from "@/components/errorPage";
import { loginAction } from '@/actions/loginAction'
import Demo from '@/pages/demo/demo'

/*
	/dashboard
		- /
		- /portfolio
		- /service
		- /customer
		- /notification
		- /setting

	/user
		- /
		- /profile
		- /setting
*/

export const router = createBrowserRouter([
  {
    path: "/",
    loader: requireAuth,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        handle: { 
					breadcrumb: "Dashboard", 
					sidebar: "Dashboard" 
				},
        children: [
          { 
						index: true, 
						element: <Home /> 
					},
          { 
						path: "portfolio", 
						element: <Users />, 
						handle: { 
							breadcrumb: "portfolio", 
							sidebar: "portfolio" 
						} 
					},
          { 
						path: "service", 
						element: <Users />, 
						handle: { 
							breadcrumb: "service", 
							sidebar: "service" 
						} 
					},
          { 
						path: "customer", 
						element: <Users />, 
						handle: { 
							breadcrumb: "customer", 
							sidebar: "customer" 
						} 
					},
          { 
						path: "notification", 
						element: <Users />, 
						handle: { 
							breadcrumb: "notification", 
							sidebar: "notification" 
						} 
					},
          { 
						path: "setting", 
						element: <Users />, 
						handle: { 
							breadcrumb: "setting", 
							sidebar: "setting" 
						} 
					},
          // { 
					// 	path: "setting", 
					// 	element: <Setting />, 
					// 	lazy: async () => {
					// 		const module = await import('@/pages/dashboard/setting')
					// 		return {
					// 			element: <module.default />
					// 		}
					// 	},

					// 	handle: { 
					// 		breadcrumb: "Setting", 
					// 		sidebar: "Setting" 
					// 	},

					// },
        ],
      },
			{
				path: 'user',
				children: [
          { 
						path: "profile", 
						element: <Setting />, 
						handle: { 
							breadcrumb: "profile", 
							sidebar: "profile" 
						} 
					},
          { 
						path: "setting", 
						element: <Setting />, 
						handle: { 
							breadcrumb: "setting", 
							sidebar: "setting" 
						} 
					},

				]
			},
      {
        path: "roles",
        handle: { 
					breadcrumb: "Roles", 
					sidebar: "Roles" 
				},
        children: [
          { 
						index: true, 
						element: <RolesHome /> 
					},
          { 
						path: "permissions", 
						element: <Permissions />, 
						handle: { 
							breadcrumb: "Permissions", 
							sidebar: "Permissions" 
						} 
					},
        ],
      },
    ],
  },
  {
    path: "/",
		// loader: async () => {

		// 	const data = await fetch(`http://localhost:5000/api/users`).then( res => res.json() )
		// 	// console.log(data)
		// 	return data

		// },
    element: <PublicLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { 
				path: "login", 
				element: <Login /> ,
				action: loginAction
			},
      { 
				path: "register", 
				element: <Register /> 
			},
    ],
  },
	{
		path: '/',
		children: [
			{
				path: 'demo',
				element: <Demo />
			}
		]
	}
])