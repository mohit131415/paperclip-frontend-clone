import { format, formatDistanceToNow } from "date-fns"
import { STORAGE_KEYS } from "./constants"

// Date formatting
export const formatDate = (date, formatString = "PPP") => {
  if (!date) return ""
  return format(new Date(date), formatString)
}

export const formatRelativeDate = (date) => {
  if (!date) return ""
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

// String manipulation
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

export const generateSlug = (string) => {
  return string
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

// Array manipulation
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key]
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {})
}

export const sortBy = (array, key, order = "asc") => {
  return [...array].sort((a, b) => {
    if (order === "asc") {
      return a[key] > b[key] ? 1 : -1
    }
    return a[key] < b[key] ? 1 : -1
  })
}

// Object manipulation
export const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}

export const omit = (object, keys) => {
  const result = { ...object }
  keys.forEach((key) => delete result[key])
  return result
}

// Local storage helpers
export const getStorageItem = (key) => {
  try {
    const item = window.localStorage.getItem(STORAGE_KEYS[key])
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error)
    return null
  }
}

export const setStorageItem = (key, value) => {
  try {
    window.localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(value))
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error)
  }
}

export const removeStorageItem = (key) => {
  try {
    window.localStorage.removeItem(STORAGE_KEYS[key])
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error)
  }
}

// URL helpers
export const getQueryParams = (search = window.location.search) => {
  return Object.fromEntries(new URLSearchParams(search))
}

export const buildQueryString = (params) => {
  return new URLSearchParams(params).toString()
}

// Image helpers
export const getImageUrl = (path, options = {}) => {
  if (!path) return "/placeholder.svg"
  if (path.startsWith("http")) return path

  const { width, height, quality = 75 } = options
  let transformations = `q_${quality}`

  if (width) transformations += `,w_${width}`
  if (height) transformations += `,h_${height}`

  return `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${transformations}/${path}`
}

// Form helpers
export const serializeFormData = (formData) => {
  const object = {}
  formData.forEach((value, key) => {
    if (!Reflect.has(object, key)) {
      object[key] = value
      return
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]]
    }
    object[key].push(value)
  })
  return object
}

// Error helpers
export const getErrorMessage = (error) => {
  if (typeof error === "string") return error
  if (error.response?.data?.message) return error.response.data.message
  if (error.message) return error.message
  return "Something went wrong"
}

// Scroll helpers
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "auto",
  })
}

export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

// Device detection
export const isMobile = () => {
  return window.innerWidth <= 768
}

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024
}

export const isDesktop = () => {
  return window.innerWidth > 1024
}
