/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_URL: string
    readonly VITE_CLOUDINARY_CLOUD_NAME: string
    readonly VITE_CLOUDINARY_API_KEY: string
    readonly VITE_CLOUDINARY_API_SECRET: string
    readonly VITE_RAZORPAY_KEY_ID: string
    readonly VITE_RAZORPAY_KEY_SECRET: string
    readonly VITE_JWT_SECRET: string
    readonly VITE_SMTP_HOST: string
    readonly VITE_SMTP_PORT: string
    readonly VITE_SMTP_USER: string
    readonly VITE_SMTP_PASS: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
  declare module "*.svg" {
    import React = require("react")
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
  }
  
  declare module "*.png" {
    const content: string
    export default content
  }
  
  declare module "*.jpg" {
    const content: string
    export default content
  }
  
  declare module "*.jpeg" {
    const content: string
    export default content
  }
  
  declare module "*.gif" {
    const content: string
    export default content
  }
  
  declare module "*.webp" {
    const content: string
    export default content
  }
  
  declare module "*.ico" {
    const content: string
    export default content
  }
  
  declare module "*.bmp" {
    const content: string
    export default content
  }
  
  