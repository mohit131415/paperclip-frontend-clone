export default function ShippingPolicy() {
    return (
      <main className="py-8">
        <div className="container mx-auto px-38 max-w-3xl">
          <h1 className="text-2xl text-center mb-12 font-bold">Shipping policy</h1>
  
          <div className="space-y-4">
            {/* Shipping Fee & Time Section */}
            <section className="space-y-4">
              <h2 className="text-base">SHIPPING FEE & TIME</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  We offer free shipping for all domestic orders for INR 995 or more. Your product total after any
                  discount should be INR 995 or more. For orders under INR 995 a flat shipping charge of INR 80 is added.
                </p>
                <p>
                  Domestic orders are usually delivered within 3-5 business days. Saturdays, Sundays and public holidays
                  are not regarded as business days.
                </p>
                <p>
                  If we anticipate a significant delay in the shipment of your order, we will contact via email or
                  telephone. Delivery delays can occasionally occur around public holidays or at other times due to
                  unforeseen circumstances.
                </p>
                <p>Orders once shipped cannot be cancelled.</p>
              </div>
            </section>
  
            {/* Tracking Section */}
            <section className="space-y-4">
              <h2 className="text-base">TRACKING THE ORDER</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  Once your order is shipped, the Airway Bill number (AWB no.) and courier partner name is sent to you via
                  email. Please visit the courier partner website and enter the AWB no. shared with you in the relevant
                  form to track the current location of your shipment and expected date of delivery.
                </p>
                <p>
                  Should you have any questions about your order dispatch, you can email us at{" "}
                  <a href="mailto:sales@paperclipstore.in" className="text-black hover:underline">
                    sales@paperclipstore.in
                  </a>{" "}
                  or call us on{" "}
                  <a href="tel:+918800787766" className="text-black hover:underline">
                    +91 8800 78 7766
                  </a>{" "}
                  (Mon – Fri | 10:00 AM – 6:00 PM IST)
                </p>
              </div>
            </section>
  
            {/* Delivery Section */}
            <section className="space-y-4">
              <h2 className="text-base">DELIVERY</h2>
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
          </div>
        </div>
      </main>
    )
  }
  
  