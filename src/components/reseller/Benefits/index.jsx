import { NotebookDetails } from "./NotebookDetails"

export function Benefits() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-24 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-2xl">BECOME A RESELLER</h1>
                    <h2 className="text-2xl font-bold mb-6">Join our growing community of over 300 resellers</h2>
                    <p className="text-gray-600 leading-relaxed text-[14px]">
                        With classic, simple yet bold designs, myPAPERCLIP products have been successful in reflecting the style and
                        preferences of students and professionals alike. Having an array of products using the best quality papers
                        and binding techniques, the brand has managed to encapsulate a large and loyal clientele in the country, and
                        gradually abroad as well. With presence in over 300+ retail stores, online marketplaces and quick commerce
                        platform, there is great recall of the brand.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <p className="text-sm text-gray-500">INTRODUCING</p>
                    <h2 className="text-2xl mb-4">STARTER BOX</h2>
                    <p className="text-gray-600 leading-relaxed">
                        There is an opportunity for the retail stores to sell myPAPERCLIP range of products. To introduce the range
                        in your local market, we have created a Starter Box consisting of our bestseller Executive Series notebooks
                        to test the market in your area. Once you have tested and gained confidence, we will work with you to create
                        a mix of the products range, which may work best in your local market.
                    </p>
                    <p className="text-sm font-medium text-gray-600">INCLUDES TABLE TOP DISPLAY STAND</p>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold">Details of notebooks included in Starter Box</h3>
                </div>
            </div>
            <NotebookDetails />
        </section>
    )
}

