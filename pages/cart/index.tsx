import { table } from 'console'
import React from 'react'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.title}>Carrito de compras</h1>
      <article>
        <table className={styles.contentTable}>
          <thead>
            <tr className={styles.tableHeadRow}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableBodyRow}>
              <td>Avo 1</td>
              <td>1.25 $</td>
              <td>3</td>
              <td className={styles.actions}>
                <button className={styles.action}>
                  <img
                    className={styles.actionIcon}
                    src="/images/add.svg"
                    alt="add"
                  />
                </button>
                <button className={styles.action}>
                  <img
                    className={styles.actionIcon}
                    src="/images/remove.svg"
                    alt="add"
                  />
                </button>
              </td>
            </tr>
            <tr className={styles.tableBodyRow}>
              <td>Avo 1</td>
              <td>1.25 $</td>
              <td>3</td>
              <td>
                <button className={styles.action}>
                  <img
                    className={styles.actionIcon}
                    src="/images/add.svg"
                    alt="add"
                  />
                </button>
                <button className={styles.action}>
                  <img
                    className={styles.actionIcon}
                    src="/images/remove.svg"
                    alt="add"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default Cart
