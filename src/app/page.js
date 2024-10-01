import { Product, HeroBanner, FooterBanner } from "./components"
import React, { Fragment } from 'react'
import { client } from "./lib/client"


const Home = async () => {
  const { posters, products } = await getSanityData()

  return (
    <Fragment>
      <HeroBanner heroBanner={posters.length && posters[0]} />

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

      <FooterBanner footerBanner={posters && posters[0]} />
    </Fragment>
  );
}

export const getSanityData = async () => {
  const postersQuery = '*[_type == "poster"]'
  const productsQuery = '*[_type == "product"]'

  const posters = await client.fetch(postersQuery)
  const products = await client.fetch(productsQuery)

  return { posters, products }
}

export default Home
