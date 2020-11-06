import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import ProductHeader from '@components/ProductHeader/ProductHeader'
import ProductInfo from '@components/ProductInfo/ProductInfo'
import Loading from '@components/Loading/Loading'
import styles from './product.module.css'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()

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

  return product?.name ? (
    <section className={styles.mainContainer}>
      <ProductHeader product={product} />
      <ProductInfo product={product} />
    </section>
  ) : (
    <Loading />
  )
}

export default ProductPage
