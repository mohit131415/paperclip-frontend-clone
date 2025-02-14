import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatePassword, clearPasswordUpdateSuccess } from "@/store/slices/userSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader } from "@/components/common/Loader"

export function Settings() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { isLoading, error, passwordUpdateSuccess } = useSelector((state) => state.user)

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      })
      return
    }

    await dispatch(
      updatePassword({
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      }),
    )
  }

  // Show success message and reset form
  if (passwordUpdateSuccess) {
    toast({
      title: "Success",
      description: "Your password has been updated successfully",
    })
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    dispatch(clearPasswordUpdateSuccess())
  }

  // Show error message
  if (error) {
    toast({
      title: "Error",
      description: error,
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and change your password</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input
            id="currentPassword"
            name="currentPassword"
            type="password"
            value={passwords.currentPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            value={passwords.newPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4" />
              Updating Password...
            </>
          ) : (
            "Update Password"
          )}
        </Button>
      </form>
    </div>
  )
}

// Add default export
export default Settings

