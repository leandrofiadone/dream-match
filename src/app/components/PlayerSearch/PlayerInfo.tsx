import React from "react"
import Image from "next/image"
import {FaUserAlt} from "react-icons/fa"
import {Player} from "../../types/types"

interface PlayerInfoProps {
  player: Player
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({player}) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.style.display = "none"
  }

  return (
    <div className="flex">
      {player.player_image ? (
        <div className="w-9 h-9 sm:w-14 sm:h-14 lg:ml-5 lg:w-18 lg:h-18 sm:mb-3 sm:ml-3 ml-5 relative rounded-full">
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
        <div className="flex justify-center items-center w-9 h-9 sm:w-14 sm:h-14 lg:ml-5 lg:w-18 lg:h-18 sm:ml-3 ml-5 bg-gray-200 rounded-full">
          <FaUserAlt size={24} className="text-gray-500" />
        </div>
      )}

      <div className="flex flex-col sm:text-center mr-6 sm:mr-auto ml-auto">
        <h2 className="xl:text-base text-sm font-semibold">
          {player.player_name} ({player.player_number})
        </h2>
        <div className="flex flex-col sm:text-center text-right lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 lg:mr-4">
            <p className="text-xs lg:text-base text-gray-600">
              Team: {player.player_team}
            </p>
          </div>
          <div className="hidden sm:block lg:w-1/2">
            <p className="text-xs lg:text-sm text-gray-600">
              Goals: {player.player_goals}
            </p>
            <p className="text-xs lg:text-sm text-gray-600">
              Assists: {player.player_assists}
            </p>
            <p className="text-xs lg:text-sm text-gray-600">
              Rating: {player.player_rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo
