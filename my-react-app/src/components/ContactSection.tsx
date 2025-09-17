import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactImg from "../assets/contact.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-education-blue/70 to-education-green/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black/80">
            Contact Us
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Get in touch with us for any questions, admissions inquiries, or
            support. We're here to help you on your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                title: "Email",
                details: ["info@fgphstc.edu", "admissions@fgphstc.edu"],
              },
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Phone",
                details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Address",
                details: ["123 Education Street", "Learning City, LC 12345"],
              },
              {
                icon: <Clock className="w-6 h-6 text-white" />,
                title: "Office Hours",
                details: [
                  "Mon-Fri: 8:00 AM - 6:00 PM",
                  "Sat: 9:00 AM - 4:00 PM",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-education-blue to-education-green rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    {item.details.map((d, i) => (
                      <p key={i} className="text-gray-100">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-education-blue"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-education-blue"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-education-blue"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-education-blue"
                      placeholder="Subject of your message"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-education-blue resize-none"
                    placeholder="Please describe your inquiry or message in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-education-blue to-education-green hover:from-education-blue/90 hover:to-education-green/90 transition-all duration-300 transform hover:scale-105 py-3 text-lg font-semibold rounded-md text-white"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status === "success" && (
                <p className="text-green-200 mt-4">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-200 mt-4">
                  Failed to submit form. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
