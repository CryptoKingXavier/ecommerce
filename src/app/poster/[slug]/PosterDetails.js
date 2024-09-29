"use client"

import { Cart } from "@/app/components"
import { useStateContext } from "@/app/context/StateContext"
import { urlFor } from "@/app/lib/client"
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai"

const PosterDetails = ({ poster }) => {
  const { image, product, desc, price } = poster
  const { decQty, incQty, qty, onAdd, showCart, setShowCart } = useStateContext()

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img className="product-detail-image" src={urlFor(image.asset._ref).toString()} />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product}</h1>
          <div className="reviews">
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
          <p>{desc}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(poster, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={() => setShowCart(true)}>Buy Now</button>
          </div>
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default PosterDetails