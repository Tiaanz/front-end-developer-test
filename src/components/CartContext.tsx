import { createContext, useState} from 'react'

interface CartContextType {
  items: Item[]
  totalAmount: number
  addItem: (sizeSelected: string, product: Item) => void
}

interface Item {
  id: number
  title: string
  size: string
  price: number
  quantity: number
}

export const CartDetailContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
})

interface Props {
  children: React.ReactNode
}

interface CartProps {
  items: Item[]
  totalAmount: number
}

const CartContext = ({ children }: Props) => {
  const [cartData, setCartData] = useState<CartProps>({
    items: [],
    totalAmount: 0,
  })

  const addItem = (sizeSelected: string, product: Item) => {
    const newCart = { ...cartData }
    //If the size does not exist in the cart
    if (
      sizeSelected &&
      newCart.items.findIndex((item) => item.size === sizeSelected) === -1
    ) {
      //add the product to the cart
      newCart.items.push(product)
      //If the size exists in the cart but the product's id does not exist
    } else if (
      newCart.items.findIndex((item) => item.size === sizeSelected) !== -1 &&
      newCart.items.findIndex((item) => item.id === product.id) === -1 &&
      sizeSelected
    ) {
      newCart.items.push(product)
      //Both of the product's ID and size exist in the cart
    } else {
      const updatedCart = newCart.items.map((item) => {
        if (item.size === sizeSelected && item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      newCart.items = updatedCart
    }
    //increase the total amount of the cart
    if (sizeSelected) {
      newCart.totalAmount += 1
    }

    //reset the cart
    setCartData(newCart)
  }

  return (
    <CartDetailContext.Provider
      value={{
        ...cartData,
        addItem,
      }}
    >
      {children}
    </CartDetailContext.Provider>
  )
}

export default CartContext
