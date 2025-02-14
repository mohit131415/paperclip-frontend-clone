import { lazy } from "react"

// Lazy loaded admin components
const Dashboard = lazy(() => import("@/pages/Admin/Dashboard"))
const Orders = lazy(() => import("@/pages/Admin/Orders"))
const ContactResponses = lazy(() => import("@/pages/Admin/ContactResponses"))

export const adminRoutes = [
  {
    path: "", // This will match /admin exactly
    element: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "orders", // This will match /admin/orders
    element: <Orders />,
    title: "Orders",
  },
  {
    path: "contact-responses", // This will match /admin/contact-responses
    element: <ContactResponses />,
    title: "Contact Form Responses",
  },
]

