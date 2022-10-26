import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import ButtonLink from '@components/ButtonLink/ButtonLink'

interface Props {
  avo: TProduct
}

const Card = ({ avo }: Props) => (
  <div className={styles.card}>
    <Image
      className={styles.image}
      src={avo.image}
      width={234}
      height={234}
      alt={avo.name}
    />
    {/* <img className={styles.image} src={avo.image} alt={avo.name} /> */}
    <div>
      <p className={styles.title}>{avo.name}</p>
      <p className={styles.price}>
        Price: <strong>{avo.price}$</strong>
      </p>
    </div>

    <ButtonLink href={`/product/${avo.id}`}>see more</ButtonLink>
  </div>
)

export default Card
