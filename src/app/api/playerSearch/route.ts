import type {NextRequest} from "next/server"
import axios from "axios"

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const playerName = searchParams.get("playerName")

  try {
    const response = await axios.get(
      `https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=${process.env.SECRET_API_KEY}`
    )
    return new Response(JSON.stringify(response.data), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify({error: "Error fetching player data"}), {
      status: 500
    })
  }
}
