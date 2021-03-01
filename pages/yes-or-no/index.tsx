import React from 'react'
import styles from './yesOrNo.module.css'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://platzi-avocados.vercel.app/api/yes-or-no'
  )
  const { data } = await response.json()

  return {
    props: {
      answer: data,
    },
  }
}

const YesOrNo = ({ answer }: { answer: string }) => {
  return (
    <section className={styles.centerItems}>
      <h1 className={styles.title}>Should you eat an avocado?</h1>
      <h3 className={styles.answer}>{answer}</h3>
    </section>
  )
}

export default YesOrNo
