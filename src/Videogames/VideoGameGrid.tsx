import { VideoGame } from "../Models/video-game.ts";
import GameItem from "./GameItem.tsx";

interface Props{
    videogames : VideoGame[];
}

function VideoGameGrid({videogames} : Props) {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-white font-bold pb-9">Featured Games</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    videogames.map((game) => (
                        <GameItem key={game.id} {...game}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default VideoGameGrid;