export default function RefundPolicy() {
  return (
    <main className="py-6">
      <div className="container mx-auto px-42 max-w-3xl">
        <h1 className="text-xl font-bold text-center mb-4">Refund policy</h1>

        <div className="space-y-8 text-sm text-gray-600">
          <section>
            <h2 className="font-bold text-black mb-4">RETURN OR EXCHANGE</h2>

            <div className="space-y-3">
              <p>Your purchase is eligible for return or exchange only if it meets the following conditions:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  An incorrect product has been delivered to you, i.e., the product does not match the item in the order
                  confirmation email.
                </li>
                <li>If the product you receive has a genuine quality/manufacturing defect.</li>
              </ul>

              <p>
                If your purchase meets our return criteria stated above, please email us at{" "}
                <a href="mailto:sales@paperclipstore.in" className="text-black hover:underline">
                  sales@paperclipstore.in
                </a>{" "}
                within 48 hours of delivery with the following information:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Order number</li>
                <li>Delivery Address</li>
                <li>
                  Specify the reason for return and in case of a defective or incorrect product, please send us an image
                  of the item.
                </li>
              </ul>

              <p>
                We'd request you to ensure that the product is sent back to us in its original condition and packaging
                with its original invoice.
              </p>

              <p>
                If there is genuine defect in the product, we're happy to exchange your product for a replacement, a
                different product of the same value within 7 working days after we receive the product at our warehouse,
                following an inspection & quality check.
              </p>

              <p>
                All returns/exchange courier charges to our warehouse are borne by the customer. On delivering your
                replacement, we will cover shipping charges.
              </p>

              <p>We unfortunately will not be able to entertain return request post 48 hours of delivery.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

