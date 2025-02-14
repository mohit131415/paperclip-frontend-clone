import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { cartService } from "@/services/cartService"

// Async thunks
export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const response = await cartService.getCart()
  return response
})

export const addToCart = createAsyncThunk("cart/add", async ({ productId, quantity, customization }) => {
  const response = await cartService.addToCart(productId, quantity, customization)
  return response
})

export const updateCartItem = createAsyncThunk("cart/update", async ({ productId, quantity }) => {
  const response = await cartService.updateCartItem(productId, quantity)
  return response
})

export const removeFromCart = createAsyncThunk("cart/remove", async (productId) => {
  await cartService.removeFromCart(productId)
  return productId
})

export const clearCart = createAsyncThunk("cart/clear", async () => {
  await cartService.clearCart()
})

export const applyCoupon = createAsyncThunk("cart/applyCoupon", async (code) => {
  const response = await cartService.applyCoupon(code)
  return response
})

export const removeCoupon = createAsyncThunk("cart/removeCoupon", async () => {
  await cartService.removeCoupon()
})

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subtotal: 0,
    total: 0,
    shippingCost: 0,
    tax: 0,
    appliedCoupon: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    updateTotals: (state) => {
      state.subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      state.tax = state.subtotal * 0.18 // 18% GST
      state.shippingCost = state.subtotal > 1000 ? 0 : 100 // Free shipping over ₹1000
      state.total = state.subtotal + state.tax + state.shippingCost

      if (state.appliedCoupon) {
        if (state.appliedCoupon.type === "percentage") {
          state.total = state.total * (1 - state.appliedCoupon.discount / 100)
        } else {
          state.total = state.total - state.appliedCoupon.discount
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload.items
        state.appliedCoupon = action.payload.appliedCoupon
        cartSlice.caseReducers.updateTotals(state)
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload.items
        cartSlice.caseReducers.updateTotals(state)
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Update Cart Item
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items
        cartSlice.caseReducers.updateTotals(state)
      })

      // Remove from Cart
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.product._id !== action.payload)
        cartSlice.caseReducers.updateTotals(state)
      })

      // Clear Cart
      .addCase(clearCart.fulfilled, (state) => {
        state.items = []
        state.appliedCoupon = null
        cartSlice.caseReducers.updateTotals(state)
      })

      // Apply Coupon
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.appliedCoupon = action.payload
        cartSlice.caseReducers.updateTotals(state)
      })

      // Remove Coupon
      .addCase(removeCoupon.fulfilled, (state) => {
        state.appliedCoupon = null
        cartSlice.caseReducers.updateTotals(state)
      })
  },
})

export const { clearError } = cartSlice.actions
export default cartSlice.reducer

