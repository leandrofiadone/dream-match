import {useState} from "react"
import axios from "axios"
import PlayerCard from "./PlayerCard"
import SearchBar from "./SearchBar"
import SearchButton from "./SearchButton"
import {fetchPlayerData} from "../../utils/playerUtils"
import {Player, PlayerSearchProps} from "../../types/types"

const PlayerSearch: React.FC<PlayerSearchProps> = ({
  onPlayerSelect,
  onClose
}) => {
  const [playerName, setPlayerName] = useState("")
  const [playerData, setPlayerData] = useState<Player[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    setSearched(true)
    try {
      const data = await fetchPlayerData(playerName)
      setPlayerData(data)
    } catch (error) {
      console.error("Error fetching player data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <SearchBar playerName={playerName} setPlayerName={setPlayerName} />
      <SearchButton handleSearch={handleSearch} loading={loading} />

      <div className="mt-4 max-h-96 overflow-y-auto">
        {searched && !loading && playerData.length === 0 && (
          <p className="text-center md:text-base text-xs text-gray-600">
            El jugador no existe en la base de datos o hay un error en la
            búsqueda.
          </p>
        )}
        {playerData.map((player) => (
          <PlayerCard
            key={player.player_key}
            player={player}
            onPlayerClick={onPlayerSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayerSearch
