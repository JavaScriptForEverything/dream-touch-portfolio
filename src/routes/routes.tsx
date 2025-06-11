import { createBrowserRouter } from "react-router-dom"
import { requireAuth } from "@/utils/requireAuth"
// import PublicLayout from "@/layouts/publicLayout"
import MainLayout from "@/layouts/mainLayout"
import ErrorPage from "@/components/errorPage"

// Modular routes
import { dashboardRoutes } from '@/routes/dashboardRoutes'
import { authRoutes } from '@/routes/authRoutes'

export const router = createBrowserRouter([
  {
    path: "/",
    loader: requireAuth,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      dashboardRoutes,
      // userRoutes,
      // rolesRoutes,
    ],
  },
  // publicRoutes,
  // demoRoutes,
	authRoutes
]);
