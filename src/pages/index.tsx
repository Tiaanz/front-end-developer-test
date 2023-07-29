import Image from 'next/image'
import { Inter } from 'next/font/google'
import SizeButton from '@/components/SizeButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container">
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco, veniam, quis nostrud
          exercitation ullamco.
        </p>
        <div className="size">
          SIZE<span className="star">*</span>
        </div>
        <div className='size-buttons'>
          <SizeButton size={'S'} />
          <SizeButton size={'M'} />
          <SizeButton size={'L'} />
        </div>
        <button>ADD TO CART</button>
      </div>
    </main>
  )
}
