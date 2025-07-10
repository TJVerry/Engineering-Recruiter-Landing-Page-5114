import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiMail, FiPhone } = FiIcons;

const CTA = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you find the perfect engineering talent 
              for your next project or career opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
                <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-100">
                <SafeIcon icon={FiMail} className="text-xl" />
                <span>hello@techtalentpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <SafeIcon icon={FiPhone} className="text-xl" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-medium">Industry Expertise</div>
                    <div className="text-blue-100 text-sm">Deep understanding of engineering roles and requirements</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-medium">Extensive Network</div>
                    <div className="text-blue-100 text-sm">Access to 25,000+ vetted engineering professionals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-medium">Proven Results</div>
                    <div className="text-blue-100 text-sm">95% success rate with first-year retention</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-medium">Ongoing Support</div>
                    <div className="text-blue-100 text-sm">Dedicated support throughout the hiring process</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;