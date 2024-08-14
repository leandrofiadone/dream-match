import type {NextRequest} from "next/server"
import axios from "axios"

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const playerName = searchParams.get("playerName")?.toLowerCase().trim() || ""

  try {
    const response = await axios.get(
      `https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=${process.env.SECRET_API_KEY}`
    )

    // Dividir el nombre de búsqueda en partes
    const nameParts = playerName.split(" ")

    // Refinar la búsqueda con logs adicionales
    const players = response.data.filter((player: any) => {
      const shortName = player.player_name?.toLowerCase().trim() || ""
      const fullName = player.player_complete_name?.toLowerCase().trim() || ""

      const matchFound = nameParts.some(
        (part) => shortName.includes(part) || fullName.includes(part)
      )



      return matchFound
    })

    // Ordenar jugadores por rating
    players.sort((a: any, b: any) => {
      const ratingA = parseFloat(a.player_rating) || 0
      const ratingB = parseFloat(b.player_rating) || 0
      return ratingB - ratingA
    })

    // Log del primer jugador encontrado
    console.log("First player found:", players[0])

    return new Response(JSON.stringify(players), {status: 200})
  } catch (error) {
    console.error("Error fetching player data:", error)
    return new Response(JSON.stringify({error: "Error fetching player data"}), {
      status: 500
    })
  }
}
