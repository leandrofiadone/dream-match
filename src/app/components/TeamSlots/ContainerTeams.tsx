"use client"
import React from "react"
import SlotPlayer from "./SlotPlayer"

interface ContainerTeamsProps {
  slots: React.ReactNode[]
  onSlotClick: (index: number) => void
  colorClass: string // Agrega esta propiedad
  title: string
}

const ContainerTeams: React.FC<ContainerTeamsProps> = ({
  slots,
  onSlotClick,
  colorClass
}) => (
  <div
    className={`flex flex-col flex-1 p-1 rounded-md shadow-md gap-1 ${colorClass}`}>
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

export default ContainerTeams
