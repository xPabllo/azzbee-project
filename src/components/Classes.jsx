import React from 'react';
import { motion } from 'framer-motion';

const classes = [
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3',
    time: 'Mon, Wed, Fri - 9:00 AM'
  },
  {
    title: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3',
    time: 'Tue, Thu - 10:00 AM'
  },
  {
    title: 'Cardio',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3',
    time: 'Mon, Wed, Fri - 11:00 AM'
  }
];

const Classes = () => {
  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Classes</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our diverse range of fitness classes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${classItem.image})` }}
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-600">{classItem.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
