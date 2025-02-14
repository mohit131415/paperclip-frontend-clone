import { Benefits } from "../../components/reseller/Benefits/index"
import { HowItWorks } from "../../components/reseller/HowItWorks/index"

export default function Reseller() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[140vh] bg-gray-100">
        <img
          src="https://www.paperclipstore.in/cdn/shop/files/ESP-Master-Shot.jpg?v=1614372489&width=2400"
          alt="myPAPERCLIP Notebooks Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
          <h1 className="text-black text-4xl font-medium tracking-wider">CLASSIC. SIMPLE. BOLD.</h1>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />  

      <div className="px-[400px]">
        <HowItWorks />
      </div>
    </div>
  )
}

