import React from "react"

interface SlotPlayerProps {
  children: React.ReactNode
}

const SlotPlayer: React.FC<SlotPlayerProps> = ({children}) => {
  return <div className="p-2 bg-white rounded-md shadow-sm">{children}</div>
}

export default SlotPlayer
