export function Footer() {
    return (
      <footer className="bg-[#1C1C1C] text-gray-300">
        <div className="container mx-auto px-4 py-12">
          {/* Logo */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-medium text-white">myPAPERCLIP</h2>
          </div>
  
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <a href="/shop" className="block transition-colors duration-200 hover:text-[#B8A062]">
                SHOP
              </a>
              <a href="/custom-projects" className="block transition-colors duration-200 hover:text-[#B8A062]">
                CUSTOM PROJECTS
              </a>
              <a href="/collaborations" className="block transition-colors duration-200 hover:text-[#B8A062]">
                COLLABORATIONS
              </a>
            </div>
  
            {/* Column 2 */}
            <div className="space-y-4">
              <a href="/become-reseller" className="block transition-colors duration-200 hover:text-[#B8A062]">
                BECOME A RESELLER
              </a>
              <a href="/contact" className="block transition-colors duration-200 hover:text-[#B8A062]">
                GET IN TOUCH
              </a>
            </div>
  
            {/* Column 3 */}
            <div className="space-y-4">
              <a href="/faqs" className="block transition-colors duration-200 hover:text-[#B8A062]">
                FAQs
              </a>
              <a href="/shipping-returns" className="block transition-colors duration-200 hover:text-[#B8A062]">
                SHIPPING & RETURNS
              </a>
              <a href="/terms" className="block transition-colors duration-200 hover:text-[#B8A062]">
                TERMS OF USE
              </a>
              <a href="/privacy-policy" className="block transition-colors duration-200 hover:text-[#B8A062]">
                PRIVACY POLICY
              </a>
            </div>
  
            {/* Column 4 */}
            <div className="space-y-4">
              <p className="mb-4">If you have any questions, we'd love to chat.</p>
              <p>
                Call:{" "}
                <a href="tel:+918800787766" className="transition-colors duration-200 hover:text-[#B8A062]">
                  +91 8800 78 7766 (IST)
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:sales@paperclipstore.in" className="transition-colors duration-200 hover:text-[#B8A062]">
                  sales@paperclipstore.in
                </a>
              </p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-16 border-t border-gray-800 pt-8">
            <div className="text-sm text-gray-400">
              <p className="mb-4">
                myPAPERCLIP is a registered Trade Mark. © 2013 - {new Date().getFullYear()} ALL RIGHTS RESERVED.
              </p>
              <p className="mb-4">Visa, Mastercard, Amex, Rupay, UPI, Wallets, Netbanking Accepted</p>
              <div className="flex flex-wrap gap-4">
                <a href="/refund-policy" className="transition-colors duration-200 hover:text-[#B8A062]">
                  Refund policy
                </a>
                <span>•</span>
                <a href="/privacy-policy" className="transition-colors duration-200 hover:text-[#B8A062]">
                  Privacy policy
                </a>
                <span>•</span>
                <a href="/terms-of-service" className="transition-colors duration-200 hover:text-[#B8A062]">
                  Terms of service
                </a>
                <span>•</span>
                <a href="/shipping-policy" className="transition-colors duration-200 hover:text-[#B8A062]">
                  Shipping policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  