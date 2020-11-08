import React from 'react'
import Header from '@components/Header/Header'
import CardList from '@components/CardList/CardList'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-avo-alpha.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <>
      <Header />
      <CardList listAvos={productList} />
    </>
  )
}

export default HomePage
