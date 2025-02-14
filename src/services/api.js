import axios from "axios"
import config from "@/config"

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/login"
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      // Handle forbidden access
      console.error("Forbidden access:", error)
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      console.error("Resource not found:", error)
    }

    // Handle 500 Internal Server Error
    if (error.response?.status === 500) {
      console.error("Server error:", error)
    }

    return Promise.reject(error)
  },
)

export default api

