import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        PowerFit
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default Navbar
