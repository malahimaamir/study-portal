import onlineLearning from "../assets/contact.jpg";
import libraryResources from "../assets/hero-education.jpg";
import consultation from "../assets/consultation.jpg";
import careerGuidance from "../assets/career-guidance.jpg";
import certification from "../assets/certification.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Online Learning Platform",
      description:
        "Access comprehensive courses and interactive learning materials from anywhere, anytime.",
      image: onlineLearning,
      features: [
        "24/7 Access",
        "Interactive Content",
        "Progress Tracking",
        "Mobile Friendly",
      ],
    },
    {
      title: "Digital Library Resources",
      description:
        "Extensive collection of books, research papers, and educational materials.",
      image: libraryResources,
      features: [
        "Digital Books",
        "Research Papers",
        "Audio Materials",
        "Offline Access",
      ],
    },
    {
      title: "Academic Consultation",
      description:
        "One-on-one guidance from expert educators to support your learning journey.",
      image: consultation,
      features: [
        "Personal Mentoring",
        "Study Plans",
        "Progress Reviews",
        "Career Advice",
      ],
    },
    {
      title: "Career Guidance",
      description:
        "Professional counseling to help you choose the right career path and achieve your goals.",
      image: careerGuidance,
      features: [
        "Career Assessment",
        "Industry Insights",
        "Job Placement",
        "Skill Development",
      ],
    },
    {
      title: "Digital Certification",
      description:
        "Earn recognized certificates and credentials to boost your professional profile.",
      image: certification,
      features: [
        "Industry Recognition",
        "Digital Badges",
        "Verification System",
        "Portfolio Building",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black/80">
            Our Educational Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive educational solutions designed to enhance
            your learning experience and help you achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-education-blue/10 to-education-green/10 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-education-blue transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-education-green rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-education-blue to-education-green text-white rounded-xl font-medium shadow-md transition-transform duration-300 hover:scale-105 hover:from-education-blue/90 hover:to-education-green/90">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "24/7",
              title: "Support Available",
              desc: "Round-the-clock assistance for all your learning needs",
              from: "blue",
              to: "green",
            },
            {
              icon: "AI",
              title: "Smart Learning",
              desc: "AI-powered personalized learning experiences",
              from: "green",
              to: "blue",
            },
            {
              icon: "∞",
              title: "Unlimited Access",
              desc: "Unrestricted access to all educational resources",
              from: "blue",
              to: "green",
            },
            {
              icon: "★",
              title: "Premium Quality",
              desc: "High-quality content from expert educators",
              from: "green",
              to: "blue",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r from-education-${item.from} to-education-${item.to} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-white text-2xl font-bold">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
