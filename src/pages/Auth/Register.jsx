"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneCode: "+91 (IN)",
    phone: "",
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

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.phone) {
      setError("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    // Format phone number
    const phoneNumber = formData.phoneCode.split(" ")[0] + formData.phone

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: phoneNumber,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      // Store the token
      localStorage.setItem("token", data.token)

      // Redirect to login page
      navigate("/login", {
        state: { message: "Registration successful! Please login to continue." },
      })
    } catch (err) {
      setError(err.message || "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-2xl text-center mb-8">Register account</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black focus:outline-none"
            disabled={isLoading}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black focus:outline-none"
            disabled={isLoading}
          />

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

          <div className="flex">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="px-4 py-2 border border-black border-r-0 focus:outline-none w-[120px]"
              disabled={isLoading}
            >
              <option value="+91 (IN)">+91 (IN)</option>
              <option value="+1 (US)">+1 (US)</option>
              <option value="+44 (UK)">+44 (UK)</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-black focus:outline-none"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "REGISTERING..." : "REGISTER"}
          </button>

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  )
}

