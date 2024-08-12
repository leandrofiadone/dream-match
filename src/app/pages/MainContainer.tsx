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
    // Simula la carga de datos con slots numerados para agregar jugadores
    setFirstContainerSlots([
      "Agregar Jugador 1",
      "Agregar Jugador 2",
      "Agregar Jugador 3",
      "Agregar Jugador 4",
      "Agregar Jugador 5"
    ])
    setSecondContainerSlots([
      "Agregar Jugador 1",
      "Agregar Jugador 2",
      "Agregar Jugador 3",
      "Agregar Jugador 4",
      "Agregar Jugador 5"
    ])
  }, [])

  const handleSlotClick = (container: "first" | "second", index: number) => {
    setSelectedSlotIndex(index)
    setSelectedContainer(container)
    setIsModalOpen(true)
  }

  const handlePlayerSelect = (player: React.ReactNode) => {
    if (selectedSlotIndex !== null && selectedContainer) {
      // Copia el arreglo de slots del contenedor seleccionado
      const updatedSlots =
        selectedContainer === "first"
          ? [...firstContainerSlots]
          : [...secondContainerSlots]

      // Actualiza el slot y el estado correspondiente
      updatedSlots[selectedSlotIndex] = player
      selectedContainer === "first"
        ? setFirstContainerSlots(updatedSlots)
        : setSecondContainerSlots(updatedSlots)

      // Resetea selección y cierra el modal
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
        colorClass="bg-blue-100" // Agrega una clase diferente para el primer contenedor
      />

      <div className="hidden md:flex md:flex-1 md:w-1/3 p-4 bg-gray-200 rounded-md shadow-md">
        <p>Hola</p>
      </div>

      <ContainerTeams
        slots={secondContainerSlots}
        onSlotClick={(index) => handleSlotClick("second", index)}
        colorClass="bg-green-100" // Agrega una clase diferente para el segundo contenedor
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
