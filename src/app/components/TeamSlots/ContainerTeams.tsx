import React from "react"
import SlotPlayer from "./SlotPlayer"

interface ContainerTeamsProps {
  slots: React.ReactNode[]
  onSlotClick: (index: number) => void
}

const ContainerTeams: React.FC<ContainerTeamsProps> = ({
  slots,
  onSlotClick
}) => {
  return (
    <div className="flex flex-col flex-1 p-1 bg-gray-100 rounded-md shadow-md gap-1">
      {slots.map((slot, index) => (
        <SlotPlayer
          key={index}
          className="flex-1"
          onClick={() => onSlotClick(index)}>
          {slot}
        </SlotPlayer>
      ))}
    </div>
  )
}

export default ContainerTeams
