import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { productService } from "@/services/productService"

// Async thunks
export const fetchCategories = createAsyncThunk("categories/fetchAll", async () => {
  const response = await productService.getCategories()
  return response
})

export const fetchCategoryById = createAsyncThunk("categories/fetchById", async (identifier) => {
  const response = await productService.getCategory(identifier)
  return response
})

export const fetchFeaturedCategories = createAsyncThunk("categories/fetchFeatured", async () => {
  const response = await productService.getFeaturedCategories()
  return response
})

// Slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    currentCategory: null,
    featuredCategories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearCurrentCategory: (state) => {
      state.currentCategory = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Category by ID
      .addCase(fetchCategoryById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentCategory = action.payload
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Featured Categories
      .addCase(fetchFeaturedCategories.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchFeaturedCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.featuredCategories = action.payload
      })
      .addCase(fetchFeaturedCategories.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { clearError, clearCurrentCategory } = categorySlice.actions
export default categorySlice.reducer

