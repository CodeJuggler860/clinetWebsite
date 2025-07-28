"use client"

import { useState } from "react"

const FAQs = ({id}) => {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openFAQ, setOpenFAQ] = useState(null)

  const categories = [
    { id: "general", name: "General Inquiries", icon: "❓", gradient: "from-purple-400 to-pink-500" },
    { id: "services", name: "Services", icon: "⚙️", gradient: "from-blue-400 to-indigo-500" },
    { id: "technical", name: "Technical Support", icon: "🛠️", gradient: "from-teal-400 to-cyan-500" },
  ]

  const faqData = {
    general: [
      {
        id: 1,
        question: "What makes your software house different from others?",
        answer:
          "We combine cutting-edge technology with deep industry expertise to deliver scalable, future-ready solutions. Our team of passionate professionals focuses on understanding your unique business needs and creating custom solutions that drive real results. We've successfully delivered 50+ projects across various industries with a 99% client satisfaction rate.",
      },
      {
        id: 2,
        question: "How long does it typically take to complete a project?",
        answer:
          "Project timelines vary based on complexity and scope. Simple web applications typically take 2-4 months, while complex enterprise solutions may require 6-12 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process with regular milestones and progress reports.",
      },
      {
        id: 3,
        question: "Do you work with international clients?",
        answer:
          "Yes, we work with clients globally. Based in Pakistan, we serve clients across North America, Europe, Asia, and the Middle East. We have experience working across different time zones and have established communication protocols to ensure seamless collaboration regardless of geographical location.",
      },
      {
        id: 4,
        question: "What is your project management approach?",
        answer:
          "We follow Agile methodology with regular sprints, daily standups, and continuous client feedback. Our project management includes detailed planning, risk assessment, regular progress updates, and transparent communication. We use modern project management tools to keep you informed about every aspect of your project's development.",
      },
      {
        id: 5,
        question: "Can you help with existing software maintenance and updates?",
        answer:
          "We provide comprehensive maintenance and support services for existing software applications. This includes bug fixes, security updates, performance optimization, feature enhancements, and technology upgrades. We can work with applications built by other teams or take over legacy systems.",
      },
    ],
    services: [
      {
        id: 1,
        question: "What types of custom software do you develop?",
        answer:
          "We develop a wide range of custom software including web applications, mobile apps (iOS/Android), desktop applications, enterprise software, e-commerce platforms, CRM systems, and API integrations. Our expertise spans across various industries including healthcare, finance, retail, logistics, and education.",
      },
      {
        id: 2,
        question: "Do you provide AI and machine learning solutions?",
        answer:
          "Yes, we specialize in AI-powered solutions including machine learning models, natural language processing, computer vision, predictive analytics, and intelligent automation. We can integrate AI capabilities into existing systems or build new AI-driven applications from scratch using technologies like TensorFlow, PyTorch, and cloud AI services.",
      },
      {
        id: 3,
        question: "Can you integrate with our existing systems?",
        answer:
          "Definitely! We have extensive experience in system integration and API development. We can connect your new software with existing databases, third-party services, legacy systems, and external APIs. Our integration approach ensures data consistency, security, and seamless workflow between different systems.",
      },
      {
        id: 4,
        question: "Do you offer cloud migration services?",
        answer:
          "Yes, we provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with major cloud providers like AWS, Azure, and Google Cloud. Our cloud solutions include infrastructure setup, containerization, microservices architecture, and automated deployment pipelines.",
      },
      {
        id: 5,
        question: "What technologies do you specialize in?",
        answer:
          "Our technology stack includes React, Node.js, Python, Java, .NET, React Native, Flutter, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, and many more. We stay updated with the latest technologies and choose the best tech stack based on your project requirements, scalability needs, and long-term goals.",
      },
    ],
    technical: [
      {
        id: 1,
        question: "How do you ensure the security of our applications?",
        answer:
          "Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, authorization protocols, regular security audits, and vulnerability assessments. We follow OWASP guidelines, implement secure coding practices, and ensure compliance with relevant data protection regulations like GDPR.",
      },
      {
        id: 2,
        question: "What kind of testing do you perform?",
        answer:
          "We conduct comprehensive testing including unit testing, integration testing, system testing, performance testing, security testing, and user acceptance testing. We use automated testing frameworks and continuous integration pipelines to ensure code quality and reliability throughout the development process.",
      },
      {
        id: 3,
        question: "Do you provide documentation and training?",
        answer:
          "Yes, we provide comprehensive documentation including technical documentation, user manuals, API documentation, and deployment guides. We also offer training sessions for your team to ensure smooth adoption of the new system. Our documentation is detailed, well-structured, and regularly updated.",
      },
      {
        id: 4,
        question: "What support do you provide after project completion?",
        answer:
          "We offer various post-launch support packages including bug fixes, performance monitoring, security updates, feature enhancements, and technical support. Our support team is available via multiple channels and we provide different SLA options based on your business needs and criticality of the application.",
      },
      {
        id: 5,
        question: "How do you handle data backup and recovery?",
        answer:
          "We implement robust backup and disaster recovery strategies including automated backups, redundant storage, point-in-time recovery, and regular backup testing. We design systems with high availability and fault tolerance, ensuring your data is always protected and recoverable in case of any issues.",
      },
    ],
  }

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div id={id}className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/15 via-indigo-900/10 to-transparent"></div>
        <div className="absolute top-1/6 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl animate-bounce delay-500"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-transparent"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.04) 1px, transparent 0)`,
            backgroundSize: "120px 120px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* FAQs Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, processes, and technical capabilities
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-8 py-4 bg-gray-900/40 backdrop-blur-lg border rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 ${
                activeCategory === category.id
                  ? `border-${category.gradient.split(" ")[1].replace("to-", "").replace("-500", "-400")}/60 bg-${category.gradient.split(" ")[1].replace("to-", "").replace("-500", "-500")}/10 shadow-lg shadow-${category.gradient.split(" ")[1].replace("to-", "").replace("-500", "-500")}/20`
                  : "border-gray-700/50 hover:border-purple-400/60 hover:bg-purple-500/10"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span
                className={`font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? `text-${category.gradient.split(" ")[1].replace("to-", "").replace("-500", "-200")}`
                    : "text-gray-300 group-hover:text-purple-200"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-20">
          {faqData[activeCategory].map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-400/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-purple-400 font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === faq.id ? "rotate-180 bg-gradient-to-br from-purple-400/30 to-blue-500/30" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-purple-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expandable Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pl-14">
                    <div className="w-full h-px bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { number: "24/7", label: "Support Available", icon: "🕒", gradient: "from-green-400 to-emerald-500" },
            { number: "< 2hrs", label: "Response Time", icon: "⚡", gradient: "from-blue-400 to-indigo-500" },
            { number: "99%", label: "Issue Resolution", icon: "✅", gradient: "from-purple-400 to-pink-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/60 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <h3
                className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="text-center mb-16">
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-12 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/2 via-blue-500/2 to-indigo-500/2 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Can't find the answer you're looking for? Our support team is here to help you with any questions or
                concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium">
                  <span className="group-hover:text-purple-100 transition-colors duration-300">Contact Support</span>
                </button>
                </a>
                <a href="#contact">
                <button className="group bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium">
                  <span className="group-hover:text-purple-200 transition-colors duration-300">Schedule a Call</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Help Resources */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Documentation",
              description: "Comprehensive guides and API documentation",
              icon: "📚",
              gradient: "from-blue-400 to-indigo-500",
            },
            {
              title: "Video Tutorials",
              description: "Step-by-step video guides and walkthroughs",
              icon: "🎥",
              gradient: "from-purple-400 to-pink-500",
            },
            {
              title: "Community Forum",
              description: "Connect with other users and share experiences",
              icon: "👥",
              gradient: "from-teal-400 to-cyan-500",
            },
          ].map((resource, index) => (
            <div
              key={index}
              className="group bg-gray-900/30 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-purple-400/50 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h4
                className={`text-lg font-semibold mb-2 bg-gradient-to-r ${resource.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
              >
                {resource.title}
              </h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute top-1/5 right-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-xl shadow-purple-500/40 animate-bounce opacity-10 hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-3 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-sm">❓</span>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-500/40 animate-pulse delay-500 opacity-10 hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-2 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-70 flex items-center justify-center">
          <span className="text-white text-xs">💡</span>
        </div>
      </div>

      {/* Additional Floating Particles */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-30"></div>
      <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300 opacity-30"></div>
    </div>
  )
}

export default FAQs
