import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogoContainer}>
        <img
          className={styles.navbarLogoImage}
          src="/images/avocado-nav.svg"
          alt="avocado"
        />
        <p className={styles.navbarLogoTitle}>platzi avocado</p>
      </div>
      <menu className={styles.navbarMenu}>
        <Link href="/">
          <a className={styles.navbarLink}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.navbarLink}>About</a>
        </Link>
        <Link href="/">
          <a className={styles.navbarLink}>Canasta (0)</a>
        </Link>
        <img
          className={styles.navbarPicnic}
          src="/images/picnic-basket.svg"
          alt=""
        />
      </menu>
    </nav>
  )
}
