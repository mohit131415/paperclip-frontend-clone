export default function EmptyCart() {
    return (
      <main className=" py-16">
        <div className="container mx-auto px-4 max-w-md text-center">
          <h1 className="text-xl mb-6 font-bold">Your cart is empty</h1>
  
          <button className="inline-block px-6 py-2 border border-black! hover:bg-black hover:text-white transition-colors cursor-pointer mb-16 ">
            Continue shopping
          </button>
  
          <div className="space-y-2">
            <h2 className="xl:text-2xl">Have an account?</h2>
            <p className="text-black text-sm">
              <button className="text-gray-400 hover:text-black cursor-pointer">Log in</button> to check out faster.
            </p>
          </div>
        </div>
      </main>
    )
  }
  
  