import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { authService } from "@/services/authService"

// Async thunks
export const fetchAddresses = createAsyncThunk("user/fetchAddresses", async () => {
  const response = await authService.getProfile()
  return response.addresses
})

export const addAddress = createAsyncThunk("user/addAddress", async (address) => {
  const response = await authService.addAddress(address)
  return response
})

export const updateAddress = createAsyncThunk("user/updateAddress", async ({ addressId, address }) => {
  const response = await authService.updateAddress(addressId, address)
  return response
})

export const deleteAddress = createAsyncThunk("user/deleteAddress", async (addressId) => {
  await authService.deleteAddress(addressId)
  return addressId
})

export const setDefaultAddress = createAsyncThunk("user/setDefaultAddress", async (addressId) => {
  const response = await authService.setDefaultAddress(addressId)
  return response
})

// Add updatePassword thunk
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await authService.updatePassword(currentPassword, newPassword)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update password")
    }
  },
)

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
    isLoading: false,
    error: null,
    passwordUpdateSuccess: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearPasswordUpdateSuccess: (state) => {
      state.passwordUpdateSuccess = false
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.isLoading = false
        state.addresses = action.payload
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Add Address
      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload)
      })

      // Update Address
      .addCase(updateAddress.fulfilled, (state, action) => {
        const index = state.addresses.findIndex((addr) => addr._id === action.payload._id)
        if (index !== -1) {
          state.addresses[index] = action.payload
        }
      })

      // Delete Address
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addresses = state.addresses.filter((addr) => addr._id !== action.payload)
      })

      // Set Default Address
      .addCase(setDefaultAddress.fulfilled, (state, action) => {
        state.addresses = state.addresses.map((addr) => ({
          ...addr,
          isDefault: addr._id === action.payload._id,
        }))
      })

      // Update Password
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.passwordUpdateSuccess = false
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false
        state.passwordUpdateSuccess = true
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || "Failed to update password"
        state.passwordUpdateSuccess = false
      })
  },
})

export const { clearError, clearPasswordUpdateSuccess } = userSlice.actions
export default userSlice.reducer

