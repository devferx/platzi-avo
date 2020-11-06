import React from 'react'
import ProductInfoCardList from '@components/ProductInfoCardList/ProductInfoCardList'
import styles from './ProductInfo.module.css'

interface Props {
  product: TProduct
}

const ProductInfo = ({ product }: Props) => (
  <article className={styles.productInfo}>
    <p className={styles.productInfoTitle}>About this avocado</p>
    <p className={styles.productInfoDescriptionText}>
      {product.attributes.description}
    </p>
    <div className={styles.divider}></div>
    <ProductInfoCardList attributes={product.attributes} />
  </article>
)

export default ProductInfo
