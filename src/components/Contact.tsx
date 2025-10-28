import React, { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";

declare global {
  interface Window {
    Email: any;
  }
}

const Contact: React.FC = () => {
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "pirammasakthi42@gmail.com",
    };

    setLoading(true);

    emailjs
      .send(
        "service_9mn7yee",
        "template_w2pz3wh",
        templateParams,
        "5wkccc0qNuO9EC3JP"
      )
      .then(
        () => {
          setAlertMessage("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          setAlertMessage("Error sending message: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-5 gradient-text"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>

        <motion.h3
          className="text-1xl font-semibold mb-10 text-purple-300 flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium">Contact Me</p>
          <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </motion.h3>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            className="pl-10 sm:pl-20 mt-12 mb-12 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-300">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <Mail className="w-5 h-5 text-purple-300" />
                </motion.div>
                <span className="text-gray-300">pirammasakthi42@gmail.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <Phone className="w-5 h-5 text-purple-300" />
                </motion.div>
                <span className="text-gray-300">+91 9566442144</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <MapPin className="w-5 h-5 text-purple-300" />
                </motion.div>
                <span className="text-gray-300">Dindigul, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="pr-0 sm:px-12 md:px-20 space-y-7"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-purple-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-[#151515] border border-purple-600/20 rounded-lg text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-purple-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#151515] border border-purple-600/20 rounded-lg text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-purple-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#151515] border border-purple-600/20 rounded-lg text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors mb-6"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {alertMessage && (
              <div className="text-center text-green-500 p-3">
                {alertMessage}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
