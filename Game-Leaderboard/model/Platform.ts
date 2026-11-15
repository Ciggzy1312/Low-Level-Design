import { Participant, ParticipantRank } from "../types/Participant";
import { Game } from "./Game";
import { Player } from "./Player";

export class Platform {
    id: number;
    Games: Map<number, Game>
    Players: Map<number, Player>

    constructor() {
        this.id = Math.floor(Math.random() + 1)
        this.Games = new Map()
        this.Players = new Map()
    }

    addGame(name: string) {
        const newGame = new Game(name);
        this.Games.set(newGame.id, newGame)
    }

    addPlayers(name: string) {
        const player = new Player();
        this.Players.set(player.id, player)
    }

    addPlayerToGame(gameId: number, playerId: number) {
        const player = this.Players.get(playerId)
        if(!player) {
            console.error("No such player exist");
            return
        }

        const game = this.Games.get(gameId)
        if(!game) {
            console.error("No such game exist");
            return
        }

        game.addParticipant(player.id)
    }

    getGame(gameId: number): Game | null {
        const game = this.Games.get(gameId)

        if (!game) {
            console.error("No such game exists");
            return null
        }

        return game
    }

    updateScore(gameId: number, playerId: number, score: number, increment: boolean = true) {
        const player = this.Players.get(playerId)
        if(!player) {
            console.error("No such player exist");
            return
        }

        const game = this.Games.get(gameId)
        if(!game) {
            console.error("No such game exist");
            return
        }

        game.updateScore(player.id, score, increment)
    }

    getPlayerDetails(gameId: number, playerId: number): ParticipantRank | null {
        const player = this.Players.get(playerId)
        if(!player) {
            console.error("No such player exist");
            return null
        }

        const game = this.Games.get(gameId)
        if(!game) {
            console.error("No such game exist");
            return null
        }

        return game.getPlayerDetails(player.id)
    }


    getTopPlayers(gameId: number, count: number = 0) {
        const game = this.Games.get(gameId)
        if(!game) {
            console.error("No such game exist");
            return null
        }

        return game.getLeaderboard(count)
    }
}