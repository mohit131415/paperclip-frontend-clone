export default function FAQ() {
    const faqs = [
      {
        question: "WHAT ARE THE SHIPPING COSTS & TIME ?",
        answers: [
          "We offer free shipping for all domestic orders for INR 995 or more. For orders under INR 995 a flat shipping charge of INR 80 is added. The domestic orders are usually delivered within 3-5 business days. Saturdays, Sundays and public holidays are not regarded as business days.",
          "For customised order, the delivery time is dependent on many factors including level of customisation. You will be informed via email about expected delivery time.",
          "For express delivery, please check with your sales coordinator. Express delivery charge may apply.",
        ],
      },
      {
        question: "WHY IS MY ORDER CANCELLED ?",
        answers: [
          "Your order may be cancelled for one or more of the following reasons:",
          "• Ordered item is out of stock.",
          "• The delivery address is not serviceable.",
        ],
      },
      {
        question: "HOW CAN I TRACK MY ORDER ?",
        answers: [
          "Once your order is shipped, the Airway Bill number (AWB no.) and courier partner name is sent to you via email. Please visit the courier partner website and enter the AWB no. shared with you in the relevant form to track the current status of your shipment and expected date of delivery.",
        ],
      },
      {
        question: "WHY IS MY ORDER LATE ?",
        answers: [
          "Delivery delays can occasionally occur around public holidays or at other times due to unforeseen circumstances.",
          "If we anticipate a significant delay in the shipment of your order, we will contact via email or telephone.",
        ],
      },
      {
        question: "CAN I CANCEL MY ORDER ?",
        answers: ["Orders once confirmed cannot be cancelled."],
      },
      {
        question: "CAN I EXCHANGE OR RETURN MY ORDER ?",
        answers: [
          "Your purchase is eligible for return or exchange only If the product you receive has a genuine quality / manufacturing defect. Please email us at customer care within 48 hours of delivery to take the necessary actions.",
          "We unfortunately will not be able to entertain return/exchange request post 48 hours of delivery.",
        ],
      },
      {
        question: "IS THERE A MINIMUM ORDER WITH CUSTOMISATION ?",
        answers: [
          "Because of operational reasons, we accept order requiring customisation subject to minimum order quantity of 100. The ordered quantity needs to be in multiple of standard packs.",
          "You should be aware that there are setup costs that make more sense when you order a larger quantity. The setup costs are fixed and they do not vary with the quantity, so it is often more economical to order 200 than 100.",
        ],
      },
      {
        question: "CAN I SEE A PREVIEW OF MY CUSTOMISED ORDER ?",
        answers: [
          "Creating digital proof is an essential part of our process for customised order. After you place your order, we will prepare a digital proof to show you the size and position we recommend for your project. We will work with you to adjust the design to your satisfaction. If you know exactly what you want, we can follow your instruction. We are happy to make suggestions if you need them.",
        ],
      },
      {
        question: "CAN I REQUEST FOR PHYSICAL SAMPLE FOR MY CUSTOMISED ORDER ?",
        answers: ["Yes. You can. Sample charges may apply."],
      },
      {
        question: "HOW DO I ORDER ?",
        answers: [
          "Ordering is easy. Simply choose a notebook that suits your style, budget, communication preferences or needs. Add your chosen product to the cart and simply checkout.",
          "For order requiring customisation, get in touch and we will provide you our best quote. When you are ready to order, we will collect payment & shipping information and schedule your project. Your order will be delivered at your shipping address as per schedule.",
        ],
      },
      {
        question: "MY QUESTION IS NOT LISTED ?",
        answers: [
          "Never mind, you can email us at sales@paperclipstore.in or call us on +91 8800 78 7766 (Mon – Fri | 10:00 AM – 6:00 PM IST) and we will get back to you.",
        ],
      },
    ]
  
    return (
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl text-center mb-4">FAQs</h1>
  
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-[15px]">{faq.question}</h2>
                <div >
                  {faq.answers.map((answer, idx) => (
                    <p key={idx} className="text-gray-600 text-[13px] leading-relaxed">
                      {answer}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
  
  