import { Outlet } from "react-router-dom"
import { Header } from "@/components/common/Header/index"
import { Footer } from "@/components/common/Footer/index"

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

