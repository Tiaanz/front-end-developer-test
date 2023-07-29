import { Dispatch, SetStateAction, useContext } from 'react'
import { CartDetailContext } from './CartContext'
import CartItem from './CartItem'
import { FiShoppingCart } from 'react-icons/fi'

interface Props {
  showMiniCart: boolean
  setShowMiniCart: Dispatch<SetStateAction<boolean>>
}

const Header = ({ showMiniCart, setShowMiniCart }: Props) => {
  const cartContext = useContext(CartDetailContext)

  return (
    <div className="header">
      <div className="cart" onClick={() => setShowMiniCart(true)}>
        <FiShoppingCart className="cart-icon" />
        <span className="cart-text">My Cart</span> (
        {cartContext.cartData.totalAmount})
      </div>
      {cartContext.cartData.totalAmount === 0 && showMiniCart && (
        <>
          <div className="cart-on-click" onClick={() => setShowMiniCart(false)}>
            <FiShoppingCart className="cart-icon" />
            <span className="cart-text">My Cart</span> (
            {cartContext.cartData.totalAmount})
          </div>
          <div className="empty-cart">The cart is empty!</div>
        </>
      )}

      {showMiniCart && cartContext.cartData.totalAmount !== 0 && (
        <>
          <div className="cart-on-click" onClick={() => setShowMiniCart(false)}>
            <FiShoppingCart className="cart-icon" />
            <span className="cart-text">My Cart</span>(
            {cartContext.cartData.totalAmount})
          </div>
          <div className="mini-cart">
            {cartContext.cartData.items.map((item) => (
              <CartItem
                key={item.size + item.id}
                title={item.title}
                quantity={item.quantity}
                size={item.size}
                price={item.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Header
