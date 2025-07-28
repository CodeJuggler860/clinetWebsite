const Projects = ({id}) => {
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        client: "TechMart Solutions",
        description:
          "A comprehensive e-commerce platform with advanced inventory management, real-time analytics, and seamless payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        category: "Web Application",
        status: "Completed",
        duration: "6 months",
        gradient: "from-purple-400 to-pink-500",
        hoverGradient: "from-purple-500 to-pink-600",
        shadowColor: "purple-500/20",
        image: "🛒",
      },
      {
        id: 2,
        title: "AI-Powered CRM System",
        client: "Global Enterprises Ltd",
        description:
          "Intelligent customer relationship management system with predictive analytics, automated workflows, and AI-driven insights.",
        technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
        category: "AI Solution",
        status: "Completed",
        duration: "8 months",
        gradient: "from-blue-400 to-indigo-500",
        hoverGradient: "from-blue-500 to-indigo-600",
        shadowColor: "blue-500/20",
        image: "🤖",
      },
      {
        id: 3,
        title: "Mobile Banking App",
        client: "SecureBank Corp",
        description:
          "Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
        technologies: ["React Native", "Node.js", "Redis", "JWT", "Firebase"],
        category: "Mobile App",
        status: "Completed",
        duration: "10 months",
        gradient: "from-teal-400 to-cyan-500",
        hoverGradient: "from-teal-500 to-cyan-600",
        shadowColor: "teal-500/20",
        image: "📱",
      },
      {
        id: 4,
        title: "Cloud Infrastructure Migration",
        client: "DataFlow Systems",
        description:
          "Complete cloud migration solution with automated deployment, monitoring, and scalable infrastructure management.",
        technologies: ["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins"],
        category: "Cloud Solution",
        status: "Completed",
        duration: "4 months",
        gradient: "from-green-400 to-emerald-500",
        hoverGradient: "from-green-500 to-emerald-600",
        shadowColor: "green-500/20",
        image: "☁️",
      },
      {
        id: 5,
        title: "Real-time Analytics Dashboard",
        client: "Analytics Pro Inc",
        description:
          "Interactive dashboard with real-time data visualization, custom reporting, and advanced filtering capabilities.",
        technologies: ["Vue.js", "D3.js", "Express", "InfluxDB", "WebSocket"],
        category: "Web Application",
        status: "In Progress",
        duration: "5 months",
        gradient: "from-indigo-400 to-purple-500",
        hoverGradient: "from-indigo-500 to-purple-600",
        shadowColor: "indigo-500/20",
        image: "📊",
      },
      {
        id: 6,
        title: "IoT Device Management",
        client: "SmartHome Technologies",
        description:
          "Comprehensive IoT platform for device management, monitoring, and automation with real-time control capabilities.",
        technologies: ["React", "MQTT", "InfluxDB", "Grafana", "Raspberry Pi"],
        category: "IoT Solution",
        status: "In Progress",
        duration: "7 months",
        gradient: "from-orange-400 to-red-500",
        hoverGradient: "from-orange-500 to-red-600",
        shadowColor: "orange-500/20",
        image: "🏠",
      },
    ]
  
    const categories = ["All", "Web Application", "Mobile App", "AI Solution", "Cloud Solution", "IoT Solution"]
  
    return (
      <div id={id} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-transparent"></div>
          <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-purple-600/12 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl animate-bounce delay-700"></div>
  
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/3 to-transparent"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.05) 1px, transparent 0)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Projects Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
              Our Projects
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Showcasing our expertise through successful project deliveries and innovative solutions that drive business
              growth
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
  
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className="group px-6 py-3 bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-full text-gray-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="group-hover:text-purple-200 transition-colors duration-300">{category}</span>
              </button>
            ))}
          </div>
  
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-${project.gradient.split(" ")[1].replace("to-", "").replace("-500", "-400")}/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${project.shadowColor} transform hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Card Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-500 rounded-2xl`}
                ></div>
  
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${project.gradient}/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:${project.hoverGradient}/30 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-${project.shadowColor}`}
                    >
                      <span className="text-2xl">{project.image}</span>
                    </div>
                    <div>
                      <h3
                        className={`text-2xl font-bold text-white mb-1 group-hover:text-${project.gradient.split(" ")[1].replace("to-", "").replace("-500", "-100")} transition-colors duration-300`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {project.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-gray-500">{project.duration}</span>
                  </div>
                </div>
  
                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {project.description}
                </p>
  
                {/* Category Badge */}
                <div className="mb-6 relative z-10">
                  <span
                    className={`inline-block px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${project.gradient}/10 text-${project.gradient.split(" ")[1].replace("to-", "").replace("-500", "-300")} border border-${project.gradient.split(" ")[1].replace("to-", "").replace("-500", "-500")}/20`}
                  >
                    {project.category}
                  </span>
                </div>
  
                {/* Technologies */}
                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-purple-400/50 hover:text-purple-200 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
  
                {/* Top Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}
                ></div>
  
                {/* Hover Effect Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
  
          {/* Project Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "50+", label: "Projects Completed", icon: "✅", gradient: "from-green-400 to-emerald-500" },
              { number: "25+", label: "Happy Clients", icon: "😊", gradient: "from-blue-400 to-indigo-500" },
              { number: "15+", label: "Technologies", icon: "⚡", gradient: "from-purple-400 to-pink-500" },
              { number: "99%", label: "Success Rate", icon: "🎯", gradient: "from-orange-400 to-red-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3
                  className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
  
          {/* Client Testimonial Section */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-12 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/3 via-blue-500/3 to-indigo-500/3 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
  
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💬</span>
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic max-w-3xl mx-auto leading-relaxed">
                  "Working with this team has been exceptional. They delivered our project on time, within budget, and
                  exceeded our expectations in terms of quality and functionality."
                </blockquote>
                <div className="text-center">
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">CTO, TechMart Solutions</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our proven expertise and innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium">
                  <span className="group-hover:text-purple-100 transition-colors duration-300">Start a Project</span>
                </button>
                </a>
                <a href="#contact">
                <button className="group bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium">
                  <span className="group-hover:text-purple-200 transition-colors duration-300">View All Projects</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Floating Visual Elements */}
        <div className="absolute top-1/6 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-bounce opacity-10 hover:opacity-30 transition-opacity duration-300">
          <div className="absolute inset-4 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70 flex items-center justify-center">
            <span className="text-white text-lg">💼</span>
          </div>
        </div>
  
        <div className="absolute bottom-1/5 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-pulse delay-500 opacity-10 hover:opacity-30 transition-opacity duration-300">
          <div className="absolute inset-3 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70 flex items-center justify-center">
            <span className="text-white">🚀</span>
          </div>
        </div>
  
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg shadow-blue-500/40 animate-bounce delay-1000 opacity-10"></div>
  
        {/* Additional Floating Particles */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-40"></div>
        <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300 opacity-40"></div>
      </div>
    )
  }
  
  export default Projects
  