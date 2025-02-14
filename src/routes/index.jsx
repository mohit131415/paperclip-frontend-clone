import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { userRoutes } from "./userRoutes"
import { adminRoutes } from "./adminRoutes"
import { ProtectedRoute } from "./ProtectedRoute"
import RootLayout from "@/layouts/RootLayout"
import AdminLayout from "@/layouts/AdminLayout"
import AdminLogin from "@/pages/Admin/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: userRoutes,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

