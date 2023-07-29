import CartItem from './CartItem'

const Header = () => {
  return (
    <div className="header">
      <div className="cart">My Cart (4)</div>
      <div className="cart-on-click">My Cart (4)</div>
      <div className="mini-cart">
        <CartItem />
        <CartItem />
      </div>
    </div>
  )
}

export default Header
