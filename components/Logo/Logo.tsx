import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link className={styles.logoContainer} href="/">
      <img
        className={styles.logoImage}
        src="/images/avocado-nav.svg"
        alt="avocado"
      />
      <p className={styles.logoTitle}>platzi avocado</p>
    </Link>
  )
}

export default Logo
