import { lazy } from "react"
import  Home  from "@/pages/Home/index"
import  CustomProjects  from "@/pages/CustomProjects/index"
import Contact from "@/pages/Contact/index"
import Reseller from "@/pages/BecomeReseller/index"
import Login from "@/pages/Auth/Login"
import Register from "@/pages/Auth/Register"
import ForgotPassword from "@/pages/Auth/ForgotPassword"
import EmptyCart from "@/pages/Cart/EmptyCart"
import FAQ from "@/pages/Legal/FAQ"
import ShippingReturns from "@/pages/Legal/ShippingReturns"
import Terms from "@/pages/Legal/Terms"
import TermsofService from "@/pages/Legal/TermsofService"
import PrivacyPolicy from "@/pages/Legal/PrivacyPolicy"
import Refund from "@/pages/Legal/Refund"
import ShippingPolicy from "@/pages/Legal/ShippingPolicy"
import CollaborationsPage from "@/pages/Collaborations/index"
import IndusCollaboration from "@/pages/Collaborations/indus-people/index"
import MyQuestions from "@/pages/CustomProjects/my-questions/index"
import { ProjectGallery } from "@/pages/CustomProjects/view-possibilities/index"
import PastProjectPage from "@/pages/CustomProjects/Past-Project/index"

// // Lazy loaded components
const Shop = lazy(() => import("@/pages/Shop/Shop"))
const ProductDetail = lazy(() => import("@/pages/Shop/ProductDetail"))
// const Category = lazy(() => import("@/pages/Shop/Category"))
const Cart = lazy(() => import("@/pages/Cart/index"))
const OrderSuccess = lazy(() => import("@/pages/Cart/OrderSuccess"))
// const Checkout = lazy(() => import("@/pages/Checkout"))
// const Account = lazy(() => import("@/pages/Account"))

export const userRoutes = [
  
  { path: "/", element: <Home /> },
  
  // auth
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
  

  { path: "/custom-projects", element: <CustomProjects /> },
  { path: "/view-possibilities", element: <ProjectGallery /> },
  { path: "/past-projects", element: <PastProjectPage /> },
  { path: "/my-questions", element: <MyQuestions /> },
  
  
  { path: "/contact", element: <Contact /> },
 
 
  { path: "/become-reseller", element: <Reseller /> },
 
  { path: "/collaborations", element: <CollaborationsPage /> },
  { path: "/collaborations/indus-people", element: <IndusCollaboration /> },
 
 //Footer legal links
  { path: "/faqs", element: <FAQ /> },
  { path: "/shipping-returns", element: <ShippingReturns /> },
  { path: "/shipping-policy", element: <ShippingPolicy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/terms-of-service", element: <TermsofService /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/refund-policy", element: <Refund /> },
  
  { path: "/empty-cart", element: <EmptyCart /> },
    { path: "/cart", element: <Cart /> },
    { path: "/order-success", element: <OrderSuccess /> },
//   // Shop Routes
  { path: "/shop", element: <Shop /> },
  { path: "/shop/product/:id", element: <ProductDetail /> },

//   // Account Routes
//   { path: "/account", element: <Account /> },
//   { path: "/account/orders", element: <Account /> },
//   { path: "/account/wishlist", element: <Account /> },
//   { path: "/account/addresses", element: <Account /> },

//   // Checkout Route
//   { path: "/checkout", element: <Checkout /> },
]

