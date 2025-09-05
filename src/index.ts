import { sequelize } from "../models/db";
import { Game } from "./classes/Game";
import { GameService } from "./services/GameService";
// const game = new Game()
// game.start()

async function main(){
    await sequelize.authenticate(); // ✅ check DB connection

    const gameService = new GameService()
    await gameService.init()
    // await gameService.start()
}

main()