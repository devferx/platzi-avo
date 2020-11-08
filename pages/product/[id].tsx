import React, { useState, useEffect, useContext } from 'react'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import ProductHeader from '@components/ProductHeader/ProductHeader'
import ProductInfo from '@components/ProductInfo/ProductInfo'
import Loading from '@components/Loading/Loading'
import styles from './product.module.css'

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avocados.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://platzi-avocados.vercel.app//api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
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
