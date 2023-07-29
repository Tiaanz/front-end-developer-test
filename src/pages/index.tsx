import Image from 'next/image'
import SizeButton from '@/components/SizeButton'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Home() {

  const [showMiniCart, setShowMiniCart] = useState(false)

  return (
    <>
      <Header showMiniCart={showMiniCart} setShowMiniCart={setShowMiniCart} />
      <main className="container" onClick={()=>setShowMiniCart(false)}>
        <div className="product-image">
          <Image
            priority
            src="/classic-tee.jpg"
            alt="classic-tee"
            width={430}
            height={500}
            quality={100}
          ></Image>
        </div>
        <div className="product-detail">
          <h1>Classic Tee</h1>
          <div className="price">$75.00</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco, veniam, quis
            nostrud exercitation ullamco.
          </p>
          <div className="size">
            SIZE<span className="star">*</span>
          </div>
          <div className="size-buttons">
            <SizeButton size={'S'} />
            <SizeButton size={'M'} />
            <SizeButton size={'L'} />
          </div>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </main>
    </>
  )
}
