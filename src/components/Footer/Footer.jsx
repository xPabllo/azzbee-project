import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>PowerFit Gym</h3>
          <p>123 Fitness Street</p>
          <p>New York, NY 10001</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className={styles.section}>
          <h3>Hours</h3>
          <p>Monday - Friday: 5am - 10pm</p>
          <p>Saturday: 7am - 8pm</p>
          <p>Sunday: 8am - 6pm</p>
        </div>
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 PowerFit Gym. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
