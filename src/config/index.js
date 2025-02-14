const config = {
    apiUrl: window.ENV?.API_URL || "http://localhost:5000/api",
    stripePublicKey: window.ENV?.STRIPE_PUBLIC_KEY,
    cloudinaryCloudName: window.ENV?.CLOUDINARY_CLOUD_NAME,
    cloudinaryUploadPreset: window.ENV?.CLOUDINARY_UPLOAD_PRESET,
  }
  
  export default config
  
  