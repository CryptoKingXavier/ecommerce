import { client } from "@/app/lib/client"
import PosterDetails from "./PosterDetails"

export const revalidate = 60

const PosterPage = async ({ params }) => {
  const { slug } = params
  const { poster } = await getSanityProps(slug)

  return (
    <PosterDetails poster={poster} />
  )
}

export const getSanityProps = async (slug) => {
  const posterQuery = `*[_type == "poster" && product == "${slug}"][0]`
  const poster = await client.fetch(posterQuery)
  return { poster }
}

export default PosterPage