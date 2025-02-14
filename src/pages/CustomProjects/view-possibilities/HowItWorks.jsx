export function HowItWorks() {
    return (
      <section className="grid md:grid-cols-2 mb-5 border border-black!">
        {/* Left side - Image */}
        <div className="relative h-[500px]">
          <img
            src="https://www.paperclipstore.in/cdn/shop/files/Custom_Projetcs_Generic_02.jpg?v=1719080467&width=642"
            alt="Collection of customized notebooks"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right side - Content */}
        <div className="bg-black text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl font-medium mb-6">HOW IT WORKS</h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            Ordering is easy. Simply choose a notebook that suits your style, budget, communication preferences or needs.
            <br />
            Call +91 8800 78 7766 or email at{" "}
            <a href="mailto:sales@paperclipstore.in" className="underline hover:text-white">
              sales@paperclipstore.in
            </a>{" "}
            and we will provide you our best quote. When you are ready to order, we will collect payment & shipping
            information and schedule your project. Your order will be delivered at your shipping address as per schedule.
          </p>
          <button className="bg-white border border-black text-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors w-fit cursor-pointer">
            <a href="/contact">
            CUSTOMISE MY PROJECT
            </a>
          </button>
        </div>
      </section>
    )
  }
  
  