"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

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
    setSuccess(false)
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message")
      }

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-500 text-green-700 p-4 rounded">
        <h3 className="font-medium mb-2">Thank you for your message!</h3>
        <p>We have received your inquiry and will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
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
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number*"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-black focus:outline-none"
        disabled={isLoading}
      />

      <textarea
        name="message"
        placeholder="Message*"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-black focus:outline-none min-h-[200px]"
        disabled={isLoading}
      />

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-12 py-2 border border-black hover:bg-black hover:text-white transition-colors ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "SENDING..." : "SEND"}
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </form>
  )
}

