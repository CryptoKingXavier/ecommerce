"use client"

import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from "react-icons/bs"
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { runFireworks } from '../lib/utils'
import { AiOutlineWhatsApp } from 'react-icons/ai'

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
        <p className='email-msg' style={{ fontStyle: 'italic' }}>Please contact the vendor via WhatsApp below, <br />
          and attach the downloaded cart image to complete your order
        </p>
        <Link href="https://wa.link/1hj6xx" target='_blank'>
          <button className='btn' type='button' width="300px">
            <AiOutlineWhatsApp />
          </button>
        </Link>
        <p className='description' style={{ fontStyle: 'italic' }}>
          For more enquiry, <br />
          please email
          <a className='email' href='mailto:haneikurosakiartmail@gmail.com'>
            haneikurosakiartmail@gmail.com
          </a>
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
