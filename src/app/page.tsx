import Image from "next/image";
import Footer from './components/Footer';

 // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-9">
      {/* Tu contenido principal aquí */}

      {/* Footer */}
      <Footer />
    </main>
  )
}
