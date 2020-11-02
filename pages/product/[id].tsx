import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  return <section>{product?.name}</section>
}

export default ProductPage
