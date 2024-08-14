import axios from "axios"
import {Player} from "../types/types"

export const fetchPlayerData = async (
  playerName: string
): Promise<Player[]> => {
  const response = await axios.get(`/api/players?search=${playerName}`)
  return response.data.player ?? []
}
