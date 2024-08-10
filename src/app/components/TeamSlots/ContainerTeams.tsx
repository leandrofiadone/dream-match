import React from "react"
import SlotPlayer from "./SlotPlayer"

interface ContainerTeamsProps {
  slots: React.ReactNode[]
  className?: string
}

const ContainerTeams: React.FC<ContainerTeamsProps> = ({slots, className}) => {
  return (
    <div className={`flex-1 p-1 bg-gray-100 rounded-md shadow-md ${className}`}>
      {slots.map((slot, index) => (
        <SlotPlayer key={index}>{slot}</SlotPlayer>
      ))}
    </div>
  )
}

export default ContainerTeams
