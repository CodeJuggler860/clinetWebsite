import { useState, useEffect, useRef } from "react"

const Contact = ({id}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Animation states
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(false)
  const [isSocialVisible, setIsSocialVisible] = useState(false)
  const [isLocationVisible, setIsLocationVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)

  // Refs for intersection observer
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const socialRef = useRef(null)
  const locationRef = useRef(null)
  const ctaRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form on success
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "50px 0px -50px 0px",
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting

        if (entry.target === headerRef.current) {
          setIsHeaderVisible(isVisible)
        } else if (entry.target === formRef.current) {
          setIsFormVisible(isVisible)
        } else if (entry.target === contactInfoRef.current) {
          setIsContactInfoVisible(isVisible)
        } else if (entry.target === socialRef.current) {
          setIsSocialVisible(isVisible)
        } else if (entry.target === locationRef.current) {
          setIsLocationVisible(isVisible)
        } else if (entry.target === ctaRef.current) {
          setIsCtaVisible(isVisible)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Observe all sections
    const refs = [headerRef, formRef, contactInfoRef, socialRef, locationRef, ctaRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      type: "Phone",
      value: "+92 321 161 4706",
      href: "tel:92321614706",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-500",
    },
    {
      type: "General Info",
      value: "info@clinet.com",
      href: "mailto:info@clinet.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      type: "Contact",
      value: "contact@clinet.com",
      href: "mailto:contact@clinet.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/clienet",
      icon: (
        <a href="https://www.linkedin.com/company/clienet" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      ),
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/14PUCYQiBp5/",
      icon: (
        <a href="https://www.facebook.com/share/14PUCYQiBp5/" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      ),
      gradient: "from-blue-500 to-blue-700",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/clinet.services/#",
      icon: (
        <a href="https://www.instagram.com/clinet.services/#" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.388a6.5 6.5 0 00-2.346 1.267c-.905.6-1.614 1.404-2.134 2.368C.347 4.803.183 5.387.048 6.334.013 7.282 0 7.69 0 11.31c0 3.622.013 4.03.048 4.978.135.947.299 1.531.48 2.311a6.5 6.5 0 001.267 2.346c.6.905 1.404 1.614 2.368 2.134.78.181 1.364.345 2.311.48.948.035 1.356.048 4.976.048 3.622 0 4.03-.013 4.978-.048.947-.135 1.531-.299 2.311-.48a6.5 6.5 0 002.346-1.267c.905-.6 1.614-1.404 2.134-2.368.181-.78.345-1.364.48-2.311.035-.948.048-1.356.048-4.976 0-3.622-.013-4.03-.048-4.978-.135-.947-.299-1.531-.48-2.311a6.5 6.5 0 00-1.267-2.346C18.694.347 17.89.183 16.943.048 15.995.013 15.587 0 11.967 0h.05zm-.267 2.171c3.556 0 3.98.013 5.38.048.946.035 1.467.16 1.81.267.454.177.778.388 1.12.73.342.342.553.666.73 1.12.107.343.232.864.267 1.81.035 1.4.048 1.824.048 5.38 0 3.556-.013 3.98-.048 5.38-.035.946-.16 1.467-.267 1.81a3.018 3.018 0 01-.73 1.12c-.342.342-.666.553-1.12.73-.343.107-.864.232-1.81.267-1.4.035-1.824.048-5.38.048-3.556 0-3.98-.013-5.38-.048-.946-.035-1.467-.16-1.81-.267a3.018 3.018 0 01-1.12-.73 3.018 3.018 0 01-.73-1.12c-.107-.343-.232-.864-.267-1.81-.035-1.4-.048-1.824-.048-5.38 0-3.556.013-3.98.048-5.38.035-.946.16-1.467.267-1.81.177-.454.388-.778.73-1.12.342-.342.666-.553 1.12-.73.343-.107.864-.232 1.81-.267 1.4-.035 1.824-.048 5.38-.048z" />
            <path d="M12.017 15.33a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66zM12.017 7.729a4.301 4.301 0 100 8.602 4.301 4.301 0 000-8.602zM19.846 7.423a1.005 1.005 0 11-2.01 0 1.005 1.005 0 012.01 0z" />
          </svg>
        </a>
      ),
      gradient: "from-pink-400 to-purple-600",
    },
    {
      name: "Twitter",
      href: "",
      icon: (
        <div className="cursor-not-allowed opacity-50">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </div>
      ),
      gradient: "from-blue-400 to-blue-500",
    },
  ]

  return (
    <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/15 via-indigo-900/10 to-transparent"></div>
        <div className="absolute top-1/5 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl animate-bounce delay-700"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-transparent"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.04) 1px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Contact Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and bring your
            vision to life.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-1000 hover:shadow-xl hover:shadow-purple-500/10 ${
              isFormVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Send us a Message
              </h3>
              <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-gray-500/70"
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/10 group-focus-within:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-gray-500/70"
                    placeholder="Enter your email address"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/10 group-focus-within:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-gray-500/70"
                    placeholder="What's this about?"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/10 group-focus-within:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-gray-500/70 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/10 group-focus-within:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-center animate-fade-in">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-center animate-fade-in">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              ref={contactInfoRef}
              className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-1000 hover:shadow-xl hover:shadow-purple-500/10 ${
                isContactInfoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient}/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:${info.gradient}/30 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-${info.gradient.split(" ")[1].replace("to-", "").replace("-500", "-500")}/20`}
                    >
                      <div
                        className={`text-${info.gradient.split(" ")[1].replace("to-", "").replace("-500", "-400")} group-hover:text-${info.gradient.split(" ")[1].replace("to-", "").replace("-500", "-300")} transition-colors duration-300`}
                      >
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.type}</p>
                      <a
                        href={info.href}
                        className={`text-white hover:text-${info.gradient.split(" ")[1].replace("to-", "").replace("-500", "-300")} transition-colors duration-300 font-medium`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div
              ref={socialRef}
              className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-1000 hover:shadow-xl hover:shadow-purple-500/10 ${
                isSocialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-400")}/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-500")}/20 hover:-translate-y-1`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`text-gray-400 group-hover:text-${social.gradient.split(" ")[1].replace("to-", "").replace("-600", "-300")} transition-colors duration-300`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-white group-hover:text-gray-200 transition-colors duration-300 font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Integration */}
            <div
              ref={locationRef}
              className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-1000 hover:shadow-xl hover:shadow-purple-500/10 ${
                isLocationVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Our Location
              </h3>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-600/30">
                {/* Add actual map integration here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457348.09911013!2d61.23559385845934!3d30.37532120349021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e758d20fa01%3A0xd0bfa7e5739a3b5e!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Address:</span> Karachi, Sindh, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${
            isCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-12 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                  Call Us
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Available 24/7 for urgent inquiries
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  Live Chat
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Instant support during business hours
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📅</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  Schedule Meeting
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Book a consultation at your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute top-1/4 right-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-bounce opacity-10 hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-3 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-sm">📧</span>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-pulse delay-500 opacity-10 hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-xs">📱</span>
        </div>
      </div>

      {/* Additional Floating Particles */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-30"></div>
      <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300 opacity-30"></div>
    </div>
  )
}

export default Contact
