import api from "./api"

export const productService = {
  getProducts: async (page = 1, filters = {}) => {
    const response = await api.get("/products", { params: { page, ...filters } })
    return response.data
  },
  
  getCategoryProducts: async (categoryId, page = 1, filters = {}) => {
    const response = await api.get(`/categories/${categoryId}/products`, {
      params: { page, ...filters },
    })
    return response.data
  },

  getProduct: async (productId) => {
    const response = await api.get(`/products/${productId}`)
    return response.data
  },

  getFeaturedProducts: async () => {
    const response = await api.get("/products/featured")
    return response.data
  },

  // Add new arrivals endpoint
  getNewArrivals: async () => {
    const response = await api.get("/products/new-arrivals")
    return response.data
  },

  searchProducts: async (query) => {
    const response = await api.get("/products/search", { params: { query } })
    return response.data
  },

  getRelatedProducts: async (productId) => {
    const response = await api.get(`/products/${productId}/related`)
    return response.data
  },

  getCategories: async () => {
    const response = await api.get("/categories")
    return response.data
  },

  getCategory: async (identifier) => {
    const response = await api.get(`/categories/${identifier}`)
    return response.data
  },

  getFeaturedCategories: async () => {
    const response = await api.get("/categories/featured")
    return response.data
  },
}

