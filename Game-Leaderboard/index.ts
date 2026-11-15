/*
Core Entities

Player
- id: number
- name: string 

Game
- id: number
- name: string
- LeaderBoard -> Player[] => sorted
- Participants -> Map<id, Player>

-- addParticipant(playerId: number): void
-- removeParticipant(playerId: number): void
-- getTopPlayers(count: number): []Player
-- updateScore(score: number): void
-- getPlayerRank(playerId: number): Player
-- getPlayerScore(playerId: number): number
-- getLeaderboard(): Leaderboard

Platform
- Games -> Map<id, Game>
- Players -> Map<id, Player>

-- addGame(name: string): number
-- removeGame(gameId: number): void
-- getTopPlayers(gameId: number, count: number): []Player
*/