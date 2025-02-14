import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Existing utility function
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Add formatDate utility
export function formatDate(date) {
  if (!date) return ""

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }

  return new Date(date).toLocaleDateString("en-US", options)
}

// Add formatShortDate for cases where you only need the date
export function formatShortDate(date) {
  if (!date) return ""

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }

  return new Date(date).toLocaleDateString("en-US", options)
}

// Add relative date formatting (e.g., "2 days ago")
export function formatRelativeDate(date) {
  if (!date) return ""

  const now = new Date()
  const past = new Date(date)
  const diffTime = Math.abs(now - past)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

// Add isValidDate helper
export function isValidDate(date) {
  const d = new Date(date)
  return d instanceof Date && !isNaN(d)
}

