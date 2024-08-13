"use client"
import React, {useEffect, useState} from "react"
import ContainerTeams from "../components/TeamSlots/ContainerTeams"
import Modal from "../components/Modal"
import PlayerSearch from "../components/PlayerSearch"

const MainContainer: React.FC = () => {
  const [teamOneSlots, setTeamOneSlots] = useState<React.ReactNode[]>([])
  const [teamTwoSlots, setTeamTwoSlots] = useState<React.ReactNode[]>([])
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(
    null
  )
  const [selectedTeam, setSelectedTeam] = useState<
    "teamOne" | "teamTwo" | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setTeamOneSlots(new Array(5).fill("Agregar Jugador"))
    setTeamTwoSlots(new Array(5).fill("Agregar Jugador"))
  }, [])

  const handleSlotClick = (team: "teamOne" | "teamTwo", index: number) => {
    setSelectedSlotIndex(index)
    setSelectedTeam(team)
    setIsModalOpen(true)
  }

  const handlePlayerSelect = (player: React.ReactNode) => {
    if (selectedSlotIndex !== null && selectedTeam) {
      const updatedSlots =
        selectedTeam === "teamOne" ? [...teamOneSlots] : [...teamTwoSlots]
      updatedSlots[selectedSlotIndex] = player
      selectedTeam === "teamOne"
        ? setTeamOneSlots(updatedSlots)
        : setTeamTwoSlots(updatedSlots)

      setSelectedSlotIndex(null)
      setSelectedTeam(null)
      setIsModalOpen(false)
    }
  }

  const countFilledSlots = (slots: React.ReactNode[]): number =>
    slots.filter((slot) => typeof slot !== "string").length

  const getProgress = (filledSlots: number, totalSlots: number) =>
    (filledSlots / totalSlots) * 100

  const ProgressBar: React.FC<{progress: number; colorClass: string}> = ({
    progress,
    colorClass
  }) => (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className={`h-3 rounded-full ${colorClass}`}
        style={{width: `${progress}%`}}></div>
    </div>
  )

  const teamOneFilledSlots = countFilledSlots(teamOneSlots)
  const teamTwoFilledSlots = countFilledSlots(teamTwoSlots)
  const totalFilledSlots = teamOneFilledSlots + teamTwoFilledSlots

  const teamOneRemainingSlots = teamOneSlots.length - teamOneFilledSlots
  const teamTwoRemainingSlots = teamTwoSlots.length - teamTwoFilledSlots
  const totalRemainingSlots = teamOneRemainingSlots + teamTwoRemainingSlots

  return (
    <div className="flex flex-col w-full md:flex-row flex-1 gap-4 mt-5 mb-12 md:mb-5">
      <ContainerTeams
        slots={teamOneSlots}
        onSlotClick={(index) => handleSlotClick("teamOne", index)}
        colorClass="bg-blue-100"
        title="Equipo 1"
      />

      <div className="hidden md:flex md:flex-1 md:w-1/3 p-4 bg-gray-200 rounded-md shadow-md flex-col items-center justify-center">
        {totalFilledSlots > 0 ? (
          <>
            <div className="mb-4 text-center">
              <p className="font-bold text-xl">Progreso de los Equipos</p>
            </div>
            <div className="mb-4 w-full">
              <p className="font-medium text-lg">
                Equipo 1: {teamOneRemainingSlots} jugadores faltantes
              </p>
              <ProgressBar
                progress={getProgress(teamOneFilledSlots, teamOneSlots.length)}
                colorClass="bg-blue-500"
              />
            </div>
            <div className="mb-4 w-full">
              <p className="font-medium text-lg">
                Equipo 2: {teamTwoRemainingSlots} jugadores faltantes
              </p>
              <ProgressBar
                progress={getProgress(teamTwoFilledSlots, teamTwoSlots.length)}
                colorClass="bg-green-500"
              />
            </div>
            <div className="w-full">
              <p className="font-medium text-lg">
                Total: {totalRemainingSlots} jugadores faltantes
              </p>
              <ProgressBar
                progress={getProgress(
                  totalFilledSlots,
                  teamOneSlots.length + teamTwoSlots.length
                )}
                colorClass="bg-purple-500"
              />
            </div>
          </>
        ) : (
          <div className="mt-4">
            <p className="font-bold text-green-600">
              ¡Todos los equipos están completos!
            </p>
          </div>
        )}
      </div>

      <ContainerTeams
        slots={teamTwoSlots}
        onSlotClick={(index) => handleSlotClick("teamTwo", index)}
        colorClass="bg-green-100"
        title="Equipo 2"
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
