import React from "react"
import Image from "next/image"
import {FaUserAlt} from "react-icons/fa"
import PlayerInfo from "./PlayerInfo"
import {Player} from "../../types/types"

interface PlayerCardProps {
  player: Player
  onPlayerClick: (player: React.ReactNode) => void
}

const PlayerCard: React.FC<PlayerCardProps> = ({player, onPlayerClick}) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.style.display = "none"
  }

  const handleClick = () => {
    onPlayerClick(<PlayerInfo player={player} />)
  }

  return (
    <div
      className="mb-4 p-4 border rounded-md shadow-md flex flex-col items-center cursor-pointer"
      onClick={handleClick}>
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
      <p className="text-gray-600 text-center">Team: {player.player_team}</p>
      <p className="text-gray-600 text-center">Goals: {player.player_goals}</p>
      <p className="text-gray-600 text-center">
        Assists: {player.player_assists}
      </p>
      <p className="text-gray-600 text-center">
        Rating: {player.player_rating}
      </p>
    </div>
  )
}

export default PlayerCard
