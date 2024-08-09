// src/app/page.tsx
import Image from "next/image"
import Footer from "./components/Footer"
import MainContainer from "./components/MainContainer"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1 mb-6 flex flex-col absolute inset-0 items-center justify-between p-4 md:p-9">
        <MainContainer />
      </main>
      <Footer />
    </div>
  )
}

export default Home
