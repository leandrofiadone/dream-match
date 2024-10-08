import React from "react"

interface SlotPlayerProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const SlotPlayer: React.FC<SlotPlayerProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-2  bg-slate-400 hover:bg-opacity-25 border  bg-opacity-55 text-white rounded-lg cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default SlotPlayer
