import Image from 'next/image'
import SizeButton from '@/components/SizeButton'
import Header from '@/components/Header'
import { useContext, useEffect, useState } from 'react'
import { CartDetailContext } from '@/components/CartContext'

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

interface CartDetail {
  id: number
  title: string
  size: string
  number: number
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

  function handleSelection(size: string) {
    setSizeSelected(size)
  }

  function AddToCart() {
    const newCart = { ...cartContext.cartData }

    //Check if the product exists in the cart
    if (
       
      sizeSelected && newCart.items.findIndex((item) => item.size === sizeSelected) === -1
    ) {
      //add the product to the cart
      newCart.items.push({
        id: productDetail.id,
        title: productDetail.title,
        size: sizeSelected,
        price: productDetail.price,
        quantity: 1,
      })
      //increase the quantity of the product
    } else {
      const updatedCart = newCart.items.map((item) => {
        if (item.size === sizeSelected) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      newCart.items = updatedCart
    }
    //increase the total amount of the cart
    newCart.totalAmount += 1
    //reset the cart
    cartContext.setCartData(newCart)
  }

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
