import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaDumbbell size={40} />,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment for all your workout needs'
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: 'Fitness Training',
    description: 'Professional training programs tailored to your goals'
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Expert Trainers',
    description: 'Certified personal trainers to guide and motivate you'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            We offer a wide range of services to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-lg text-center"
            >
              <div className="text-red-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
