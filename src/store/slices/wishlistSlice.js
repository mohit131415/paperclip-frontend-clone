import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { wishlistService } from "@/services/wishlistService"

// Async thunks
export const fetchWishlist = createAsyncThunk("wishlist/fetch", async () => {
  const response = await wishlistService.getWishlist()
  return response
})

export const addToWishlist = createAsyncThunk("wishlist/add", async (productId) => {
  const response = await wishlistService.addToWishlist(productId)
  return response
})

export const removeFromWishlist = createAsyncThunk("wishlist/remove", async (productId) => {
  await wishlistService.removeFromWishlist(productId)
  return productId
})

export const clearWishlist = createAsyncThunk("wishlist/clear", async () => {
  await wishlistService.clearWishlist()
})

export const moveAllToCart = createAsyncThunk("wishlist/moveToCart", async () => {
  const response = await wishlistService.moveAllToCart()
  return response
})

// Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Add to Wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Remove from Wishlist
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload)
      })

      // Clear Wishlist
      .addCase(clearWishlist.fulfilled, (state) => {
        state.items = []
      })

      // Move All to Cart
      .addCase(moveAllToCart.fulfilled, (state) => {
        state.items = []
      })
  },
})

export const { clearError } = wishlistSlice.actions
export default wishlistSlice.reducer

