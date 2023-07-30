import { FC} from 'react'
import Image from 'next/image'


interface CartItemProps {
  title: string
  size: string
  price:number
  quantity: number
  imageURL:string
}

const CartItem: FC<CartItemProps> = ({title,size,quantity,price,imageURL }:CartItemProps) => {
  
  return (
    <div className='cart-item'>
      <Image
        priority
        src={imageURL}
        alt="classic-tee"
        width={80}
        height={50}
        quality={100}
      ></Image>
      <div className='cart-item-detail'>
        <div>{title}</div>
        <div>{quantity}x <b>${price}.00</b></div>
        <div>Size: {size}</div>
      </div>
    </div>
  )
}

export default CartItem
