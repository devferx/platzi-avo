import React from 'react'
import styles from './ProductInfoCard.module.css'

interface Props {
  attribute: string
  value: string
}

const ProductInfoCard = ({ attribute, value }: Props) => (
  <div className={`${styles.productCardAttribute} ${styles[attribute]}`}>
    <p>
      <strong>{attribute}</strong>
    </p>
    <p className={styles.cardTextImportant}>{value}</p>
  </div>
)

export default ProductInfoCard
