import React from "react"

interface SlotPlayerProps {
  children: React.ReactNode
  className?: string
}

const SlotPlayer: React.FC<SlotPlayerProps> = ({children, className}) => {
  return (
    <div
      className={`p-2 bg-slate-400 text-white rounded-md  ${className}`}>
      {children}
    </div>
  )
}

export default SlotPlayer
