import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function HowItWorks() {
    return (
        <>
            <section className="grid mb-5 border border-black!">
                <div className="grid md:grid-cols-2">
                    {/* Left side - Image */}
                    <div className="bg-gray-100">
                        <img
                            src="https://www.paperclipstore.in/cdn/shop/files/DisplayStandSmall.jpg?v=1720884534&width=750"
                            alt="myPAPERCLIP Display Stand"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="bg-black text-white p-16 py-[15vh] flex flex-col justify-center">
                        <h2 className="text-2xl font-medium mb-6">HOW IT WORKS</h2>
                        <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                            Ordering is easy. Simply go on to GET IN TOUCH link below. Once confirmed, we will collect payment &
                            shipping information and schedule your dispatch. Your Starter Box will be delivered at your shipping address
                            as per schedule.
                        </p>
                        <Button className="text-center py-3 border border-white! bg-white text-black rounded-none w-[150px]">
                            <Link
                                to="/contact"
                                className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors w-fit"
                            >
                                GET IN TOUCH
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <div className="text-center py-10">
                <button>
                    <Link
                        to="/shop"
                        className="inline-block border border-black! px-8 py-3 text-xl hover:bg-black hover:text-white transition-colors"
                    >
                        BOOK STARTER BOX NOW
                    </Link>
                </button>
            </div>
        </>
    )
}

