import Image from 'next/image'
import SizeButton from '@/components/SizeButton'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'

interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  imageURL: string
  sizeOptions: sizeOption[]
}

interface sizeOption {
  id: number
  label: string
}

export default function Home() {
  const [showMiniCart, setShowMiniCart] = useState(false)
  const [productDetail, setProductDetail] = useState<ProductProps>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    imageURL: '',
    sizeOptions: [],
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
      )
      const productData = (await response.json()) as ProductProps
      const { id, title, description, price, imageURL, sizeOptions } =
        productData
      setProductDetail({
        id,
        title,
        description,
        price,
        imageURL,
        sizeOptions,
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <Header showMiniCart={showMiniCart} setShowMiniCart={setShowMiniCart} />
      <main className="container" onClick={() => setShowMiniCart(false)}>
        <div className="product-image">
          <Image
            priority
            src={productDetail.imageURL}
            alt="classic-tee"
            width={430}
            height={500}
            quality={100}
          ></Image>
        </div>
        <div className="product-detail">
          <h1>{productDetail.title}</h1>
          <div className="price">${productDetail.price}.00</div>
          <p>{productDetail.description}</p>
          <div className="size">
            SIZE<span className="star">*</span>
          </div>
          <div className="size-buttons">
            {productDetail.sizeOptions.map((item) => (
              <SizeButton key={item.id} size={item.label} />
            ))}
          </div>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </main>
    </>
  )
}
