import React from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f'
  ]

  return (
    <section className={styles.gallery} id="gallery">
      <h2>Our Facility</h2>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={`${image}?auto=format&fit=crop&w=500&q=80`} alt={`Gym facility ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
