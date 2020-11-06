import AboutGrid from '@components/AboutGrid/AboutGrid'
import React from 'react'
import styles from './About.module.css'

const AboutPage = () => (
  <section className={styles.container}>
    <article className={styles.heroContainer}>
      <h3 className={styles.heroText}>Acerca de los aguacates</h3>
    </article>

    <AboutGrid />
  </section>
)

export default AboutPage
