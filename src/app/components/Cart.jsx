"use client"

import Link from 'next/link'
import html2canvas from 'html2canvas'
import React, { useRef } from 'react'
import { urlFor } from '../lib/client'
import { TiDeleteOutline } from "react-icons/ti"
import { useStateContext } from '../context/StateContext'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'

const Cart = () => {
  const cartRef = useRef(null)
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

  const handleDownloadImage = async () => {
    setShowCart(false)
    const cartElement = cartRef.current;

    // Ensure all images have crossOrigin attribute set
    const images = cartElement.querySelectorAll("img");
    images.forEach((img) => img.setAttribute("crossOrigin", "anonymous"));

    // Take the screenshot
    html2canvas(cartElement, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "cart-section.png";
      link.click();
    });
  }

  return (
    <div className='cart-wrapper' >
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} {totalQuantities > 1 ? "items" : "item"})</span>
        </button>

        <div ref={cartRef}>
          {cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty!</h3>
              <Link href="/">
                <button className='btn' type='button' onClick={() => setShowCart(false)}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img className='cart-product-image' src={item?.product ? urlFor(item?.image.asset._ref).toString() : urlFor(item?.image[0].asset._ref).toString()} />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item?.product ? item.product : item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className='quantity-desc'>
                        <span className='minus' onClick={() => toggleCartItemQuantity(item._id, "dec")}><AiOutlineMinus /></span>
                        <span className='num'>{item.quantity}</span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, "inc")}><AiOutlinePlus /></span>
                      </p>
                    </div>
                    <button className='remove-item' type="button" onClick={() => onRemove(item)}>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <Link href="/success">
                <button className='btn' type="button" onClick={handleDownloadImage}>
                  Checkout Order
                </button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart
