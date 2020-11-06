import React from 'react'
import ProductForm from '@components/ProductForm/ProductForm'
import styles from './ProductHeader.module.css'

interface Props {
  product: TProduct
}

const ProductHeader = ({ product }: Props) => (
  <article className={styles.hero}>
    <div className={styles.heroImageContainer}>
      <img
        className={styles.heroImage}
        src={product.image}
        alt={product.name}
      />
    </div>

    <div className={styles.heroTextContainer}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>precio: {product.price}$</p>
      <span className={styles.sku}>SKU: {product.sku}</span>
      <ProductForm product={product} />
    </div>
  </article>
)

export default ProductHeader
