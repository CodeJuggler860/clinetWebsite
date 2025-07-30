import { useState, useEffect, useRef } from "react"

const About = ({id}) => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    stats: false,
    whoWeAre: false,
    mission: false,
    rightSide: false,
    values: false,
  })

  const [activeCard, setActiveCard] = useState(null)
  const sectionRefs = {
    header: useRef(null),
    stats: useRef(null),
    whoWeAre: useRef(null),
    mission: useRef(null),
    rightSide: useRef(null),
    values: useRef(null),
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        },
        { threshold: 0.1, rootMargin: "50px" },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return { key, observer }
    })

    return () => {
      observers.forEach(({ observer }) => observer.disconnect())
    }
  }, [])

  // Mobile tap interaction for cards
  const handleCardTap = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  return (
    <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl animate-bounce delay-700"></div>

        {/* Animated Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/3 to-transparent animate-pulse-glow"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.08) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* About Header Section with Animation */}
        <div
          ref={sectionRefs.header}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.header ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            About Clinet
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        {/* Stats Section with Staggered Animation */}
        <div
          ref={sectionRefs.stats}
          className={`grid md:grid-cols-3 gap-6 sm:gap-8 mb-20 transition-all duration-1000 ${
            isVisible.stats ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              number: "50+",
              label: "Clients Onboarded",
              icon: "👥",
              gradient: "from-purple-400 to-blue-500",
              delay: "delay-100",
            },
            {
              number: "100+",
              label: "Successful Projects",
              icon: "✅",
              gradient: "from-blue-400 to-indigo-500",
              delay: "delay-200",
            },
            {
              number: "25+",
              label: "Solutions in Progress",
              icon: "⚙️",
              gradient: "from-indigo-400 to-purple-500",
              delay: "delay-300",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-purple-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up ${stat.delay}`}
              onClick={() => handleCardTap(`stat-${index}`)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.gradient}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:${stat.gradient}/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-purple-500/20 animate-float`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <span className="text-2xl animate-bounce-slow" style={{ animationDelay: `${index * 0.3}s` }}>
                  {stat.icon}
                </span>
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Main About Content with Enhanced Animations */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content with Slide-in Animation */}
          <div className="space-y-8">
            {/* Who We Are Card */}
            <div
              ref={sectionRefs.whoWeAre}
              className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer transform hover:scale-[1.02] ${
                isVisible.whoWeAre ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
              } ${activeCard === "who-we-are" ? "border-purple-400/60 bg-gray-800/60 scale-[1.02]" : ""}`}
              onClick={() => handleCardTap("who-we-are")}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <span className="text-2xl animate-bounce-slow">🏢</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Who We Are
                </h3>
              </div>
              <div
                className={`transition-all duration-500 ${
                  activeCard === "who-we-are" ? "max-h-96 opacity-100" : "max-h-32 sm:max-h-none opacity-100"
                } overflow-hidden`}
              >
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                  <span className="text-white font-semibold">Client</span> is a Pakistan-based technology company driven
                  by a team of passionate professionals dedicated to delivering smart, scalable, and future-ready
                  digital solutions.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  We've already onboarded clients, delivered successful projects, and have multiple custom solutions
                  currently in progress, establishing ourselves as a trusted partner in the digital transformation
                  journey.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-purple-400/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </div>

            {/* Our Mission Card */}
            <div
              ref={sectionRefs.mission}
              className={`bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-blue-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer transform hover:scale-[1.02] ${
                isVisible.mission ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
              } ${activeCard === "mission" ? "border-blue-400/60 bg-gray-800/60 scale-[1.02]" : ""}`}
              style={{ animationDelay: "0.2s" }}
              onClick={() => handleCardTap("mission")}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <span className="text-2xl animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
                    🎯
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              <div
                className={`transition-all duration-500 ${
                  activeCard === "mission" ? "max-h-96 opacity-100" : "max-h-32 sm:max-h-none opacity-100"
                } overflow-hidden`}
              >
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and
                  competitive advantage in the digital landscape. We believe in creating lasting partnerships through
                  exceptional service and cutting-edge solutions.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </div>
          </div>

          {/* Enhanced Right Visual Elements */}
          <div
            ref={sectionRefs.rightSide}
            className={`relative h-96 lg:h-full transition-all duration-1000 ${
              isVisible.rightSide ? "animate-fade-in-right" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Central Large Element with Enhanced Animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Main Central Cube */}
                <div className="w-40 h-40 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 rounded-3xl shadow-2xl shadow-purple-500/50 animate-float transform rotate-12 hover:rotate-0 transition-transform duration-700">
                  <div className="absolute inset-6 bg-gradient-to-tl from-blue-600 to-purple-600 rounded-2xl opacity-80 flex items-center justify-center animate-pulse-glow">
                    <div className="text-center">
                      <div className="text-4xl mb-2 animate-bounce-slow">💼</div>
                      <div className="text-white font-bold text-sm">CLIENT</div>
                    </div>
                  </div>
                  {/* Floating particles around main element */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Orbiting Ring */}
                <div className="absolute inset-0 w-40 h-40 border-2 border-purple-400/30 rounded-full animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Orbiting Elements */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/40 animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="absolute inset-3 bg-gradient-to-tl from-purple-500 to-blue-500 rounded-xl opacity-70 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl animate-bounce-slow">⚡</div>
                  <div className="text-white text-xs font-bold">FAST</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-lg shadow-indigo-500/40 animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-xl opacity-70 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl animate-bounce-slow" style={{ animationDelay: "1s" }}>
                    🛡️
                  </div>
                  <div className="text-white text-xs font-bold">SECURE</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/3 left-1/6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/40 animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="absolute inset-1 bg-gradient-to-tl from-pink-500 to-purple-500 rounded-xl opacity-70 flex items-center justify-center">
                <div className="text-lg animate-bounce-slow" style={{ animationDelay: "1.5s" }}>
                  🚀
                </div>
              </div>
            </div>

            {/* Additional Dynamic Elements */}
            <div className="absolute top-1/6 right-1/3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/40 animate-float hover:scale-125 transition-transform duration-300">
              <div className="absolute inset-1 bg-gradient-to-tl from-blue-500 to-cyan-500 rounded-full opacity-70 flex items-center justify-center">
                <div className="text-xs animate-bounce-slow" style={{ animationDelay: "2s" }}>
                  ✨
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/6 right-1/6 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/40 animate-float hover:scale-125 transition-transform duration-300">
              <div className="absolute inset-1 bg-gradient-to-tl from-emerald-500 to-green-500 rounded-full opacity-70 flex items-center justify-center">
                <div className="text-sm animate-bounce-slow" style={{ animationDelay: "2.5s" }}>
                  💡
                </div>
              </div>
            </div>

            {/* Enhanced Connecting Lines with Animation */}
            <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-purple-400/60 to-transparent transform -translate-x-1/2 -translate-y-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-blue-400/60 to-transparent transform -translate-y-1/2 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-l from-indigo-400/40 to-transparent transform -translate-y-1/2 rotate-45 animate-pulse delay-1000"></div>

            {/* Interactive Hover Zones for Mobile */}
            <div className="lg:hidden absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-transparent hover:bg-purple-500/10 rounded-lg transition-colors duration-300 cursor-pointer"
                  onClick={() => handleCardTap(`zone-${index}`)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Core Values Section */}
        <div
          ref={sectionRefs.values}
          className={`mt-20 transition-all duration-1000 ${
            isVisible.values ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Innovation",
                icon: "💡",
                desc: "Cutting-edge solutions",
                gradient: "from-yellow-400 to-orange-500",
              },
              { title: "Quality", icon: "⭐", desc: "Excellence in delivery", gradient: "from-blue-400 to-indigo-500" },
              {
                title: "Partnership",
                icon: "🤝",
                desc: "Long-term relationships",
                gradient: "from-green-400 to-emerald-500",
              },
              { title: "Growth", icon: "📈", desc: "Continuous improvement", gradient: "from-purple-400 to-pink-500" },
            ].map((value, index) => (
              <div
                key={index}
                className={`group text-center bg-gray-900/30 backdrop-blur-lg border border-gray-700/30 rounded-xl p-4 sm:p-6 hover:border-purple-400/50 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer animate-zoom-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardTap(`value-${index}`)}
              >
                <div
                  className={`text-2xl sm:text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {value.icon}
                </div>
                <h4
                  className={`text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                >
                  {value.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {value.desc}
                </p>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with More Dynamic Movement */}
      <div className="absolute top-1/5 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute bottom-1/6 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow"></div>
    </div>
  )
}

export default About
