import React from 'react'
import Link from 'next/link'
import styles from './Card.module.css'

interface Props {
  avo: TProduct
}

const Card = ({ avo }: Props) => (
  <div className={styles.card}>
    <img className={styles.image} src={avo.image} alt={avo.name} />
    <div>
      <p className={styles.title}>{avo.name}</p>
      <p className={styles.price}>
        Precio: <strong>{avo.price}$</strong>
      </p>
    </div>
    <Link href={`/`}>
      <a className={styles.btn}>ver mas</a>
    </Link>
  </div>
)

export default Card
