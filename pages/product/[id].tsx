import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import styles from './product.module.css'
import ProductInfoCardList from '@components/ProductInfoCardList/ProductInfoCardList'
import { CartContext } from '@context/CartContext'
import { CartItem } from 'models/cart'

const ProductPage = () => {
  const cartContext = useContext(CartContext)
  const [product, setProduct] = useState<TProduct>()
  const [quantity, setQuantity] = useState(1)
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
  ) => {
    if (event.target.value === '') return
    setQuantity(parseInt(event.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCartItem: CartItem = new CartItem(
      product?.name as string,
      quantity,
      product?.price as number
    )

    cartContext?.addToCart(newCartItem)
    setQuantity(1)
  }

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.quantityInput}
              value={Number(quantity)}
              onChange={handleChangeInputQuantity}
              min={1}
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
