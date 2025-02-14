"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reset link")
      }

      setSuccess(true)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-medium">Check your email</h1>
            <p className="text-gray-600">
              We have sent a password reset link to <span className="font-medium">{email}</span>
            </p>
            <p className="text-sm text-gray-500">
              Didn't receive the email? Check your spam folder or{" "}
              <button onClick={() => setSuccess(false)} className="text-black hover:underline">
                try again
              </button>
            </p>
            <div className="pt-4">
              <Link to="/login" className="text-sm text-black hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-2xl text-center mb-8">Reset your password</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-black focus:outline-none"
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
            {isLoading ? "SENDING..." : "SEND RESET LINK"}
          </button>

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}

          <div className="text-center">
            <Link to="/login" className="text-sm text-black hover:underline">
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

