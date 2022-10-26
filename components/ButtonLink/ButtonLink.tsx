import React from 'react'
import Link from 'next/link'
import styles from './ButtonLink.module.css'

const ButtonLink = ({
  href,
  children,
}: {
  href: string
  as?: string
  children: React.ReactNode
}) => (
  <Link className={styles.btn} href={href} passHref>
    {children}
  </Link>
)

export default ButtonLink
