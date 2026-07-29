import React, { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Email: any;
  }
}

const Contact: React.FC = () => {
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.06 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "pirammasakthi42@gmail.com",
    };

    setLoading(true);

    emailjs
      .send(
        "service_3biig9a",
        "template_w2pz3wh",
        templateParams,
        "5wkccc0qNuO9EC3JP"
      )
      .then(
        () => {
          setAlertMessage("Message sent successfully!");
          setLoading(false);

          // Clear form fields
          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";

          // Hide alert after 3 seconds
          setTimeout(() => {
            setAlertMessage(null);
          }, 3000);
        },
        (error) => {
          setAlertMessage("Error sending message: " + error.text);
          setLoading(false);

          // Hide alert after 3 seconds
          setTimeout(() => {
            setAlertMessage(null);
          }, 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-8 pb-20 bg-transparent relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full opacity-20" />
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full opacity-20" />

      <motion.div
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Get In Touch
        </h2>

        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">Contact Me</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* Contact Container Box - Glassmorphism Card */}
        <div className="bg-[#121212]/75 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:border-purple-500/20 transition-all duration-300 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-lg font-bold tracking-wider text-purple-400 uppercase mb-6">
                  Contact Information
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Have an exciting project or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email Me</span>
                      <span className="text-gray-300 text-base font-medium">pirammasakthi42@gmail.com</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call Me</span>
                      <span className="text-gray-300 text-base font-medium">+91 9566442144</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Location</span>
                      <span className="text-gray-300 text-base font-medium">Dindigul, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Send Message Form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-7 p-6 sm:p-8 space-y-5"
            >
              <h3 className="text-lg font-bold tracking-wider text-purple-400 uppercase mb-2">
                Send a Message
              </h3>
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-purple-500/10 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {alertMessage && (
                <div className="text-center text-xs font-semibold text-green-400 pt-2 animate-pulse">
                  {alertMessage}
                </div>
              )}
            </form>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
