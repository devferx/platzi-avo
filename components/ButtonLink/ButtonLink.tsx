import React from 'react'
import Link from 'next/link'
import styles from './ButtonLink.module.css'

const ButtonLink = ({
  href,
  as,
  children,
}: {
  href: string
  as?: string
  children: React.ReactNode
}) => (
  <Link href={href} as={as}>
    <a className={styles.btn}>{children}</a>
  </Link>
)

export default ButtonLink
