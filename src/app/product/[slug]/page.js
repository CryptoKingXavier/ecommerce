import { client } from '@/app/lib/client'
import ProductDetails from './ProductDetails'

export const revalidate = 60

const ProductPage = async ({ params }) => {
  const { slug } = params
  const { product, products } = await getSanityProps(slug)

  return (
    <ProductDetails product={product} products={products} />
  )
  
}

export const getSanityProps = async (slug) => {
  const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(productQuery)
  const products = await client.fetch(productsQuery)

  return { product, products }
}

export default ProductPage
