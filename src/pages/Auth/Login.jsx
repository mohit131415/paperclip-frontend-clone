"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      // Store the token
      localStorage.setItem("token", data.token)

      // Always redirect to home after successful login
      navigate("/")
    } catch (err) {
      setError(err.message || "Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-2xl text-center mb-8">Login to your account</h1>

        {location.state?.message && (
          <div className="mb-6 p-4 bg-green-50 border border-green-500 text-green-700 text-sm rounded">
            {location.state.message}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black focus:outline-none"
            disabled={isLoading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password*"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black focus:outline-none"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "LOGGING IN..." : "LOGIN"}
          </button>

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}

          <div className="text-center space-y-2">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-black hover:underline">
                Register here
              </Link>
            </p>
            <Link to="/forgot-password" className="text-sm text-black hover:underline block">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

