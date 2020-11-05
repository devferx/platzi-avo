import React from 'react'
import ProductInfoCard from '@components/ProductInfoCard/ProductInfoCard'
import styles from './ProductInfoCardList.module.css'

interface Props {
  attributes: TProductAttributes
}

const ProductInfoCardList = ({ attributes }: Props) => (
  <div className={styles.productContainer}>
    {Object.keys(attributes)
      .filter((key) => key !== 'description')
      .map((key: string) => (
        <ProductInfoCard
          key={key}
          attribute={key}
          value={attributes[key as keyof TProductAttributes]}
        />
      ))}
  </div>
)

export default ProductInfoCardList
