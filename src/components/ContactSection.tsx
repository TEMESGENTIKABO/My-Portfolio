"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactData } from "@/data/contact";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

import { FieldError } from "react-hook-form";

interface InputFieldProps {
  id: keyof FormInputs;
  label: string;
  type: string;
  register: ReturnType<typeof useForm<FormInputs>>["register"];
  errors: Partial<Record<keyof FormInputs, FieldError>>;
  required?: string;
  pattern?: { value: RegExp; message: string };
}

const InputField = ({ id, label, type, register, errors, required, pattern }: InputFieldProps) => (
  <motion.div whileHover={{ scale: 1.01 }} className="relative z-0">
    <input
      type={type}
      id={id}
      {...register(id, { required, pattern })}
      placeholder=" "
      className={`block w-full px-4 py-4 text-lg bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer 
        ${errors[id] ? "border-red-500" : "border-gray-300 dark:border-gray-600"} 
        ${type === "textarea" ? "h-32 resize-none" : ""}`}
    />
    <label 
      htmlFor={id}
      className={`absolute text-lg duration-300 transform -translate-y-7 scale-75 top-3 z-10 origin-[0] left-4 peer-focus:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7
        ${errors[id] ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}
    >
      {label}
    </label>
    {errors[id] && (
      <motion.p 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 ml-2 text-sm text-red-500"
      >
        {errors[id].message}
      </motion.p>
    )}
  </motion.div>
);

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!", {
        theme: "colored",
        style: { background: "#4BB543", color: "white" }
      });
      reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        theme: "colored",
        style: { background: "#ff4444", color: "white" }
      });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Have a project in mind or just want to say hello?<br className="hidden md:block" /> 
            Drop me a message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Glowing Card Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <InputField
                  id="name"
                  label="Your Name"
                  type="text"
                  register={register}
                  errors={errors}
                  required="Name is required"
                />
                
                <InputField
                  id="email"
                  label="Email Address"
                  type="email"
                  register={register}
                  errors={errors}
                  required="Email is required"
                  pattern={{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }}
                />

                <InputField
                  id="message"
                  label="Your Message"
                  type="textarea"
                  register={register}
                  errors={errors}
                  required="Message is required"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contact Details
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Email", value: contactData.email, href: `mailto:${contactData.email}`, icon: "✉️" },
                  { title: "Phone", value: contactData.phone, href: `tel:${contactData.phone}`, icon: "📞" },
                  { title: "Address", value: contactData.address, href: `https://www.google.com/maps/search/?api=1&query=${contactData.address}`, icon: "📍" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-xl">
                      <span className="text-2xl text-purple-600 dark:text-purple-400">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {item.title}
                      </p>
                      <a
                        href={item.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Spaces
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {contactData.socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
                  >
                    <i className={`devicon-${link.icon}-plain text-4xl text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        toastStyle={{
          borderRadius: "12px",
          fontFamily: "inherit",
        }}
      />
       <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.23129296875!2d118.9633153153166!3d32.10927974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b5a5a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sWenyuan%20Road%2C%20Xianlin%2C%20Qixia%20District%2C%20Nanjing%2C%20Jiangsu%2C%20China%2C%20210046!5e0!3m2!1sen!2sus!4v1625060000000!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
    </section>
  );
};

export default ContactSection;