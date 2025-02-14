'use client'

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader } from "@/components/common/Loader"
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react'

const accountTabs = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "orders",
    label: "Orders",
    icon: Package,
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    id: "addresses",
    label: "Addresses",
    icon: MapPin,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
]

export default function AccountPage() {
  const navigate = useNavigate()
  const { user, isLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login?redirect=/account")
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return <Loader />
  }

  if (!user) {
    return null
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-gray-100 p-2">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="truncate">{user.name}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TabsList className="flex flex-col w-full gap-2">
                {accountTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="w-full justify-start gap-2 px-4"
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 px-4 text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </TabsList>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 lg:col-span-9 lg:mt-0">
          <Card>
            <Tabs defaultValue="profile" className="w-full">
              <TabsContent value="profile">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Name
                      </label>
                      <p className="mt-1">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <p className="mt-1">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Phone
                      </label>
                      <p className="mt-1">{user.phone || "Not provided"}</p>
                    </div>
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="orders">
                <CardHeader>
                  <CardTitle>Your Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/account/orders")}
                  >
                    View All Orders
                  </Button>
                </CardContent>
              </TabsContent>

              <TabsContent value="wishlist">
                <CardHeader>
                  <CardTitle>Your Wishlist</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/account/wishlist")}
                  >
                    View Wishlist
                  </Button>
                </CardContent>
              </TabsContent>

              <TabsContent value="addresses">
                <CardHeader>
                  <CardTitle>Your Addresses</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/account/addresses")}
                  >
                    Manage Addresses
                  </Button>
                </CardContent>
              </TabsContent>

              <TabsContent value="settings">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/account/settings")}
                  >
                    Manage Settings
                  </Button>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
