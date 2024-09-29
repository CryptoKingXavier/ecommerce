"use client"

import { v4 as uuidv4 } from "uuid"
import { Product, Cart } from '@/app/components'
import { useStateContext } from '@/app/context/StateContext'
import { urlFor } from '@/app/lib/client'
import React, { useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'


const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd, showCart, setShowCart } = useStateContext()

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img className='product-detail-image' src={urlFor(image[index].asset._ref).toString()} />
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img key={uuidv4()} className={i === index ? 'small-image selected-image' : 'small-image'} src={urlFor(item.asset._ref).toString()} onMouseEnter={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity: </h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type='button' className='buy-now' onClick={() => setShowCart(true)}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>You may also like...</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => <Product key={item._id} product={item} />)}
          </div>
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default ProductDetails
