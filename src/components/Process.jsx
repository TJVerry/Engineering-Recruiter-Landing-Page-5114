import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiFilter, FiUserCheck, FiHandshake } = FiIcons;

const Process = () => {
  const steps = [
    {
      icon: FiSearch,
      title: 'Discovery & Requirements',
      description: 'We work closely with you to understand your technical needs, team culture, and growth objectives.',
      details: ['Technical requirements analysis', 'Team culture assessment', 'Role definition', 'Success metrics']
    },
    {
      icon: FiFilter,
      title: 'Talent Sourcing',
      description: 'Our expert recruiters leverage our extensive network and advanced sourcing techniques.',
      details: ['Network activation', 'Active sourcing', 'Passive candidate outreach', 'Referral programs']
    },
    {
      icon: FiUserCheck,
      title: 'Screening & Evaluation',
      description: 'Comprehensive technical and cultural fit assessment to ensure quality matches.',
      details: ['Technical screening', 'Cultural fit evaluation', 'Reference checks', 'Portfolio review']
    },
    {
      icon: FiHandshake,
      title: 'Placement & Support',
      description: 'We facilitate the entire hiring process and provide ongoing support for successful integration.',
      details: ['Interview coordination', 'Offer negotiation', 'Onboarding support', 'Follow-up care']
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that delivers results. We've refined our process 
            over years of successful placements to ensure efficiency and quality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <SafeIcon icon={step.icon} className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;