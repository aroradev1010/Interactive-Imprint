import { useState } from "react";
import ParticlesContainer from "../../components/ParticlesContainer.js";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const showAlert = ({ text, type }) => {
    setAlert({ show: true, text, type });
    setTimeout(() => {
      setAlert({ show: false, text: "", type: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqabpoqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setLoading(false);
        showAlert({
          text: "Thank you for your message 😃",
          type: "success",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      showAlert({
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute z-0 h-full w-full top-3em">
        <ParticlesContainer />
      </div>
      <div className="h-full bg-primary/30 relative z-1">
        <div className="sm:container sm:mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full xs:mx-10">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let&apos;s <span className="text-accent">Connect.</span>
            </motion.h2>
            {alert.show && (
              <div
                className={`mb-6 p-4 rounded-lg text-white ${
                  alert.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {alert.text}
              </div>
            )}
            <motion.form
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="input"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="subject"
                className="input"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="message"
                className="textarea"
                required
              />
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                type="submit"
                disabled={loading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {loading ? "Sending..." : "Let's Talk"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
