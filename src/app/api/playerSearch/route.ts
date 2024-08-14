import type {NextRequest} from "next/server"
import axios from "axios"

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const playerName = searchParams.get("playerName")

  try {
    const response = await axios.get(
      `https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=${process.env.SECRET_API_KEY}`
    )

    // Ordenar jugadores por rating (siendo los sin rating al final)
    const players = response.data.sort((a: any, b: any) => {
      const ratingA = parseFloat(a.player_rating) || 0
      const ratingB = parseFloat(b.player_rating) || 0
      return ratingB - ratingA
    })

    return new Response(JSON.stringify(players), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify({error: "Error fetching player data"}), {
      status: 500
    })
  }
}
