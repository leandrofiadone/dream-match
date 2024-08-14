// WelcomeOverlay.tsx
import React from "react"

interface WelcomeOverlayProps {
  onClick: () => void
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({onClick}) => {
  return (
    <div
      className="fixed inset-0 bg-white flex items-center justify-center z-50 cursor-pointer"
      onClick={onClick}>
      <h1 className="text-2xl font-bold">Welcome to Our App!</h1>
    </div>
  )
}

export default WelcomeOverlay
