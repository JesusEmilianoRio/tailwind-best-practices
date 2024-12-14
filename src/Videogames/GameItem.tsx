import { VideoGame } from "../Models/video-game";

const GameItem = (game : Omit<VideoGame, "id">) => {
    return(
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <img src={game.image} alt={game.title}
                className="w-full h-full object-cover object-center"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-4xl">🎮</p>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-white font-bold mb-4">{game.title}</h3>
                <h4 className="text-gray-300 text-lg mb-3">{game.subtitle}</h4>
                <p className="text-gray-400 text-sm">{game.description}</p>
            </div>
        </div>
    )
}

export default GameItem;