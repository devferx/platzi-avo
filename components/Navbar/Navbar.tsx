import React, { useContext } from 'react'
import Link from 'next/link'
import Logo from '@components/Logo/Logo'
import styles from './Navbar.module.css'
import { CartContext } from '@context/CartContext'

export default function Navbar() {
  const cartContext = useContext(CartContext)
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
        <Link href="/cart">
          <a className={styles.navbarLink}>
            Cart ({cartContext?.totalQuantityProducts})
            <img
              className={styles.navbarPicnic}
              src="/images/picnic-basket.svg"
              alt="picnic basket"
            />
          </a>
        </Link>
      </menu>
    </nav>
  )
}
