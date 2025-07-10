import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiCpu, FiDatabase, FiCloud, FiSmartphone, FiShield } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Software Engineering',
      description: 'Full-stack developers, frontend specialists, backend engineers, and DevOps professionals.',
      specialties: ['React/Vue/Angular', 'Node.js/Python/Java', 'Microservices', 'API Development']
    },
    {
      icon: FiDatabase,
      title: 'Data & Analytics',
      description: 'Data scientists, ML engineers, data analysts, and database administrators.',
      specialties: ['Machine Learning', 'Big Data', 'Analytics', 'Data Engineering']
    },
    {
      icon: FiCloud,
      title: 'Cloud & Infrastructure',
      description: 'Cloud architects, infrastructure engineers, and platform specialists.',
      specialties: ['AWS/Azure/GCP', 'Kubernetes', 'Infrastructure as Code', 'Site Reliability']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      description: 'iOS and Android developers, cross-platform specialists, and mobile architects.',
      specialties: ['React Native', 'Flutter', 'Swift/Kotlin', 'Mobile Architecture']
    },
    {
      icon: FiShield,
      title: 'Security Engineering',
      description: 'Cybersecurity experts, security architects, and compliance specialists.',
      specialties: ['Application Security', 'Network Security', 'Compliance', 'Penetration Testing']
    },
    {
      icon: FiCpu,
      title: 'Hardware Engineering',
      description: 'Hardware engineers, embedded systems developers, and IoT specialists.',
      specialties: ['Embedded Systems', 'IoT Development', 'Circuit Design', 'Firmware']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Engineering Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We recruit across all engineering disciplines, from emerging technologies 
            to established platforms. Our expertise spans the entire tech stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-800 mb-2">Key Specialties:</div>
                <div className="flex flex-wrap gap-2">
                  {service.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;