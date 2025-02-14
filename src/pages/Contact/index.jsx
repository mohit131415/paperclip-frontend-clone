import { ContactForm } from '../../components/contact/ContactForm'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="space-y-1">
        {/* Call Us Section */}
        <section>
          <h2 className="text-2xl ">CALL US</h2>
          <a 
            href="tel:+918800787766" 
            className="text-lg text-gray-700"
          >
            +91 8800 78 7766
          </a>
          <p className="text-gray-600 mt-2 mb-8">
            Calling Hours: 10 AM to 6 PM (Mon-Fri)
          </p>
        </section>

        {/* Write To Us Section */}
        <section>
          <h2 className="text-2xl mb-">WRITE TO US</h2>
          <a 
            href="mailto:sales@paperclipstore.in"
            className="text-gray-700 underline"
          >
            sales@paperclipstore.in
          </a>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-2xl mb-8 mt-8">LEAVE A MESSAGE</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
