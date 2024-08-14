import React from "react"

interface SearchBarProps {
  playerName: string
  setPlayerName: (name: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({playerName, setPlayerName}) => (
  <input
    type="text"
    value={playerName}
    onChange={(e) => setPlayerName(e.target.value)}
    placeholder="Search for a player"
    className="p-2 border border-gray-300 rounded-md w-full"
  />
)

export default SearchBar
