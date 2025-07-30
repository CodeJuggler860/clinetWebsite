const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/clienet",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/14PUCYQiBp5/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-700",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/clinet.services/#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.388a6.5 6.5 0 00-2.346 1.267c-.905.6-1.614 1.404-2.134 2.368C.347 4.803.183 5.387.048 6.334.013 7.282 0 7.69 0 11.31c0 3.622.013 4.03.048 4.978.135.947.299 1.531.48 2.311a6.5 6.5 0 001.267 2.346c.6.905 1.404 1.614 2.368 2.134.78.181 1.364.345 2.311.48.948.035 1.356.048 4.976.048 3.622 0 4.03-.013 4.978-.048.947-.135 1.531-.299 2.311-.48a6.5 6.5 0 002.346-1.267c.905-.6 1.614-1.404 2.134-2.368.181-.78.345-1.364.48-2.311.035-.948.048-1.356.048-4.976 0-3.622-.013-4.03-.048-4.978-.135-.947-.299-1.531-.48-2.311a6.5 6.5 0 00-1.267-2.346C18.694.347 17.89.183 16.943.048 15.995.013 15.587 0 11.967 0h.05zm-.267 2.171c3.556 0 3.98.013 5.38.048.946.035 1.467.16 1.81.267.454.177.778.388 1.12.73.342.342.553.666.73 1.12.107.343.232.864.267 1.81.035 1.4.048 1.824.048 5.38 0 3.556-.013 3.98-.048 5.38-.035.946-.16 1.467-.267 1.81a3.018 3.018 0 01-.73 1.12c-.342.342-.666.553-1.12.73-.343.107-.864.232-1.81.267-1.4.035-1.824.048-5.38.048-3.556 0-3.98-.013-5.38-.048-.946-.035-1.467-.16-1.81-.267a3.018 3.018 0 01-1.12-.73 3.018 3.018 0 01-.73-1.12c-.107-.343-.232-.864-.267-1.81-.035-1.4-.048-1.824-.048-5.38 0-3.556.013-3.98.048-5.38.035-.946.16-1.467.267-1.81.177-.454.388-.778.73-1.12.342-.342.666-.553 1.12-.73.343-.107.864-.232 1.81-.267 1.4-.035 1.824-.048 5.38-.048z" />
          <path d="M12.017 15.33a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66zM12.017 7.729a4.301 4.301 0 100 8.602 4.301 4.301 0 000-8.602zM19.846 7.423a1.005 1.005 0 11-2.01 0 1.005 1.005 0 012.01 0z" />
        </svg>
      ),
      gradient: "from-pink-400 to-purple-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/clienet",  
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      gradient: "from-blue-400 to-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/clienet", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      gradient: "from-gray-400 to-gray-600",
    },
  ]


  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/4 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-transparent"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.03) 1px, transparent 0)`,
            backgroundSize: "150px 150px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Clinet
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                A Pakistan-based technology company driven by passionate professionals, delivering smart, scalable, and
                future-ready digital solutions that transform businesses and drive innovation.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
              <h4 className="text-lg font-semibold text-white mb-3 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Let's discuss your next project and bring your vision to life.
              </p>
              <a href="#contact">
                <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium text-sm">
                  <span className="group-hover:text-purple-100 transition-colors duration-300">Get Started</span>
                </button>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-purple-300 transition-all duration-300 flex items-center space-x-2 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:text-purple-200 transition-colors duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Phone Number */}
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-400/30 group-hover:to-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+92321614706"
                    className="text-white hover:text-green-300 transition-colors duration-300 font-medium"
                  >
                    +92 321 141 6706
                  </a>
                </div>
              </div>

              {/* General Email */}
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-400/30 group-hover:to-indigo-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">General Info</p>
                  <a
                    href="mailto:info@clinet.com"
                    className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    info@clinet.com
                  </a>
                </div>
              </div>

              {/* Contact Email */}
              <div className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-400/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Contact</p>
                  <a
                    href="mailto:contact@clinet.com"
                    className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    contact@clinet.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-full flex items-center justify-center hover:border-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-400")}/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-500")}/20 hover:-translate-y-1`}
                    title={social.name}
                  >
                    <div
                      className={`text-gray-400 group-hover:text-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-300")} transition-colors duration-300`}
                    >
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500">
              <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 flex-1"
                />
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear}{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Client
                </span>
                . All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 z-50"
          title="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-pulse opacity-5 hover:opacity-20 transition-opacity duration-300">
        <div className="absolute inset-2 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-xs">🚀</span>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-20 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-bounce delay-1000 opacity-5 hover:opacity-20 transition-opacity duration-300">
        <div className="absolute inset-1 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-xs">💼</span>
        </div>
      </div>

      {/* Additional Floating Particles */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-20"></div>
      <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300 opacity-20"></div>
    </footer>
  )
}

export default Footer
