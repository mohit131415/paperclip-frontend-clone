"use client"

import { useState } from "react"
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { LayoutDashboard, ShoppingCart, MessageSquare, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAdmin } from "@/hooks/useAdmin"

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAdmin()

  const navigationItems = [
    {
      path: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      path: "/admin/orders",
      icon: ShoppingCart,
      label: "Orders",
    },
    {
      path: "/admin/contact-responses",
      icon: MessageSquare,
      label: "Contact Responses",
    },
  ]

  const handleLogout = () => {
    logout()
    navigate("/admin/login")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-800">
          <div className="mb-10 px-2">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          </div>

          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center p-2 text-base rounded-lg
                      ${isActive ? "bg-slate-700 text-white" : "text-gray-400 hover:bg-slate-700 hover:text-white"}
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="ml-3">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="absolute bottom-4 left-0 right-0 px-3">
            <Button variant="destructive" className="w-full" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 lg:ml-64 ${sidebarOpen ? "ml-64" : "0"}`}>
        <div className="p-4 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

