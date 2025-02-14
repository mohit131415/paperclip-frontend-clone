import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { authService } from "@/services/authService"

// Async thunks
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await authService.login(credentials)
  return response
})

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await authService.register(userData)
  return response
})

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

export const updateProfile = createAsyncThunk("auth/updateProfile", async (data) => {
  const response = await authService.updateProfile(data)
  return response
})

export const updatePassword = createAsyncThunk("auth/updatePassword", async (data) => {
  const response = await authService.updatePassword(data)
  return response
})

export const checkAuth = createAsyncThunk("auth/check", async () => {
  if (!authService.isAuthenticated()) {
    throw new Error("Not authenticated")
  }
  const response = await authService.getProfile()
  return response
})

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
      })

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Check Auth
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null
        state.token = null
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer

