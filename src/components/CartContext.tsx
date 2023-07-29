import { createContext, useState, Dispatch, SetStateAction } from 'react'

interface CartContextType {
  // email: string
  // setEmail: Dispatch<SetStateAction<string>>
  // items: Item[]
  // totalAmount: number
  cartData: {
    items: Item[]
    totalAmount:number
  }
  setCartData: Dispatch<SetStateAction<CartProps>>
}

interface Item {
  id: number
  title: string
  size: string
  price: number
  quantity: number
}

export const CartDetailContext = createContext<CartContextType>({
  // items: [],
  // totalAmount: 0,
  cartData:{items:[],totalAmount:0},
  setCartData: () => {},
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

  

  return (
    <CartDetailContext.Provider
      value={{
        cartData,
        setCartData,
      }}
    >
      {children}
    </CartDetailContext.Provider>
  )
}

export default CartContext