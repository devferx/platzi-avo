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
  <Link href={href} passHref>
    <a className={styles.btn}>{children}</a>
  </Link>
)

export default ButtonLink
