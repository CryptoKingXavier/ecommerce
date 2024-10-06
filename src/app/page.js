import { Product, HeroBanner, FooterBanner } from "./components"
import React, { Fragment } from 'react'
import { client } from "./lib/client"


const Home = async () => {
  const { products } = await getSanityData()

  return (
    <Fragment>
      <HeroBanner />

      <div className="products-ctn">
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>

        {products && products.length > 0 ? (
          <div className="products-container">
            {products?.map((product) => <Product key={product._id.toString()} product={product} />)}
          </div>
        ) : (
          <p>No products found!</p>
        )}
      </div>

      <FooterBanner />
    </Fragment>
  );
}

export const getSanityData = async () => {
  const productsQuery = '*[_type == "product"]'
  const products = await client.fetch(productsQuery)

  return { products }
}

export default Home
