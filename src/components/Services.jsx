const Services = ({ id }) => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements and drive digital transformation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      hoverGradient: "from-purple-500 to-pink-600",
      shadowColor: "purple-500/20",
    },
    {
      title: "AI-Powered Automations",
      description:
        "Intelligent automation solutions that streamline processes, reduce manual work, and enhance operational efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5v10h10V5H5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-blue-400 to-indigo-500",
      hoverGradient: "from-blue-500 to-indigo-600",
      shadowColor: "blue-500/20",
    },
    {
      title: "CRM Solutions",
      description:
        "Comprehensive customer relationship management systems to enhance client interactions and boost sales performance.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      gradient: "from-teal-400 to-cyan-500",
      hoverGradient: "from-teal-500 to-cyan-600",
      shadowColor: "teal-500/20",
    },
    {
      title: "API Integrations",
      description:
        "Seamless integration services connecting your systems with third-party applications and external data sources.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-500",
      hoverGradient: "from-green-500 to-emerald-600",
      shadowColor: "green-500/20",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services ensuring reliability, security, and optimal performance.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
      gradient: "from-indigo-400 to-purple-500",
      hoverGradient: "from-indigo-500 to-purple-600",
      shadowColor: "indigo-500/20",
    },
    {
      title: "DevOps & Automation",
      description:
        "Streamline development and deployment processes with CI/CD pipelines, containerization, and infrastructure automation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
        </svg>
      ),
      gradient: "from-emerald-400 to-cyan-500",
      hoverGradient: "from-emerald-500 to-cyan-600",
      shadowColor: "emerald-500/20",
    }    
  ]

  return (
    <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/25 via-indigo-900/15 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/12 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl animate-bounce delay-1000"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/4 to-transparent"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.06) 1px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Services Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expertise spans across cutting-edge technologies and innovative solutions designed to transform your
            business
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-${service.gradient.split(" ")[1].replace("to-", "").replace("-500", "-400")}/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${service.shadowColor} transform hover:-translate-y-3 relative overflow-hidden`}
            >
              {/* Card Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Icon Container */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient}/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:${service.hoverGradient}/30 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-${service.shadowColor} relative z-10`}
              >
                <div
                  className={`text-${service.gradient.split(" ")[1].replace("to-", "").replace("-500", "-400")} group-hover:text-${service.gradient.split(" ")[1].replace("to-", "").replace("-500", "-300")} transition-colors duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-2xl font-bold text-white mb-4 group-hover:text-${service.gradient.split(" ")[1].replace("to-", "").replace("-500", "-100")} transition-colors duration-300 relative z-10`}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                {service.description}
              </p>

              {/* Top Gradient Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}
              ></div>

              {/* Hover Effect Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Expertise Showcase */}
        <div className="text-center mb-16">
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-12 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent relative z-10">
              Why Choose Our Services?
            </h3>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  Fast Delivery
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Rapid development cycles with agile methodologies
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  Scalable Solutions
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Built to grow with your business needs
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                  Secure & Reliable
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Enterprise-grade security and reliability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital transformation goals
            </p>
            <a href="#contact">
              <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium">
                <span className="group-hover:text-purple-100 transition-colors duration-300">Get Started Today</span>
              </button>
            </a>

          </div>
        </div>
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute top-1/4 right-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-bounce opacity-20 hover:opacity-40 transition-opacity duration-300">
        <div className="absolute inset-3 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70"></div>
      </div>

      <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-pulse delay-500 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70"></div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg shadow-blue-500/40 animate-bounce delay-1000 opacity-20"></div>

      {/* Additional Floating Particles */}
      <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/5 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-60"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300 opacity-60"></div>
    </div>
  )
}

export default Services
