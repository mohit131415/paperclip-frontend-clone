"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Users, Mail, IndianRupee } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/stats/dashboard")
      if (!response.ok) throw new Error("Failed to fetch dashboard statistics")
      const { data } = await response.json()
      setStats(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboardStats()
  }, []) //Added [] to specify dependencies

  if (error) {
    return <div className="text-red-500 p-4">Error loading dashboard data: {error}</div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900 text-white border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-20 bg-zinc-800" />
            ) : (
              <>
                <div className="text-2xl font-bold">{stats?.orders?.total || 0}</div>
                <p className="text-xs text-gray-400">
                  Pending orders: {stats?.orders?.byStatus?.find((s) => s._id === "pending")?.count || 0}
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 text-white border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-20 bg-zinc-800" />
            ) : (
              <>
                <div className="text-2xl font-bold">₹{stats?.orders?.totalAmount?.toLocaleString("en-IN") || 0}</div>
                <p className="text-xs text-gray-400">
                  {stats?.orders?.byStatus?.find((s) => s._id === "delivered")?.count || 0} completed orders
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 text-white border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <Mail className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-20 bg-zinc-800" />
            ) : (
              <>
                <div className="text-2xl font-bold">{stats?.contacts?.total || 0}</div>
                <p className="text-xs text-gray-400">Unread messages: {stats?.contacts?.unread || 0}</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 text-white border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Order Status</CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-20 w-full bg-zinc-800" />
            ) : (
              <div className="space-y-2">
                {stats?.orders?.byStatus ? (
                  stats.orders.byStatus.map((status) => (
                    <div key={status._id} className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{status._id}</span>
                      <span className="font-medium">{status.count}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No orders yet</div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card className="bg-zinc-900 text-white border-zinc-800 mt-6">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-zinc-800" />
              <Skeleton className="h-4 w-3/4 bg-zinc-800" />
              <Skeleton className="h-4 w-5/6 bg-zinc-800" />
            </div>
          ) : stats?.orders?.recentOrders?.length > 0 ? (
            <div className="space-y-4">
              {stats.orders.recentOrders.map((order) => (
                <div key={order._id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{order.customerName}</p>
                    <p className="text-sm text-gray-400">Order #{order._id.slice(-6).toUpperCase()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{order.totalAmount}</p>
                    <p className="text-sm text-gray-400">{new Date(order.orderDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-400">No recent activity</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

