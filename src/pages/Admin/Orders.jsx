"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders")

      if (!response.ok) {
        throw new Error("Failed to fetch orders")
      }

      const data = await response.json()
      setOrders(data.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const updateOrderStatus = async (orderId, newStatus) => {
    setIsUpdating(true)
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Failed to update status")
      }

      // Update orders list
      setOrders(orders.map((order) => (order._id === orderId ? { ...order, status: newStatus } : order)))
    } catch (err) {
      setError(err.message)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "processing":
        return "bg-blue-500"
      case "shipped":
        return "bg-green-500"
      case "delivered":
        return "bg-green-700"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Orders</h2>
      </div>

      <div className="border border-zinc-800 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800">
              <TableHead className="text-gray-400">Order ID</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Customer</TableHead>
              <TableHead className="text-gray-400">Total</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-400 h-32">
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order._id} className="border-zinc-800">
                  <TableCell className="text-white font-mono">{order._id.slice(-6).toUpperCase()}</TableCell>
                  <TableCell className="text-white">{formatDate(order.orderDate)}</TableCell>
                  <TableCell className="text-white">{order.customerName}</TableCell>
                  <TableCell className="text-white">INR {order.totalAmount}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${getStatusColor(order.status)} text-white border-0`}>
                      {order.status || "pending"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-white hover:text-gray-300 underline"
                    >
                      View Details
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Order ID</h4>
                  <p className="font-mono">{selectedOrder._id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Date</h4>
                  <p>{formatDate(selectedOrder.orderDate)}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Customer Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">{selectedOrder.customerName}</p>
                    <p className="text-gray-400">{selectedOrder.email}</p>
                    <p className="text-gray-400">{selectedOrder.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">{selectedOrder.address.street}</p>
                    <p className="text-gray-400">
                      {selectedOrder.address.city}, {selectedOrder.address.state}
                    </p>
                    <p className="text-gray-400">{selectedOrder.address.pincode}</p>
                  </div>
                </div>
              </div>

              {selectedOrder.gstNumber && (
                <div>
                  <h4 className="text-sm font-medium text-gray-400">GST Number</h4>
                  <p>{selectedOrder.gstNumber}</p>
                </div>
              )}

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Order Items</h4>
                <div className="border border-zinc-800 rounded-lg divide-y divide-zinc-800">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">
                          Color: {item.color.name} | Quantity: {item.quantity}
                        </p>
                      </div>
                      <p>INR {item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Status</h4>
                  <Select
                    value={selectedOrder.status || "pending"}
                    onValueChange={(value) => updateOrderStatus(selectedOrder._id, value)}
                    disabled={isUpdating}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-medium text-gray-400">Total Amount</h4>
                  <p className="text-xl font-medium">INR {selectedOrder.totalAmount}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

