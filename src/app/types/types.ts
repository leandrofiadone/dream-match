export interface Player {
  player_key: number
  player_image: string
  player_name: string
  player_number: string
  player_team: string
  player_goals: string
  player_assists: string
  player_rating: string
}

export interface PlayerSearchProps {
  onPlayerSelect: (player: React.ReactNode) => void
  onClose: () => void
}
