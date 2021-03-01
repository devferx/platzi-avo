import React from 'react'
import Card from '@components/Card/Card'
import styles from './CardList.module.css'

interface Props {
  listAvos: Array<TProduct>
}

const CardList = ({ listAvos }: Props) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Our products</h3>
      <article className={styles.grid}>
        {listAvos.map((avo) => (
          <Card key={avo.name} avo={avo} />
        ))}
      </article>
    </section>
  )
}

export default CardList
