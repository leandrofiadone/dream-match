import React, {useEffect, useState} from "react"
import ContainerTeams from "../components/TeamSlots/ContainerTeams"
import Modal from "../components/Modal"
import PlayerSearch from "../components/PlayerSearch"

const ProgressBar: React.FC<{progress: number; colorClass: string}> = ({
  progress,
  colorClass
}) => (
  <div className="w-full bg-gray-300 rounded-full h-2">
    <div
      className={`h-2 rounded-full ${colorClass}`}
      style={{width: `${progress}%`}}></div>
  </div>
)

const ProgressSummary: React.FC<{
  teamOneProgress: number
  teamTwoProgress: number
  totalProgress: number
  teamOneComplete: boolean
  teamTwoComplete: boolean
}> = ({
  teamOneProgress,
  teamTwoProgress,
  totalProgress,
  teamOneComplete,
  teamTwoComplete
}) => {
  const shouldShowProgress =
    teamOneProgress > 0 || teamTwoProgress > 0 || totalProgress > 0
  const bothTeamsComplete = teamOneComplete && teamTwoComplete

  return (
    <div className="hidden md:flex md:flex-1 md:w-1/3 p-4 bg-white bg-opacity-25 rounded-md shadow-md flex-col items-center justify-center bg-gradient">
      <div className="mb-4 text-center ">
        <p className="font-bold text-xl">Atc Dream Match ⚽</p>
      </div>
      {bothTeamsComplete ? (
        <div className="text-2xl font-bold text-green-600 ">
          ¡Los dos equipos están completos y listos para jugar!
        </div>
      ) : shouldShowProgress ? (
        <>
          <div className="mb-4 w-full">
            <p className="font-medium text-sm">Equipo 1</p>
            <ProgressBar progress={teamOneProgress} colorClass="bg-blue-300" />
          </div>
          <div className="mb-4 w-full">
            <p className="font-medium text-sm">Equipo 2</p>
            <ProgressBar progress={teamTwoProgress} colorClass="bg-lime-600" />
          </div>
          <div className="w-full">
            <p className="font-medium  text-sm">Total</p>
            <ProgressBar progress={totalProgress} colorClass="bg-gray-900" />
          </div>
        </>
      ) : null}
    </div>
  )
}

const MainContainer: React.FC<{
  onProgressUpdate: (
    teamOne: {progress: number; complete: boolean},
    teamTwo: {progress: number; complete: boolean}
  ) => void
}> = ({onProgressUpdate}) => {
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

  useEffect(() => {
    const teamOneFilledSlots = countFilledSlots(teamOneSlots)
    const teamTwoFilledSlots = countFilledSlots(teamTwoSlots)
    const totalFilledSlots = teamOneFilledSlots + teamTwoFilledSlots

    const teamOneRemainingSlots = teamOneSlots.length - teamOneFilledSlots
    const teamTwoRemainingSlots = teamTwoSlots.length - teamTwoFilledSlots
    const totalRemainingSlots = teamOneRemainingSlots + teamTwoRemainingSlots

    const teamOneComplete = teamOneRemainingSlots === 0
    const teamTwoComplete = teamTwoRemainingSlots === 0

    onProgressUpdate(
      {
        progress: getProgress(teamOneFilledSlots, teamOneSlots.length),
        complete: teamOneComplete
      },
      {
        progress: getProgress(teamTwoFilledSlots, teamTwoSlots.length),
        complete: teamTwoComplete
      }
    )
  }, [teamOneSlots, teamTwoSlots, onProgressUpdate])

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

  return (
    <div className="flex flex-col w-full md:flex-row flex-1 gap-4 mt-5 mb-12 md:mb-5 ">
      <ContainerTeams
        slots={teamOneSlots}
        onSlotClick={(index) => handleSlotClick("teamOne", index)}
        colorClass="bg-blue-600"
        title="Equipo 1"
      />

      <ProgressSummary
        teamOneProgress={getProgress(
          countFilledSlots(teamOneSlots),
          teamOneSlots.length
        )}
        teamTwoProgress={getProgress(
          countFilledSlots(teamTwoSlots),
          teamTwoSlots.length
        )}
        totalProgress={getProgress(
          countFilledSlots(teamOneSlots) + countFilledSlots(teamTwoSlots),
          teamOneSlots.length + teamTwoSlots.length
        )}
        teamOneComplete={teamOneSlots.length === countFilledSlots(teamOneSlots)}
        teamTwoComplete={teamTwoSlots.length === countFilledSlots(teamTwoSlots)}
      />

      <ContainerTeams
        slots={teamTwoSlots}
        onSlotClick={(index) => handleSlotClick("teamTwo", index)}
        colorClass="bg-green-800"
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
