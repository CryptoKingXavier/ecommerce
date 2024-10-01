"use client"

import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from "react-icons/bs"
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { runFireworks } from '../lib/utils'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>
          Attach the downloaded cart image to complete order
        </p>
        <p className='email-msg'>
          <Link href="https://wa.link/1hj6xx" target='_blank'>
            <button className='btn' type='button' width="300px">
              Order Now <AiOutlineWhatsApp />
            </button>
          </Link>
        </p>
        <p className='description'>
          <Link className='email' href='mailto:haneikurosakiartmail@gmail.com'>
            <button className='btn' type='button' width="300px">
              Order Now <AiOutlineMail />
            </button>
          </Link>
        </p>
        <Link href="/">
          <button className='btn' type='button' width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
