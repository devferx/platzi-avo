import React, { useState, useEffect } from 'react'
import Header from '@components/Header/Header'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      {/* <Header /> */}
      {/* {productList.map((product) => (
        <div>{product.name}</div>
      ))} */}
    </div>
  )
}

export default HomePage
