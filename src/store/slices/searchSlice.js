import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { productService } from "@/services/productService"

// Async thunks
export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async ({ query, filters = {}, sort = "", page = 1 }) => {
    const response = await productService.searchProducts(query, { ...filters, sort, page })
    return response
  },
)

// Slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    suggestions: [],
    filters: {
      category: null,
      priceRange: { min: 0, max: 0 },
      inStock: false,
    },
    sort: "-createdAt",
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    clearFilters: (state) => {
      state.filters = {
        category: null,
        priceRange: { min: 0, max: 0 },
        inStock: false,
      }
    },
    clearResults: (state) => {
      state.results = []
      state.totalPages = 0
      state.currentPage = 1
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.results = action.payload.products
        state.totalPages = action.payload.pages
        state.currentPage = action.payload.page
        // Update price range from results if not set
        if (state.filters.priceRange.max === 0 && action.payload.products.length > 0) {
          const prices = action.payload.products.map((product) => product.price)
          state.filters.priceRange = {
            min: Math.min(...prices),
            max: Math.max(...prices),
          }
        }
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { setQuery, setFilters, setSort, clearFilters, clearResults, clearError } = searchSlice.actions
export default searchSlice.reducer