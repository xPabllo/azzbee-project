import React from 'react'
import styles from './Services.module.css'
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our expert trainers'
    },
    {
      icon: <FaRunning />,
      title: 'Cardio Classes',
      description: 'Improve your endurance with our high-energy cardio sessions'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Personal Training',
      description: 'Get personalized workout plans tailored to your goals'
    }
  ]

  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
