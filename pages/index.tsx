import React, { useState, useEffect } from 'react'
import Header from '@components/Header/Header'
import CardList from '@components/CardList/CardList'

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
      <Header />
      <CardList listAvos={productList} />
    </div>
  )
}

export default HomePage
