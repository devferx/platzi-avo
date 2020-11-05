import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logoContainer}>
        <img
          className={styles.logoImage}
          src="/images/avocado-nav.svg"
          alt="avocado"
        />
        <p className={styles.logoTitle}>platzi avocado</p>
      </a>
    </Link>
  )
}

export default Logo
