import React from 'react'
import Link from 'next/link'
import styles from './Card.module.css'
import ButtonLink from '@components/ButtonLink/ButtonLink'

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

    <ButtonLink href={'/product/[id]'} as={`/product/${avo.id}`}>
      ver mas
    </ButtonLink>
  </div>
)

export default Card
