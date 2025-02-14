"use client"

import { Suspense } from "react"
import { AppRouter } from "./routes"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
        <CartProvider>
          <AppRouter />
        </CartProvider>
    </Suspense>
  )
}


// 'use client'

// import { Header } from "./components/common/Header/index"
// import { Footer } from "./components/common/Footer/index"
// import  Home  from "./pages/Home/index"
// import  CustomProjects  from "./pages/CustomProjects/index"
// import Contact from "./pages/Contact/index"
// import Reseller from "./pages/BecomeReseller/index"
// import Login from "./pages/Auth/login"
// import RegisterPage from "./pages/Auth/Register"
// import ForgotPasswordPage from "./pages/Auth/ForgotPassword"
// import EmptyCart from "./pages/cart/EmptyCart"
// import FAQ from "./pages/Legal/Faq"
// import ShippingReturns from "./pages/Legal/ShippingReturns"
// import Terms from "./pages/Legal/Terms"
// import PrivacyPolicy from "./pages/Legal/PrivacyPolicy"
// import Refund from "./pages/Legal/Refund"
// import CollaborationsPage from "./pages/Collaborations/index"
// import { ProjectGallery } from "@/pages/CustomProjects/view-possibilities/index"
// import PastProjectPage from "./pages/CustomProjects/Past-Project/index"
// import MyQuestions from "./pages/CustomProjects/my-questions/index"




// export default function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background text-foreground">
//       {/* Header */}
//       <Header />

//       {/* Main Content Area */}
//       <main className="flex-1">
//         {/* <Home /> */}
//         {/* <CustomProjects /> */}
//         {/* <Contact /> */}
//         {/* <Reseller /> */}
//         {/* <RegisterPage /> */}
//         {/* <Login /> */}
//         {/* <ForgotPasswordPage /> */}
//         {/* <EmptyCart /> */}
//         {/* <FAQ /> */}
//         {/* <ShippingReturns /> */}
//         {/* <Terms /> */}
//         {/* <PrivacyPolicy /> */}
//         {/* <Refund /> */}
//         {/* <CollaborationsPage /> */}
//         {/* <ViewPossibilities /> */}
//         {/* <ProjectGallery /> //part of the custom projects page */}
//         {/* <PastProjectPage /> //part of the custom projects page*/}
//         {/* <MyQuestions />  //part of the custom projects page*/}
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }
