import api from "./api"

export const orderService = {
  // Create new order
  createOrder: async (orderData) => {
    return await api.post("/orders", orderData)
  },

  // Get order by ID
  getOrder: async (orderId) => {
    return await api.get(`/orders/${orderId}`)
  },

  // Get user orders
  getUserOrders: async (params) => {
    return await api.get("/orders/myorders", { params })
  },

  // Update order to paid
  updateOrderToPaid: async (orderId, paymentResult) => {
    return await api.put(`/orders/${orderId}/pay`, paymentResult)
  },

  // Cancel order
  cancelOrder: async (orderId, reason) => {
    return await api.put(`/orders/${orderId}/cancel`, { reason })
  },

  // Track order
  trackOrder: async (orderId) => {
    return await api.get(`/orders/${orderId}/track`)
  },

  // Get order invoice
  getOrderInvoice: async (orderId) => {
    return await api.get(`/orders/${orderId}/invoice`, {
      responseType: "blob",
    })
  },

  // Verify payment
  verifyPayment: async (paymentId, orderId, signature) => {
    return await api.post("/orders/verify-payment", {
      paymentId,
      orderId,
      signature,
    })
  },

  // Request return/refund
  requestReturn: async (orderId, data) => {
    return await api.post(`/orders/${orderId}/return`, data)
  },

  // Get return status
  getReturnStatus: async (returnId) => {
    return await api.get(`/orders/return/${returnId}`)
  },
}

