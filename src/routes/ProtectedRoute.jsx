'use client';

import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loader2 } from 'lucide-react'

export function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Simple token check
    const adminToken = localStorage.getItem('adminToken')
    setIsAdmin(!!adminToken)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="mt-2 text-sm text-gray-400">Verifying admin access...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
