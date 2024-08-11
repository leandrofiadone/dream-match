"use client"

import React, {useEffect, useState} from "react"
import ContainerTeams from "../components/TeamSlots/ContainerTeams"
import Modal from "../components/Modal"
import PlayerSearch from "../components/PlayerSearch"

const MainContainer: React.FC = () => {
  const [firstContainerSlots, setFirstContainerSlots] = useState<
    React.ReactNode[]
  >([])
  const [secondContainerSlots, setSecondContainerSlots] = useState<
    React.ReactNode[]
  >([])
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(
    null
  )
  const [selectedContainer, setSelectedContainer] = useState<
    "first" | "second" | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const dataForFirstContainer = [
        "Data 1",
        "Data 2",
        "Data 3",
        "Data 4",
        "Data 5"
      ]
      const dataForSecondContainer = [
        "Data A",
        "Data B",
        "Data C",
        "Data D",
        "Data E"
      ]

      setFirstContainerSlots(dataForFirstContainer)
      setSecondContainerSlots(dataForSecondContainer)
    }

    fetchData()
  }, [])

  const handleSlotClick = (container: "first" | "second", index: number) => {
    setSelectedSlotIndex(index)
    setSelectedContainer(container)
    setIsModalOpen(true)
  }

  const handlePlayerSelect = (player: React.ReactNode) => {
    if (selectedSlotIndex !== null && selectedContainer !== null) {
      if (selectedContainer === "first") {
        const updatedSlots = [...firstContainerSlots]
        updatedSlots[selectedSlotIndex] = player
        setFirstContainerSlots(updatedSlots)
      } else if (selectedContainer === "second") {
        const updatedSlots = [...secondContainerSlots]
        updatedSlots[selectedSlotIndex] = player
        setSecondContainerSlots(updatedSlots)
      }
      // Reset selection after filling the slot
      setSelectedSlotIndex(null)
      setSelectedContainer(null)
      setIsModalOpen(false)
    }
  }

  return (
    <div className="flex flex-col w-full md:flex-row flex-1 gap-4 mt-5 mb-12 md:mb-5">
      <ContainerTeams
        slots={firstContainerSlots}
        onSlotClick={(index) => handleSlotClick("first", index)}
      />

      <div className="hidden md:flex md:flex-1 md:w-1/3 p-4 bg-gray-200 rounded-md shadow-md">
        <p>Hola</p>
      </div>

      <ContainerTeams
        slots={secondContainerSlots}
        onSlotClick={(index) => handleSlotClick("second", index)}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PlayerSearch
          onPlayerSelect={handlePlayerSelect}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  )
}

export default MainContainer

// import React from "react"

// const MainContainer: React.FC = () => {
//   return (
//     <div className="h-dvh w-full flex flex-col md:flex-row gap-4 mt-5 mb-5">

//       {/* Primer contenedor */}
//       <div className=" flex-1 h-full p-4 bg-gray-100 rounded-md shadow-md">
//         {/* Contenido del primer contenedor */}
//       </div>

//       {/* Contenedor central, visible solo en tablet y desktop */}
//       <div className="hidden md:flex md:flex-1 md:w-1/3 h-full p-4 bg-gray-200 rounded-md shadow-md">
//         {/* Contenido del contenedor central */}
//       </div>

//       {/* Segundo contenedor */}
//       <div className="flex-1 h-full p-4 bg-gray-100 rounded-md shadow-md">
//         {/* Contenido del segundo contenedor */}
//       </div>
//     </div>
//   )
// }

// export default MainContainer

// src/components/MainContainer.tsx
