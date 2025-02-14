import api from "./api"

export const wishlistService = {
  // Get wishlist
  getWishlist: async () => {
    return await api.get("/wishlist")
  },

  // Add to wishlist
  addToWishlist: async (productId) => {
    return await api.post("/wishlist/add", { productId })
  },

  // Remove from wishlist
  removeFromWishlist: async (productId) => {
    return await api.delete(`/wishlist/remove/${productId}`)
  },

  // Clear wishlist
  clearWishlist: async () => {
    return await api.delete("/wishlist/clear")
  },

  // Check if product is in wishlist
  checkWishlistItem: async (productId) => {
    return await api.get(`/wishlist/check/${productId}`)
  },

  // Move all items to cart
  moveAllToCart: async () => {
    return await api.post("/wishlist/move-to-cart")
  },

  // Share wishlist
  shareWishlist: async (email) => {
    return await api.post("/wishlist/share", { email })
  },

  // Get shared wishlist
  getSharedWishlist: async (shareId) => {
    return await api.get(`/wishlist/shared/${shareId}`)
  },
}

