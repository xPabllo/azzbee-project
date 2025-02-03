import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Transform Your Body</h1>
        <p>Join PowerFit and start your fitness journey today</p>
        <button className={styles.cta}>Join Now</button>
      </div>
    </section>
  )
}

export default Hero
