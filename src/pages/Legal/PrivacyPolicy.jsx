export default function PrivacyPolicy() {
  return (
    <main className="py-4">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl text-center mb-4">PRIVACY POLICIES</h1>

        <div className="space-y-4 text-sm text-gray-600">
          {/* Introduction */}
          <section className="space-y-4">
            <p>
              By using paperclipstore.in to shop or browse, you agree to the collection and use of information as
              described in our Privacy Policy below. We would request you to refrain from using paperclipstore.in if you
              do not agree with our policies. While we may update our policies from time to time, the most recent
              policies and practices can be found on this page.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <p>
              Paperclipstore.in collects some Personal Data from its users and/or are collected automatically when using
              paperclipstore.in. Paperclipstore.in also uses cookies. The data concerning the user is collected to allow
              the owner to provide its services as well as for the following purposes:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Registration & authentication.</li>
              <li>Contacting the user, Analytics.</li>
              <li>Location-based interactions.</li>
              <li>Tag Management.</li>
              <li>SPAM protection.</li>
              <li>Re-marketing and behavioural targeting.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <p>Paperclipstore.in do not sell, share or trade any information about its users with third parties.</p>
          </section>

          {/* Image Usage */}
          <section className="space-y-4">
            <p>
              Paperclipstore.in may use the images of the custom projects of orders executed through paperclipstore.in
              and/or other media electronically or otherwise. You have your explicit & unconditional consent for the
              usage of the images & order information.
            </p>
          </section>

          {/* Third Party Links */}
          <section className="space-y-4">
            <p>
              Paperclipstore.in may contain links to third party websites. Paperclipstore.in is not responsible for the
              privacy practices of any linked site or any link contained in a linked site.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <p>
              If you have any question, please email us at{" "}
              <a href="mailto:sales@paperclipstore.in" className="text-black hover:underline">
                sales@paperclipstore.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

