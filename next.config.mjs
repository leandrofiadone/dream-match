/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apiv3.apifootball.com",
        port: "",
        pathname: "/badges/players/**" // Permite todas las rutas bajo "/badges/players/"
      }
    ]
  }
}

export default nextConfig
