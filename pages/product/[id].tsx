import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import styles from './product.module.css'
import ProductInfoCard from '@components/ProductInfoCard/ProductInfoCard'
import ProductInfoCardList from '@components/ProductInfoCardList/ProductInfoCardList'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const [quantity, setQuantity] = useState(0)
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const res = await fetch(`/api/avo/${id}`)
        const data = await res.json()
        setProduct(data)
      }
    }

    fetchData()
  }, [id])

  const handleChangeInputQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setQuantity(parseInt(event.target.value))

  return product?.name ? (
    <section className={styles.mainContainer}>
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
          <form className={styles.form}>
            <input
              className={styles.quantityInput}
              value={quantity}
              onChange={handleChangeInputQuantity}
              min={0}
              max={99}
              type="number"
            />
            <button className={styles.formBtn} type="submit">
              Agregar al carrito
            </button>
          </form>
        </div>
      </article>

      <article className={styles.productInfo}>
        <p className={styles.productInfoTitle}>About this avocado</p>
        <p className={styles.productInfoDescriptionText}>
          {product.attributes.description}
        </p>
        <div className={styles.divider}></div>
        <ProductInfoCardList attributes={product.attributes} />
      </article>
    </section>
  ) : (
    <div className={styles.avoLoading}>
      <img
        className={styles.avoLoadingImage}
        src="/images/avocado-kawai.png"
        alt="avocado kawai"
      />
    </div>
  )
}

export default ProductPage
