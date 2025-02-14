import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  login,
  register,
  logout,
  updateProfile,
  updatePassword,
  resetPassword,
  checkAuth,
} from "@/store/slices/authSlice"
import { useToast } from "@/components/ui/use-toast"

export function useAuth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { user, isAuthenticated, isLoading, error } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  const handleLogin = async (credentials) => {
    try {
      await dispatch(login(credentials)).unwrap()
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to login. Please try again.",
      })
      return false
    }
  }

  const handleRegister = async (userData) => {
    try {
      await dispatch(register(userData)).unwrap()
      toast({
        title: "Registration successful!",
        description: "Your account has been created.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to register. Please try again.",
      })
      return false
    }
  }

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap()
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      })
      navigate("/")
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to logout. Please try again.",
      })
      return false
    }
  }

  const handleUpdateProfile = async (data) => {
    try {
      await dispatch(updateProfile(data)).unwrap()
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update profile.",
      })
      return false
    }
  }

  const handleUpdatePassword = async (data) => {
    try {
      await dispatch(updatePassword(data)).unwrap()
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update password.",
      })
      return false
    }
  }

  const handleResetPassword = async (email) => {
    try {
      await dispatch(resetPassword(email)).unwrap()
      toast({
        title: "Reset email sent",
        description: "Check your email for password reset instructions.",
      })
      return true
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send reset email.",
      })
      return false
    }
  }

  const requireAuth = (callback) => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login", { state: { from: window.location.pathname } })
      return false
    }
    if (callback) callback()
    return true
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    updateProfile: handleUpdateProfile,
    updatePassword: handleUpdatePassword,
    resetPassword: handleResetPassword,
    requireAuth,
  }
}

