import React, { useContext } from 'react'
import styles from './Cart.module.css'
import { CartContext } from '@context/CartContext'

const Cart = () => {
  const cartContext = useContext(CartContext)

  const handleAdd = (cartItemName: string, quantityToAdd: number) => {
    cartContext?.addProduct(cartItemName, quantityToAdd)
  }

  return (
    <section className={styles.mainContainer}>
      {cartContext?.cart.length !== 0 ? (
        <>
          <h1 className={styles.title}>Carrito de compras</h1>
          <article>
            <table className={styles.contentTable}>
              <thead>
                <tr className={styles.tableHeadRow}>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price Unit.</th>
                  <th>Price Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartContext?.cart.map((item) => (
                  <tr key={item.productName} className={styles.tableBodyRow}>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price} $</td>
                    <td>{(item.quantity * item.price).toFixed(2)} $</td>
                    <td>
                      <button
                        className={styles.action}
                        onClick={() => handleAdd(item.productName, 1)}
                      >
                        <img
                          className={styles.actionIcon}
                          src="/images/add.svg"
                          alt="add"
                        />
                      </button>
                      <button
                        className={styles.action}
                        onClick={() => handleAdd(item.productName, -1)}
                      >
                        <img
                          className={styles.actionIcon}
                          src="/images/remove.svg"
                          alt="add"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr
                  className={`${styles.tableBodyRow} ${styles.tableImportantRow}`}
                >
                  <td>Total</td>
                  <td>{cartContext?.totalQuantityProducts}</td>
                  <td></td>
                  <td>{cartContext?.totalPrice.toFixed(2)} $</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </article>
        </>
      ) : (
        <h1 className={styles.title}>
          No tienes Nada en tu carrito de compras :(
        </h1>
      )}
    </section>
  )
}

export default Cart
