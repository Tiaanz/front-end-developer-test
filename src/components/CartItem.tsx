import { FC } from 'react'
import Image from 'next/image'

interface CartItemProps {}

const CartItem: FC<CartItemProps> = ({}) => {
  return (
    <div className='cart-item'>
      <Image
        priority
        src="/classic-tee.jpg"
        alt="classic-tee"
        width={80}
        height={50}
        quality={100}
      ></Image>
      <div className='cart-item-detail'>
        <div>Classic Tee</div>
        <div>1x <b>$75.00</b></div>
        <div>Size: S</div>
      </div>
    </div>
  )
}

export default CartItem
