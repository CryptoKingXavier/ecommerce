import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

// Creating a Sanity Client
export const client = createClient({
    projectId: "lrc0abi2",
    dataset: "production",
    apiVersion: '2024-09-26',
    useCdn: false,
    token: "skoIr71fdfelp2p7d6crz3VKuoU9sC0Js9YazFJA5NRzWend7rrGjlBi63BzLWMzVqUNztKMAODIBgdtfQdn3T0bZiJWtWJOsRQC2fqaRX9wRqTUAWvcmCFsLoCFipp6uLHkT4l7hAcorbsHRFwzARTKcSCz3F2LyKwL8Qy5Bhh9POnKiHo0"
})

// For Sanity Images
const builder = imageUrlBuilder(client)

// URLs for images
export const urlFor = (source) => builder.image(source)
