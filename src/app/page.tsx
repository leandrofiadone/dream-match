"use client"

import React, {useState, useEffect} from "react"
import Footer from "./components/Footer"
import MainContainer from "./pages/MainContainer"

const Home: React.FC = () => {
  const [teamOneProgress, setTeamOneProgress] = useState(0)
  const [teamTwoProgress, setTeamTwoProgress] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)
  const [teamOneComplete, setTeamOneComplete] = useState(false)
  const [teamTwoComplete, setTeamTwoComplete] = useState(false)

  const handleProgressUpdate = (
    teamOne: {progress: number; complete: boolean},
    teamTwo: {progress: number; complete: boolean}
  ) => {
    setTeamOneProgress(teamOne.progress)
    setTeamTwoProgress(teamTwo.progress)
    setTotalProgress((teamOne.progress + teamTwo.progress) / 2) // Adjust this calculation if needed
    setTeamOneComplete(teamOne.complete)
    setTeamTwoComplete(teamTwo.complete)
  }

  return (
    <div className="flex flex-col min-h-full ">
      <main className="flex-1 mb-6 flex flex-col absolute inset-0 items-center justify-between p-4 md:p-9 custom-bg-gradient">
        <MainContainer onProgressUpdate={handleProgressUpdate} />
      </main>
      {/* Only show footer on mobile */}
      <Footer
        teamOneProgress={teamOneProgress}
        teamTwoProgress={teamTwoProgress}
        totalProgress={totalProgress}
        teamOneComplete={teamOneComplete}
        teamTwoComplete={teamTwoComplete}
        className="block md:hidden" // Agrega la clase aquí
      />
    </div>
  )
}

export default Home
