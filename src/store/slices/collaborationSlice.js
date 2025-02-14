import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "@/services/api"

// Async thunks
export const fetchCollaborations = createAsyncThunk("collaborations/fetchAll", async () => {
  const response = await api.get("/collaborations")
  return response
})

export const fetchCollaborationById = createAsyncThunk("collaborations/fetchById", async (id) => {
  const response = await api.get(`/collaborations/${id}`)
  return response
})

export const submitCollaborationProposal = createAsyncThunk("collaborations/submitProposal", async (proposalData) => {
  const response = await api.post("/collaborations/propose", proposalData)
  return response
})

// Slice
const collaborationSlice = createSlice({
  name: "collaborations",
  initialState: {
    collaborations: [],
    currentCollaboration: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearCurrentCollaboration: (state) => {
      state.currentCollaboration = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Collaborations
      .addCase(fetchCollaborations.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCollaborations.fulfilled, (state, action) => {
        state.isLoading = false
        state.collaborations = action.payload
      })
      .addCase(fetchCollaborations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Fetch Collaboration by ID
      .addCase(fetchCollaborationById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCollaborationById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentCollaboration = action.payload
      })
      .addCase(fetchCollaborationById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      // Submit Collaboration Proposal
      .addCase(submitCollaborationProposal.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(submitCollaborationProposal.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(submitCollaborationProposal.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { clearError, clearCurrentCollaboration } = collaborationSlice.actions
export default collaborationSlice.reducer

