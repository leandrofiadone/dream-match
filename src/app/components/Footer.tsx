import React from "react"

interface FooterProps {
  teamOneProgress: number
  teamTwoProgress: number
  totalProgress: number
  teamOneComplete: boolean
  teamTwoComplete: boolean
}

const ProgressBar: React.FC<{progress: number; colorClass: string}> = ({
  progress,
  colorClass
}) => (
  <div className="w-full bg-gray-300 rounded-full h-1">
    <div
      className={`h-1 rounded-full ${colorClass}`}
      style={{width: `${progress}%`}}></div>
  </div>
)

const Footer: React.FC<FooterProps> = ({
  teamOneProgress,
  teamTwoProgress,
  totalProgress,
  teamOneComplete,
  teamTwoComplete
}) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-1 flex flex-col items-center">
      <div className="w-full flex flex-col">
        {/* Información de los equipos */}
        <div className="flex justify-between items-center mb-0.5">
          <p className="text-xs font-medium mr-2">Equipo 1</p>
          <div className="flex-1">
            <ProgressBar progress={teamOneProgress} colorClass="bg-blue-500" />
          </div>
          <p className="text-xs text-gray-400 ml-2">
            {teamOneComplete ? "Completo" : ""}
          </p>
        </div>

        <div className="flex justify-between items-center mb-0.5">
          <p className="text-xs font-medium mr-2">Equipo 2</p>
          <div className="flex-1">
            <ProgressBar progress={teamTwoProgress} colorClass="bg-green-500" />
          </div>
          <p className="text-xs text-gray-400 ml-2">
            {teamTwoComplete ? "Completo" : ""}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs font-medium mr-2">Total</p>
          <div className="flex-1">
            <ProgressBar progress={totalProgress} colorClass="bg-purple-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
