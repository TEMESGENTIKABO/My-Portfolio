"use client";
import { motion } from "framer-motion";
import { contactData } from "@/data/contact";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async () => {
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
      id="contact"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  {...register("message", { required: "Message is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-300">📧</span>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                  >
                    {contactData.email}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-300">📞</span>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                  >
                    {contactData.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-300">📍</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {contactData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                {contactData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                  >
                    <i className={`devicon-${link.icon}-plain text-3xl`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Integration */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0a5f5a5e5f5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625060000000!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
}
