import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOrders } from "@/store/slices/orderSlice"
import { formatDate, formatRelativeDate } from "@/lib/utils"
import { Loader } from "@/components/common/Loader"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

function OrderStatusBadge({ status }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-green-100 text-green-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  }

  return (
    <Badge variant="outline" className={statusStyles[status.toLowerCase()] || "bg-gray-100"}>
      {status}
    </Badge>
  )
}

export function Orders() {
  const dispatch = useDispatch()
  const { orders, isLoading, error } = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  if (isLoading) return <Loader />
  if (error) return <div>Error: {error}</div>
  if (!orders.length) return <div>No orders found</div>

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Orders</h2>
        <p className="text-muted-foreground">View and track all your orders</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">#{order._id.slice(-6)}</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div>{formatDate(order.createdAt)}</div>
                  <div className="text-sm text-muted-foreground">{formatRelativeDate(order.createdAt)}</div>
                </div>
              </TableCell>
              <TableCell>
                <OrderStatusBadge status={order.status} />
              </TableCell>
              <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Add default export
export default Orders

