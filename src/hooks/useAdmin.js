'use client';

import { useState, useEffect } from 'react'

export function useAdmin() {
  const [admin, setAdmin] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for admin token
    const adminToken = localStorage.getItem('adminToken')
    if (adminToken) {
      setAdmin({
        email: 'admin@paperclip.com',
        role: 'admin'
      })
    }
    setIsLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('adminToken')
    setAdmin(null)
  }

  return {
    admin,
    isLoading,
    logout
  }
}
