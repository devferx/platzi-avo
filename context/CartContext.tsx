import { useState, createContext, FunctionComponent } from 'react'
import { CartItem } from '../models/cart'

export type CardContextType = {
  cart: Array<CartItem>
  totalQuantityProducts: number
  totalPrice: number
  addToCart: (newItem: CartItem) => void
  addProduct: (name: string, quantity: number) => void
}

export const CartContext = createContext<CardContextType | null>(null)

const CartProvider: FunctionComponent = ({ children }) => {
  const [cart, setCart] = useState<Array<CartItem>>([])

  const findIndexByName = (name: string) =>
    cart.findIndex((item: CartItem) => item.productName === name)

  const insertToCart = (index: number, cartItem: CartItem) => {
    const newCart = [...cart]
    newCart[index] = cartItem
    return newCart
  }

  const addToCart = (newItem: CartItem) => {
    const indexItem = findIndexByName(newItem.productName)

    if (indexItem === -1) {
      setCart([...cart, newItem])
    } else {
      const quantity = cart[indexItem].quantity + newItem.quantity

      quantity < 100 &&
        setCart(
          insertToCart(
            indexItem,
            new CartItem(newItem.productName, quantity, newItem.price)
          )
        )
    }
  }

  const addProduct = (name: string, quantityToAdd: number) => {
    const indexItem = findIndexByName(name)
    if (indexItem === -1) return

    const quantity = cart[indexItem].quantity + quantityToAdd
    if (quantity === 0) {
      const newCart = [...cart]
      newCart.splice(indexItem, 1)
      setCart(newCart)
    } else if (quantity < 100 && quantity > 0)
      setCart(
        insertToCart(
          indexItem,
          new CartItem(name, quantity, cart[indexItem].price)
        )
      )
  }

  const totalQuantityProducts = cart.reduce(
    (quantity, product) => quantity + product.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (quantity, product) => quantity + product.quantity * product.price,
    0
  )

  return (
    <CartContext.Provider
      value={{ cart, totalQuantityProducts, totalPrice, addToCart, addProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
