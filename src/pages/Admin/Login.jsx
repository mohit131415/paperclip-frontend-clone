"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, ShieldCheck } from "lucide-react"

const ADMIN_CREDENTIALS = {
  email: "admin@paperclip.com",
  password: "admin123",
}

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      if (formData.email === ADMIN_CREDENTIALS.email && formData.password === ADMIN_CREDENTIALS.password) {
        const token = btoa(`${formData.email}:${Date.now()}`)
        localStorage.setItem("adminToken", token)
        navigate("/admin")
      } else {
        setError("Invalid email or password")
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <ShieldCheck className="h-12 w-12 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Admin Panel Login</h2>
          <p className="mt-2 text-center text-sm text-gray-400">Secure access for administrators only</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Admin Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="admin@paperclip.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-white hover:bg-gray-100 text-black" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Access Admin Panel"
              )}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-400">Default credentials: admin@paperclip.com / admin123</div>
      </div>
    </div>
  )
}

