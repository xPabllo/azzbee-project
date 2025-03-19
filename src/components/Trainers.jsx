import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const trainers = [
  {
    name: 'John Doe',
    specialty: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3'
  },
  {
    name: 'Jane Smith',
    specialty: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3'
  },
  {
    name: 'Mike Johnson',
    specialty: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3'
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Trainers</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet our team of expert fitness professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div 
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${trainer.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600 mb-4">{trainer.specialty}</p>
                <div className="flex space-x-4">
                  <FaInstagram className="text-gray-600 hover:text-red-600 cursor-pointer" />
                  <FaTwitter className="text-gray-600 hover:text-red-600 cursor-pointer" />
                  <FaLinkedin className="text-gray-600 hover:text-red-600 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
