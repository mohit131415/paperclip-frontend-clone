import api from "./api"

export const cartService = {
  // Get cart
  getCart: async () => {
    return await api.get("/cart")
  },

  // Add item to cart
  addToCart: async (productId, quantity = 1, customization = null) => {
    return await api.post("/cart/add", {
      productId,
      quantity,
      customization,
    })
  },

  // Update cart item
  updateCartItem: async (productId, quantity) => {
    return await api.put("/cart/update", {
      productId,
      quantity,
    })
  },

  // Remove item from cart
  removeFromCart: async (productId) => {
    return await api.delete(`/cart/remove/${productId}`)
  },

  // Clear cart
  clearCart: async () => {
    return await api.delete("/cart/clear")
  },

  // Apply coupon
  applyCoupon: async (code) => {
    return await api.post("/cart/coupon", { code })
  },

  // Remove coupon
  removeCoupon: async () => {
    return await api.delete("/cart/coupon")
  },

  // Get shipping rates
  getShippingRates: async (address) => {
    return await api.post("/cart/shipping-rates", address)
  },

  // Save for later
  saveForLater: async (productId) => {
    return await api.post(`/cart/save-for-later/${productId}`)
  },

  // Move to cart from saved
  moveToCart: async (productId) => {
    return await api.post(`/cart/move-to-cart/${productId}`)
  },

  // Get saved items
  getSavedItems: async () => {
    return await api.get("/cart/saved-items")
  },
}

