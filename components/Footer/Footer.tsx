import React from 'react'
import Logo from '@components/Logo/Logo'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Logo />
      <div className={styles.footerGrid}>
        <div>
          <p>
            <strong>About Us</strong>
          </p>
          <Link className={styles.footerLink} href="/about">
            About Avocados
          </Link>
        </div>
        <div>
          <p>
            <strong>Services</strong>
          </p>
          <Link className={styles.footerLink} href="/about">
            All Products
          </Link>
        </div>
        <div>
          <p>
            <strong>created by</strong>
          </p>
          <a className={styles.footerLink} href="https://twitter.com/devferx">
            devferx
          </a>
        </div>
      </div>

      <div className={styles.colophonEntry}>
        <p>
          Icons made by Freepik from{' '}
          <a
            className={styles.footerLink}
            href="www.flaticon.com"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </p>
        <p>Avocado images taken from Avocado 101 at California Avocado</p>
      </div>
    </footer>
  )
}

export default Footer
