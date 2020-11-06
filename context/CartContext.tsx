import { useState, createContext, FunctionComponent } from 'react'
import { CartItem } from '../models/cart'

export type CardContextType = {
  addToCart: (newItem: CartItem) => void
  totalQuantityProducts: number
}

export const CartContext = createContext<CardContextType | null>(null)

const CartProvider: FunctionComponent = ({ children }) => {
  const [cart, setCart] = useState<Array<CartItem>>([])

  const addToCart = (newItem: CartItem) => {
    const indexItem = cart.findIndex(
      (item: CartItem) => item.productName === newItem.productName
    )

    if (indexItem === -1) {
      setCart([...cart, newItem])
    } else {
      const quantity = cart[indexItem].quantity + newItem.quantity

      if (quantity < 99) {
        const newCart = [...cart]
        newCart[indexItem] = {
          productName: newItem.productName,
          quantity,
          price: newItem.price,
        }
        setCart(newCart)
      }
    }
  }

  const totalQuantityProducts = cart.reduce(
    (quantity, product) => quantity + product.quantity,
    0
  )

  return (
    <CartContext.Provider value={{ addToCart, totalQuantityProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
