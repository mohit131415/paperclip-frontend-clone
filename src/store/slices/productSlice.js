import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { productService } from "@/services/productService"

// Async thunks
export const fetchProducts = createAsyncThunk("products/fetchAll", async ({ page = 1, filters = {} } = {}) => {
  const response = await productService.getProducts(page, filters)
  return response
})

export const fetchProductById = createAsyncThunk("products/fetchById", async (productId) => {
  const response = await productService.getProduct(productId)
  return response
})

export const fetchFeaturedProducts = createAsyncThunk("products/fetchFeatured", async () => {
  const response = await productService.getFeaturedProducts()
  return response
})

export const fetchNewArrivals = createAsyncThunk("products/fetchNewArrivals", async () => {
  const response = await productService.getNewArrivals()
  return response
})

// Add category products thunk
export const fetchCategoryProducts = createAsyncThunk(
  "products/fetchCategoryProducts",
  async ({ categoryId, page = 1, filters = {} }) => {
    const response = await productService.getCategoryProducts(categoryId, page, filters)
    return response
  },
)

export const searchProducts = createAsyncThunk("products/search", async (query) => {
  const response = await productService.searchProducts(query)
  return response
})

export const fetchRelatedProducts = createAsyncThunk("products/fetchRelated", async (productId) => {
  const response = await productService.getRelatedProducts(productId)
  return response
})

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    featuredProducts: [],
    newArrivals: [],
    categoryProducts: [], // Add category products to state
    currentProduct: null,
    relatedProducts: [],
    searchResults: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null
    },
    clearSearchResults: (state) => {
      state.searchResults = []
    },
    clearCategoryProducts: (state) => {
      state.categoryProducts = []
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Products
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload.products
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Featured Products
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.featuredProducts = action.payload
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch New Arrivals
      .addCase(fetchNewArrivals.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchNewArrivals.fulfilled, (state, action) => {
        state.isLoading = false
        state.newArrivals = action.payload
      })
      .addCase(fetchNewArrivals.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Category Products
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.categoryProducts = action.payload.products
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
        }
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Search Products
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.searchResults = action.payload
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Related Products
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.relatedProducts = action.payload
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { clearError, clearCurrentProduct, clearSearchResults, clearCategoryProducts } = productSlice.actions
export default productSlice.reducer

