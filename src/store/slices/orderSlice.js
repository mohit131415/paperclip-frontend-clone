import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { orderService } from "@/services/orderService"

// Async thunks
export const createOrder = createAsyncThunk("orders/create", async (orderData) => {
  const response = await orderService.createOrder(orderData)
  return response
})

export const fetchOrders = createAsyncThunk("orders/fetchAll", async () => {
  const response = await orderService.getUserOrders()
  return response
})

export const fetchOrderById = createAsyncThunk("orders/fetchById", async (orderId) => {
  const response = await orderService.getOrder(orderId)
  return response
})

export const cancelOrder = createAsyncThunk("orders/cancel", async ({ orderId, reason }) => {
  const response = await orderService.cancelOrder(orderId, reason)
  return response
})

export const trackOrder = createAsyncThunk("orders/track", async (orderId) => {
  const response = await orderService.trackOrder(orderId)
  return response
})

// Slice
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    currentOrder: null,
    trackingInfo: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentOrder = action.payload
        state.orders.unshift(action.payload)
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Orders
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.orders = action.payload
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Order by ID
      .addCase(fetchOrderById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentOrder = action.payload
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Cancel Order
      .addCase(cancelOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex((order) => order._id === action.payload._id)
        if (index !== -1) {
          state.orders[index] = action.payload
        }
        if (state.currentOrder?._id === action.payload._id) {
          state.currentOrder = action.payload
        }
      })

      // Track Order
      .addCase(trackOrder.fulfilled, (state, action) => {
        state.trackingInfo = action.payload
      })
  },
})

export const { clearError, clearCurrentOrder } = orderSlice.actions
export default orderSlice.reducer

