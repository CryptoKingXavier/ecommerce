"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from "react-icons/ti"
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const cardRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

  return (
    <div className='cart-wrapper' ref={cardRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} {totalQuantities > 1 ? "items" : "item"})</span>
        </button>

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

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <Link href="/success">
                <button className='btn' type="button" onClick={() => setShowCart(false)}>
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
