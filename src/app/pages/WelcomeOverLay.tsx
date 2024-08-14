// WelcomeOverlay.tsx
import React from "react"
import {FaFutbol} from "react-icons/fa"
import "./WelcomeOverlay.scss"

interface WelcomeOverlayProps {
  onClick: () => void
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({onClick}) => {
  return (
    <div
      className="welcome-overlay fixed inset-0 bg-white flex items-center justify-center z-50 cursor-pointer"
      onClick={onClick}>
      <div className="overlay-content text-center">
        <FaFutbol className="soccer-icon animate-bounce" size={50} />
        <h1 className="text-2xl font-bold mt-4">
          ¡Bienvenido a nuestra App de Futbol!
        </h1>
        <p className="mt-2 text-lg">
          Crea dos equipos con tus estrellas favoritas y gestiona tus partidos.
        </p>
      </div>
    </div>
  )
}

export default WelcomeOverlay
