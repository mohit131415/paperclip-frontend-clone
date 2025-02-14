import { STORAGE_KEYS } from "./constants"

class Storage {
  constructor(storage = window.localStorage) {
    this.storage = storage
  }

  // Get item from storage
  get(key) {
    try {
      const item = this.storage.getItem(STORAGE_KEYS[key])
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(`Error reading ${key} from storage:`, error)
      return null
    }
  }

  // Set item in storage
  set(key, value) {
    try {
      this.storage.setItem(STORAGE_KEYS[key], JSON.stringify(value))
      return true
    } catch (error) {
      console.error(`Error saving ${key} to storage:`, error)
      return false
    }
  }

  // Remove item from storage
  remove(key) {
    try {
      this.storage.removeItem(STORAGE_KEYS[key])
      return true
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error)
      return false
    }
  }

  // Clear all items from storage
  clear() {
    try {
      this.storage.clear()
      return true
    } catch (error) {
      console.error("Error clearing storage:", error)
      return false
    }
  }

  // Check if key exists in storage
  has(key) {
    return STORAGE_KEYS[key] in this.storage
  }

  // Get all keys in storage
  keys() {
    return Object.keys(this.storage)
  }

  // Get storage length
  get length() {
    return this.storage.length
  }

  // Auth specific methods
  getToken() {
    return this.get("TOKEN")
  }

  setToken(token) {
    return this.set("TOKEN", token)
  }

  removeToken() {
    return this.remove("TOKEN")
  }

  getUser() {
    return this.get("USER")
  }

  setUser(user) {
    return this.set("USER", user)
  }

  removeUser() {
    return this.remove("USER")
  }

  // Cart specific methods
  getCart() {
    return this.get("CART") || { items: [], total: 0 }
  }

  setCart(cart) {
    return this.set("CART", cart)
  }

  clearCart() {
    return this.remove("CART")
  }

  // Wishlist specific methods
  getWishlist() {
    return this.get("WISHLIST") || []
  }

  setWishlist(wishlist) {
    return this.set("WISHLIST", wishlist)
  }

  clearWishlist() {
    return this.remove("WISHLIST")
  }

  // Theme specific methods
  getTheme() {
    return this.get("THEME") || "light"
  }

  setTheme(theme) {
    return this.set("THEME", theme)
  }

  // Search history methods
  getSearchHistory() {
    return this.get("SEARCH_HISTORY") || []
  }

  addToSearchHistory(query) {
    const history = this.getSearchHistory()
    const updatedHistory = [query, ...history.filter((q) => q !== query)].slice(0, 10)
    return this.set("SEARCH_HISTORY", updatedHistory)
  }

  clearSearchHistory() {
    return this.remove("SEARCH_HISTORY")
  }
}

// Create and export a singleton instance
const storage = new Storage()
export default storage

