import * as z from "zod"
import { PASSWORD_MIN_LENGTH, PHONE_REGEX, PINCODE_REGEX, GST_REGEX } from "./constants"

// Base schemas
export const emailSchema = z.string().email("Please enter a valid email address")
export const passwordSchema = z.string().min(PASSWORD_MIN_LENGTH, `Password must be at least ${PASSWORD_MIN_LENGTH} characters`)
export const phoneSchema = z.string().regex(PHONE_REGEX, "Please enter a valid 10-digit mobile number")
export const pincodeSchema = z.string().regex(PINCODE_REGEX, "Please enter a valid 6-digit PIN code")
export const gstSchema = z.string().regex(GST_REGEX, "Please enter a valid GST number")

// Auth schemas
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export const forgotPasswordSchema = z.object({
  email: emailSchema,
})

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

// Address schemas
export const addressSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  phone: phoneSchema,
  street: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "Please select a state"),
  pincode: pincodeSchema,
  addressType: z.enum(["home", "office"]),
})

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  phone: phoneSchema,
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

// Custom project form schema
export const customProjectSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  phone: phoneSchema,
  projectType: z.string().min(1, "Please select a project type"),
  quantity: z.string().min(1, "Please enter the quantity"),
  description: z.string().min(10, "Please provide more details about your project"),
  attachments: z.any(),
})

// Reseller application schema
export const resellerSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  ownerName: z.string().min(2, "Owner name must be at least 2 characters"),
  email: emailSchema,
  phone: phoneSchema,
  address: z.string().min(5, "Please enter your complete address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: pincodeSchema,
  gstNumber: gstSchema,
  businessType: z.string().min(1, "Please select your business type"),
  experience: z.string().min(1, "Please enter your experience"),
  currentBrands: z.string(),
  monthlyRevenue: z.string().min(1, "Please select your monthly revenue range"),
  documents: z.any(),
})

// Review schema
export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, "Review must be at least 10 characters"),
})

// Newsletter schema
export const newsletterSchema = z.object({
  email: emailSchema,
})

// Helper functions
export const validateForm = async (schema, data) => {
  try {
    await schema.parseAsync(data)
    return { isValid: true, errors: null }
  } catch (error) {
    const errors = error.errors.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message
      return acc
    }, {})
    return { isValid: false, errors }
  }
}

export const getFieldError = (errors, field) => {
  return errors?.[field]?.message
}
