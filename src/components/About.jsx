import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const About = ({id}) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !startAnimation) {
                        setStartAnimation(true);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [startAnimation]);

    return (
      <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl animate-bounce delay-700"></div>
  
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/3 to-transparent"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.08) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* About Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
              About Client
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
  
          {/* Stats Section */}
          <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Clients Onboarded */}
            <div className="group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-400/40 group-hover:to-blue-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-purple-500/20">
                <svg
                  className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">
                {startAnimation ? <CountUp start={0} end={50} duration={2} /> : 0}+
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Clients Onboarded</p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </div>
  
            {/* Successful Projects */}
            <div className="group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-400/40 group-hover:to-indigo-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-blue-500/20">
                <svg
                  className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                {startAnimation ? <CountUp start={0} end={100} duration={2} /> : 0}+
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Successful Projects
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </div>
  
            {/* Solutions in Progress */}
            <div className="group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-400/40 group-hover:to-purple-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-indigo-500/20">
                <svg
                  className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-100 transition-colors duration-300">
                {startAnimation ? <CountUp start={0} end={25} duration={2} /> : 0}+
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Solutions in Progress
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400/0 via-indigo-400/60 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </div>
          </div>
  
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Who We Are
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  <span className="text-white font-semibold">Client</span> is a Pakistan-based technology company driven
                  by a team of passionate professionals dedicated to delivering smart, scalable, and future-ready digital
                  solutions.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We've already onboarded clients, delivered successful projects, and have multiple custom solutions
                  currently in progress, establishing ourselves as a trusted partner in the digital transformation
                  journey.
                </p>
              </div>
  
              {/* Our Mission */}
              <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and
                  competitive advantage in the digital landscape. We believe in creating lasting partnerships through
                  exceptional service and cutting-edge solutions.
                </p>
              </div>
            </div>
  
            {/* Right Visual Elements */}
            <div className="relative h-96 lg:h-full">
              {/* Central Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 rounded-2xl shadow-2xl shadow-purple-500/50 animate-pulse transform rotate-12">
                  <div className="absolute inset-4 bg-gradient-to-tl from-blue-600 to-purple-600 rounded-xl opacity-80 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>
              </div>
  
              {/* Orbiting Elements */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl shadow-blue-500/40 animate-bounce">
                <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-blue-500 rounded-full opacity-70 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
  
              <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-pulse delay-500">
                <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
  
              <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/40 animate-bounce delay-1000"></div>
  
              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-purple-400/60 to-transparent transform -translate-x-1/2 -translate-y-full"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-blue-400/60 to-transparent transform -translate-y-1/2"></div>
            </div>
          </div>
  
          {/* Core Values Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Innovation", icon: "💡", desc: "Cutting-edge solutions" },
                { title: "Quality", icon: "⭐", desc: "Excellence in delivery" },
                { title: "Partnership", icon: "🤝", desc: "Long-term relationships" },
                { title: "Growth", icon: "📈", desc: "Continuous improvement" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group text-center bg-gray-900/30 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-purple-400/50 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Additional Floating Elements */}
        <div className="absolute top-1/5 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
      </div>
    )
  }
  
  export default About