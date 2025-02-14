// API Constants
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
export const CLOUDINARY_URL = "https://res.cloudinary.com/paperclip-store/image/upload"

// Route Constants
export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
  LOGIN: "/login",
  REGISTER: "/register",
  WISHLIST: "/wishlist",
  CUSTOM_PROJECTS: "/custom-projects",
  COLLABORATIONS: "/collaborations",
  BECOME_RESELLER: "/become-reseller",
  CONTACT: "/contact",
}

// Product Constants
export const SORT_OPTIONS = [
  { label: "Newest First", value: "-createdAt" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Popularity", value: "-numReviews" },
  { label: "Best Rating", value: "-rating" },
]

export const PRODUCT_CATEGORIES = [
  "Notebooks",
  "Planners",
  "Diaries",
  "Stationery Sets",
  "Gift Items",
  "Corporate Gifts",
]

// Order Constants
export const ORDER_STATUS = {
  PROCESSING: "Processing",
  CONFIRMED: "Confirmed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
}

export const PAYMENT_METHODS = {
  CARD: "card",
  UPI: "upi",
  COD: "cod",
}

// Form Constants
export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
]

// Validation Constants
export const PASSWORD_MIN_LENGTH = 6
export const PHONE_REGEX = /^[6-9]\d{9}$/
export const PINCODE_REGEX = /^[1-9][0-9]{5}$/
export const GST_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid 10-digit mobile number",
  INVALID_PINCODE: "Please enter a valid 6-digit PIN code",
  INVALID_GST: "Please enter a valid GST number",
  PASSWORD_LENGTH: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  PASSWORDS_DONT_MATCH: "Passwords don't match",
  GENERIC_ERROR: "Something went wrong. Please try again.",
}

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
  CART: "cart",
  WISHLIST: "wishlist",
  THEME: "theme",
}

// Theme Constants
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
}

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM: "https://instagram.com/paperclipstore",
  FACEBOOK: "https://facebook.com/paperclipstore",
  TWITTER: "https://twitter.com/paperclipstore",
}

// Contact Information
export const CONTACT_INFO = {
  EMAIL: "info@paperclipstore.in",
  PHONE: "+91 98765 43210",
  ADDRESS: "123 Stationery Street, Mumbai, Maharashtra 400001, India",
  HOURS: "Monday to Saturday, 10:00 AM - 7:00 PM IST",
}

// Image Constants
export const DEFAULT_IMAGE = "/placeholder.svg"
export const LOGO_IMAGE = "/logo.svg"
export const FALLBACK_AVATAR = "/avatar-placeholder.svg"

// Shipping Constants
export const FREE_SHIPPING_THRESHOLD = 1000
export const BASE_SHIPPING_COST = 100
export const REMOTE_AREA_EXTRA_COST = 50

// Tax Constants
export const GST_RATE = 0.18 // 18% GST
