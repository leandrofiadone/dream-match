"use client"

import {useState} from "react"
import axios from "axios"
import Image from "next/image"
import {FaUserAlt} from "react-icons/fa"

interface Player {
  player_key: number
  player_image: string
  player_name: string
  player_number: string
  player_team: string
  player_goals: string
  player_assists: string
  player_rating: string
}

interface PlayerSearchProps {
  onPlayerSelect: (player: React.ReactNode) => void
  onClose: () => void
}


const PlayerSearch: React.FC<PlayerSearchProps> = ({
  onPlayerSelect,
  onClose
}) => {

    const [playerName, setPlayerName] = useState("")
    const [playerData, setPlayerData] = useState<Player[]>([])
    const [loading, setLoading] = useState(false)



const handleSearch = async () => {
    setLoading(true)
    try {
    const response = await axios.get(
        `/api/playerSearch?playerName=${playerName}`
    )
    const relevantData = response.data.map((player: any) => ({
        player_key: player.player_key,
        player_image: player.player_image,
        player_name: player.player_name,
        player_number: player.player_number,
        player_team: player.team_name,
        player_goals: player.player_goals,
        player_assists: player.player_assists,
        player_rating: player.player_rating
    }))
    setPlayerData(relevantData)
    } catch (error) {
    console.error("Error fetching player data:", error)
    } finally {
    setLoading(false)
    }
}



    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.style.display = "none"
    }



const handlePlayerClick = (player: Player) => {
  onPlayerSelect(
    <div className="flex">
      {player.player_image ? (
        <div className="w-9 h-9 sm:w-14 sm:h-14 sm:mt-auto sm:mb-3 sm:ml-3 ml-5 relative rounded-full">
          <Image
            src={player.player_image}
            alt={player.player_name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            onError={handleImageError}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-9 h-9 ml-3 bg-gray-200 rounded-full">
          <FaUserAlt size={24} className="text-gray-500" />
        </div>
      )}

      <div className="flex flex-col sm:mr-auto  mr-6 ml-auto ">
        <h2 className="text-sm font-semibold">
          {player.player_name} ({player.player_number})
        </h2>

        <div className="flex flex-col sm:text-center text-right ">
          <p className=" text-xs text-gray-600">Team: {player.player_team}</p>
          <div className="hidden sm:block ">
            <p className="text-xs text-gray-600">
              Goals: {player.player_goals}
            </p>
            <p className="text-xs text-gray-600">
              Assists: {player.player_assists}
            </p>
            <p className="text-xs text-gray-600">
              Rating: {player.player_rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  onClose()
}




  return (
    <div className="p-4">
        
        <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Search for a player"
            className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
            onClick={handleSearch}
            disabled={loading}
            className={`mt-2 p-2 border border-gray-300 rounded-md w-full ${
            loading ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}>
            {loading ? "Loading..." : "Search"}
        </button>

      <div className="mt-4 max-h-96 overflow-y-auto">
        {/* Resultados de buscador - PRINCIPIO */}
        {playerData.map((player) => (
            <div
                key={player.player_key}
                className="mb-4 p-4 border rounded-md shadow-md flex flex-col items-center cursor-pointer"
                onClick={() => handlePlayerClick(player)}>
                {player.player_image ? (
                    <Image
                        src={player.player_image}
                        alt={player.player_name}
                        width={100}
                        height={100}
                        priority
                        className="rounded-full"
                        onError={handleImageError}
                    />
            ) : (
            <div className="flex justify-center items-center w-24 h-24 bg-gray-200 rounded-full">
                <FaUserAlt size={48} className="text-gray-500" />
            </div>
            )}
                    <h2 className="mt-2 text-xl font-semibold text-center">
                    {player.player_name} ({player.player_number})
                    </h2>
                    <p className="text-gray-600 text-center">
                    Team: {player.player_team}
                    </p>
                    <p className="text-gray-600 text-center">
                    Goals: {player.player_goals}
                    </p>
                    <p className="text-gray-600 text-center">
                    Assists: {player.player_assists}
                    </p>
                    <p className="text-gray-600 text-center">
                    Rating: {player.player_rating}
                    </p>
          </div>
        ))}
        {/* Resultados de buscador - FIN */}
      </div>
    </div>
  )
}

export default PlayerSearch
