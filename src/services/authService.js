import api from "./api"

export const authService = {
  // Register new user
  register: async (userData) => {
    const response = await api.post("/auth/register", userData)
    if (response.token) {
      localStorage.setItem("token", response.token)
    }
    return response
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials)
    if (response.token) {
      localStorage.setItem("token", response.token)
    }
    return response
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("token")
  },

  // Get user profile
  getProfile: async () => {
    return await api.get("/auth/profile")
  },

  // Update user profile
  updateProfile: async (data) => {
    return await api.put("/auth/profile", data)
  },

  // Update password
  updatePassword: async (currentPassword, newPassword) => {
    const response = await api.put("/auth/password", {
      currentPassword,
      newPassword,
    })
    return response.data
  },
  // Request password reset
  requestPasswordReset: async (email) => {
    return await api.post("/auth/forgot-password", { email })
  },

  // Reset password
  resetPassword: async (token, password) => {
    return await api.post("/auth/reset-password", { token, password })
  },

  // Add address
  addAddress: async (address) => {
    return await api.post("/auth/address", address)
  },

  // Update address
  updateAddress: async (addressId, address) => {
    return await api.put(`/auth/address/${addressId}`, address)
  },

  // Delete address
  deleteAddress: async (addressId) => {
    return await api.delete(`/auth/address/${addressId}`)
  },

  // Set default address
  setDefaultAddress: async (addressId) => {
    return await api.put(`/auth/address/${addressId}/default`)
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("token")
  },
}
