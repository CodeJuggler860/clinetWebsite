const Hero = ({id}) => {
    return (
        <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl animate-bounce delay-500"></div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            {/* Navigation Header */}
            <nav className="flex items-center justify-end px-8 py-6 relative z-10 backdrop-blur-sm space-x-8 text-gray-300 text-md">
                <div className="hidden md:flex items-center space-x-8 font-bold">
                    <a href="#home" className="hover:text-white transition-all duration-300 hover:scale-105">Home</a>
                    <a href="#about" className="hover:text-white transition-all duration-300 hover:scale-105">About Us</a>
                    <a href="#services" className="hover:text-white transition-all duration-300 hover:scale-105">Services</a>
                    <a href="#projects" className="hover:text-white transition-all duration-300 hover:scale-105">Projects</a>
                    <a href="#faqs" className="hover:text-white transition-all duration-300 hover:scale-105">FAQs</a>
                </div>
                <a href="#contact">
                    <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                        Contact us
                    </button>
                </a>
            </nav>

            {/* Main Content */}
            <div className="flex items-center justify-between px-8 py-20 relative z-10">
                {/* Left Content */}
                <div className="max-w-2xl">
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
                        Clinet.
                        <br />
                        <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                           Build. Innovate.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                        <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Smart Code 
                        </span>{" "}
                        Real Impact ,  Built for the future.
                    </p>
                    <a href="#about">
                        <button className="group bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                            <span className="group-hover:text-purple-200 transition-colors duration-300">Learn more</span>
                        </button>
                    </a>
                </div>

                {/* Enhanced 3D Elements */}
                <div className="hidden lg:block relative w-1/2 h-96">
                    {/* Main 3D Shape - Enhanced */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transform rotate-45 rounded-2xl shadow-2xl shadow-purple-500/50 animate-pulse">
                            <div className="absolute inset-2 bg-gradient-to-tl from-purple-600 to-blue-600 rounded-xl opacity-80"></div>
                        </div>
                    </div>

                    {/* Enhanced Floating Coins */}
                    <div className="absolute top-16 right-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-bounce hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-2 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70"></div>
                    </div>
                    <div className="absolute bottom-32 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-500/40 animate-pulse hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-blue-500 rounded-full opacity-70"></div>
                    </div>
                    <div className="absolute bottom-16 right-32 w-18 h-18 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/40 animate-bounce delay-300 hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-2 bg-gradient-to-tl from-pink-500 to-purple-500 rounded-full opacity-70"></div>
                    </div>

                    {/* Enhanced Vertical Lines with Glow */}
                    <div className="absolute top-0 right-24 w-px h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent shadow-sm shadow-purple-400/50"></div>
                    <div className="absolute top-0 right-32 w-px h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent shadow-sm shadow-blue-400/50"></div>
                    <div className="absolute top-0 right-40 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent"></div>
                </div>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="px-8 pb-20 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Enhance Your Yield - Enhanced */}
                    <div className="group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-yellow-400/40 group-hover:to-orange-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-yellow-500/20">
                            <svg
                                className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                        Accelerate Your Growth
                        </h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Unlock powerful digital solutions tailored to your business. From custom application development to seamless systems integration, our team transforms your vision into scalable reality for sustainable competitive advantage.
                        </p>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                    </div>

                    {/* Borrow with Flexibility - Enhanced */}
                    <div className="group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-teal-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-teal-400/40 group-hover:to-cyan-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-teal-500/20">
                            <svg
                                className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors duration-300">
                        Client-Centric Approach
                        </h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        We believe software should fit your needs—not the other way around. Our agile methodology ensures transparent project management, adaptability to changing requirements, and continuous collaboration throughout your journey.
                        </p>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400/0 via-teal-400/60 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                    </div>

                    {/* Secure and Sound - Enhanced */}
                    <div className="group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-purple-500/20">
                            <svg
                                className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                        Security & Reliability First
                        </h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Entrust your projects to a partner who prioritizes quality, security, and stability. Our solutions are rigorously tested, fully documented, and built to keep your data safe—creating a foundation for your success, both today and into the future.
                        </p>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                    </div>
                </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-1/4 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
        </div>
    )
}

export default Hero