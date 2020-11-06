import React, { useContext, useState } from 'react'
import { CartItem } from 'models/cart'
import { CartContext } from '@context/CartContext'
import styles from './ProductForm.module.css'

interface Props {
  product: TProduct
}

const ProductForm = ({ product }: Props) => {
  const cartContext = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const handleChangeInputQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === '') return
    setQuantity(parseInt(event.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCartItem: CartItem = new CartItem(
      product?.name as string,
      quantity,
      product?.price as number
    )

    cartContext?.addToCart(newCartItem)
    setQuantity(1)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.quantityInput}
        value={Number(quantity)}
        onChange={handleChangeInputQuantity}
        min={1}
        max={99}
        type="number"
      />
      <button className={styles.formBtn} type="submit">
        Agregar al carrito
      </button>
    </form>
  )
}

export default ProductForm
