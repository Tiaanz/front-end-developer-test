import { Dispatch, SetStateAction} from 'react'
import CartItem from './CartItem'

interface Props{
  showMiniCart: boolean
  setShowMiniCart:Dispatch<SetStateAction<boolean>>
}

const Header = ({showMiniCart,setShowMiniCart}:Props) => {


  return (
    <div className="header">
      <div className="cart" onClick={() => setShowMiniCart(true)}>
        My Cart (4)
      </div>
      {showMiniCart && (
        <>
          <div className="cart-on-click" onClick={()=>setShowMiniCart(false)}>My Cart (4)</div>
          <div className="mini-cart">
            <CartItem />
            <CartItem />
          </div>
        </>
      )}
    </div>
  )
}

export default Header
