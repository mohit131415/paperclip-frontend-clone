export default function ShippingReturns() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl text-center mb-4">SHIPPING & RETURNS</h1>

        <div className="space-y-12">
          {/* Shipping Fee & Time Section */}
          <section className="space-y-4">
            <h2 className="text-base font-medium">SHIPPING FEE & TIME</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                We offer free shipping for all domestic orders for INR 995 or more. Your product total after any
                discount should be INR 995 or more. For orders under INR 995 a flat shipping charge of INR 80 is added.
              </li>
              <li>
                Domestic orders are usually delivered within 3-5 business days. Saturdays, Sundays and public holidays
                are not regarded as business days.
              </li>
              <li>
                If we anticipate a significant delay in the shipment of your order, we will contact via email or
                telephone. Delivery delays can occasionally occur around public holidays or at other times due to
                unforeseen circumstances.
              </li>
              <li>Orders once shipped cannot be cancelled.</li>
            </ul>
          </section>

          {/* Tracking Section */}
          <section className="space-y-4">
            <h2 className="text-base font-medium">TRACKING THE ORDER</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Once your order is shipped, the Airway Bill number (AWB no.) and courier partner name is sent to you via
                email. Please visit the courier partner website and enter the AWB no. shared with you in the relevant
                form to track the current location of your shipment and expected date of delivery.
              </p>
              <p>
                Should you have any questions about your order dispatch, you can email us at sales@paperclipstore.in or
                call us on +91 8800 78 7766 (Mon – Fri | 10:00 AM – 6:00 PM IST)
              </p>
            </div>
          </section>

          {/* Delivery Section */}
          <section className="space-y-4">
            <h2 className="text-base font-medium">DELIVERY</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Within India, we ship through a courier partner. Our delivery partner will attempt to deliver the
                package thrice before they return it to us.
              </p>
              <p>
                Please provide a mobile number that you are available at, and your complete shipping address including
                the pin code. This will help us to ensure smooth delivery of your order.
              </p>
            </div>
          </section>

          {/* Return/Exchange Section */}
          <section className="space-y-4">
            <h2 className="text-base font-medium">RETURN OR EXCHANGE</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p>Your purchase is eligible for return or exchange only if it meets the following conditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  An incorrect product has been delivered to you, i.e., the product does not match the item in the order
                  confirmation email.
                </li>
                <li>If the product you receive has a genuine quality/manufacturing defect.</li>
              </ul>

              <p>
                If your purchase meets our return criteria stated above, please email us at sales@paperclipstore.in
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

