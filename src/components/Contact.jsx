import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");

 const sendEmail = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
  const TEMPLATE_USER = import.meta.env.VITE_EMAILJS_TEMPLATE; // Automated reply to user
  const TEMPLATE_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER; // Notification to owner
  const USER = import.meta.env.VITE_EMAILJS_USER;

  if (!SERVICE || !TEMPLATE_USER || !TEMPLATE_OWNER || !USER) {
    setStatus("error");
    console.error("EmailJS env variables missing");
    return;
  }

  try {
    // Automated reply to user
    await emailjs.sendForm(SERVICE, TEMPLATE_USER, form.current, USER);

    // Notification to owner
    await emailjs.send(SERVICE, TEMPLATE_OWNER, {
      name: form.current.name.value,
      email: form.current.email.value,
      title: form.current.title.value,
      message: form.current.message.value,
      owner_email: "parungaojosamine06@gmail.com" // <- your email
    }, USER);

    setStatus("sent");
    form.current.reset();
  } catch (error) {
    console.error("Email sending error:", error);
    setStatus("error");
  }
};


  const socialLinks = [
    { href: "https://github.com/Josaminep", Icon: Github, color: "#181717", outline: "#00C853" },
    { href: "https://www.linkedin.com/in/josamine-parungao/", Icon: Linkedin, color: "#0A66C2" },
  ];

  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-500 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
        Contact Me
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white dark:bg-white/10 p-6 rounded-2xl max-w-2xl w-full"
      >
        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <input
            name="name" // matches {{name}} in EmailJS templates
            placeholder="Your name"
            required
            className="p-3 rounded border border-gray-300 bg-white text-black dark:bg-white/5 dark:text-white"
          />
          <input
            name="email" // matches {{email}}
            placeholder="Your email"
            type="email"
            required
            className="p-3 rounded border border-gray-300 bg-white text-black dark:bg-white/5 dark:text-white"
          />
          <input
            name="title" // matches {{title}}
            placeholder="Subject / Title"
            required
            className="p-3 rounded border border-gray-300 bg-white text-black dark:bg-white/5 dark:text-white"
          />
          <textarea
            name="message" // matches {{message}}
            placeholder="Message"
            required
            className="p-3 rounded border border-gray-300 bg-white text-black dark:bg-white/5 dark:text-white min-h-[120px]"
          ></textarea>

          <div>
            <button
              type="submit"
              className="px-5 py-3 rounded bg-gradient-to-r from-jasamineBlue to-jasamineYellow font-semibold text-white"
            >
              Send Message
            </button>
            <span className="ml-4 text-black dark:text-white/80">
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message sent! I’ll do my best to respond as soon as possible. (Automated reply)"
                : status === "error"
                ? "Failed to send. Please check your configuration and try again."
                : ""}
            </span>
          </div>
        </form>
      </motion.div>

      {/* Social Buttons */}
      <div className="flex gap-6 mt-8">
        {socialLinks.map(({ href, Icon, color, outline }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
            style={{
              backgroundColor: outline ? "transparent" : color,
              border: outline ? `2px solid ${outline}` : "none",
            }}
          >
            <Icon size={22} color={outline ? outline : "white"} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
