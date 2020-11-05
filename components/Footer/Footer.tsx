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
            <strong>Nosotros</strong>
          </p>
          <Link href="/about">
            <a className={styles.footerLink}>Conoce más</a>
          </Link>
        </div>
        <div>
          <p>
            <strong>Servicios</strong>
          </p>
          <Link href="/about">
            <a className={styles.footerLink}>Todos los productos</a>
          </Link>
        </div>
        <div>
          <p>
            <strong>creado por</strong>
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
