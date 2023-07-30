import Image from 'next/image'
import SizeButton from '@/components/SizeButton'
import Header from '@/components/Header'
import { useContext, useEffect, useState } from 'react'
import { CartDetailContext } from '@/components/CartContext'
import Meta from '@/components/Meta'

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

  const cartContext = useContext(CartDetailContext)

  const [showMiniCart, setShowMiniCart] = useState(false)
  const [sizeSelected, setSizeSelected] = useState<string | null>(null)
  const [productDetail, setProductDetail] = useState<ProductProps>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    imageURL: '',
    sizeOptions: [],
  })
  const [errorMessage, setErrorMessage] = useState('')

  //A function to handle when the size button is selected
  function handleSelection(size: string) {
    setSizeSelected(size)
    setErrorMessage('')
  }

    //A function to handle when the ADD TO CART button is clicked
  function AddToCart() {
    if (sizeSelected) {
      cartContext.addItem(sizeSelected, {
        id: productDetail.id,
        title: productDetail.title,
        size: sizeSelected,
        price: productDetail.price,
        quantity: 1,
        imageURL:productDetail.imageURL
      })
    } else {
      setErrorMessage('Please select the size.')
    }
  }

//Fetch data on page load
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
      <Meta title="Clothing site" />
      <Header showMiniCart={showMiniCart} setShowMiniCart={setShowMiniCart} />
      <main className="container" onClick={() => setShowMiniCart(false)}>
        <div className="product-image">
          <Image
            priority
            src={productDetail.imageURL?productDetail.imageURL:"https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png"}
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
            SIZE<span className="star">*</span>{' '}
            <span className="text-slate-900">{sizeSelected}</span>
            <div style={{ color: 'red' }}>{errorMessage}</div>
          </div>
          <div className="size-buttons">
            {productDetail.sizeOptions.map((item) => (
              <SizeButton
                key={item.id}
                size={item.label}
                isSelected={item.label === sizeSelected}
                onClick={() => handleSelection(item.label)}
              />
            ))}
          </div>

          <button className="add-to-cart-btn" onClick={AddToCart}>
            ADD TO CART
          </button>
        </div>
      </main>
    </>
  )
}
