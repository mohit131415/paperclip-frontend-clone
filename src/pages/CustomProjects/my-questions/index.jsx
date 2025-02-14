const questions = [
    {
      question: "IS THERE A MINIMUM ORDER ?",
      answers: [
        "Because of operational reasons, we accept orders requiring customisation subject to minimum order quantity of 100. The ordered quantity needs to be in multiple of standard packs.",
        "You should be aware that there are setup costs that make more sense when you order a larger quantity. The setup costs are fixed and they do not vary with the quantity, so it is often more economical to order 200 than 100.",
      ],
    },
    {
      question: "CAN I SEE A PREVIEW ?",
      answers: [
        "Creating digital proof is an essential part of our process for customised order. After you place your order, we will prepare a digital proof to show you the size and position we recommend for your project. We will work with you to adjust the design to your satisfaction. If you know exactly what you want, we can follow your instruction. We are happy to make suggestions if you need them.",
      ],
    },
    {
      question: "CAN I REQUEST FOR PHYSICAL SAMPLE ?",
      answers: ["Yes. You can. Sample charges may apply."],
    },
    {
      question: "WHAT ARE THE SHIPPING COSTS & TIME?",
      answers: [
        "We offer free standard shipping for all our domestic orders to the locations which are serviceable by our courier partner. Surcharge may apply for pin codes out of serviceable area.",
        "Each order is unique so the delivery time is dependent on many factors including level of customisation. You will be informed via email about expected delivery time.",
        "For express delivery, please check with your sales coordinator. Express delivery charge may apply.",
      ],
    },
    {
      question: "HOW DO I ORDER ?",
      answers: [
        "Ordering is easy. Simply choose a notebook that suits your style, budget, communication preferences or needs. Get in touch and we will provide you our best quote. When you are ready to order, we will collect payment & shipping information and schedule your project. Your order will be delivered at your shipping address as per schedule.",
      ],
    },
    {
      question: "MY QUESTION IS NOT LISTED ?",
      answers: [
        "Never mind, you can email us at sales@paperclipstore.in or call us on +91 8800 78 7766 (Mon – Fri | 10:00 AM – 6:00 PM IST) and we will get back to you.",
      ],
    },
  ]
  
  export default function MyQuestions() {
    return (
      <div className="py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl text-center mb-4">MY QUESTIONS</h1>
  
          <div className="space-y-8">
            {questions.map((item, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-sm">{item.question}</h2>
                <div className="space-y-4">
                  {item.answers.map((answer, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {answer}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  