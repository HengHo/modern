"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-gray-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass p-8 rounded-2xl space-x-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href=""
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                0951792134
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href=""
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                0951792134
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href=""
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                0951792134
              </a>
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
