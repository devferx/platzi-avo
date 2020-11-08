import React from 'react'
import ButtonLink from '@components/ButtonLink/ButtonLink'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textContent}>
        <h1 className={styles.textContentTitle}>avocados are the future!</h1>
        <p className={styles.textContentParagraph}>
          Nunca pares de aprender sobre los aguacates!
        </p>
        <div className={styles.LinkContainer}>
          <ButtonLink href="/yes-or-no">
            ¿Deberias comer un aguacate?
          </ButtonLink>
        </div>
      </div>
      <div className={styles.ImageContent}>
        <div className={styles.imagesContainer}>
          <img className={styles.dots} src="/images/dots.svg" alt="dots" />
          <img
            className={styles.avocado}
            src="/images/avocado-kawai.svg"
            alt="avocado kawai"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
