import React from 'react'
import Link from 'next/link'
import Logo from '@components/Logo/Logo'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <label htmlFor="checkbox">
        <img className={styles.menuIcon} src="images/menu.svg" alt="menu" />
      </label>
      <input
        className={styles.checkbox}
        id="checkbox"
        type="checkbox"
        name="checkbox"
      />

      <menu className={styles.navbarMenu}>
        <Link href="/">
          <a className={`${styles.navbarLink}`}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.navbarLink}>About</a>
        </Link>
        <Link href="/">
          <a className={styles.navbarLink}>
            Canasta (0)
            <img
              className={styles.navbarPicnic}
              src="/images/picnic-basket.svg"
              alt=""
            />
          </a>
        </Link>
      </menu>
    </nav>
  )
}
