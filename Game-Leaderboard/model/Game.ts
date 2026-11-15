import { Participant, ParticipantRank } from "../types/Participant"

export class Game {
    id: number
    name: string
    Participants: Map<number, Participant>
    Leaderboard: Participant[]

    constructor(name: string) {
        this.id = Math.floor(Math.random() * 1000) + 1
        this.name = name
        this.Participants = new Map()
        this.Leaderboard = []
    }

    addParticipant(playerId: number) {
        const participant: Participant = {
            id: playerId,
            score: 0,
        }

        this.Participants.set(playerId, participant)
        this.Leaderboard.push(participant)
    }

    updateScore(playerId: number, score: number, increment: boolean = true) {
        if (score < 0) {
            console.error("Score cannot be less than 0")
            return;
        }

        const participant = this.Participants.get(playerId)
        if (!participant) {
            console.error("No such participant exist");
            return
        }

        if (increment) {
            participant.score += score
        } else {
            participant.score -= score
        }

        this.updateLeaderboard(participant);

        this.Participants.set(playerId, participant);
    }

    private updateLeaderboard(participant: Participant) {
        const idx = this.Leaderboard.findIndex(p => p.id === participant.id)
        this.Leaderboard[idx] = participant
        this.Leaderboard.sort((a, b) => {
            if (a.score === b.score) {
                a.id - b.id
            }

            return b.score - a.score
        })
    }

    private formatLeaderboard(participants: Participant[]): ParticipantRank[] {
        let rank = 1
        const results: ParticipantRank[] = []

        for (let i = 0; i < participants.length; i++) {
            if (i == 0) {
                results.push({
                    id: participants[i].id,
                    score: participants[i].score,
                    rank
                });
            } else {
                const prevScore = participants[i - 1].score
                const score = participants[i].score

                if (score !== prevScore) {
                    rank = i + 1
                }

                results.push({
                    id: participants[i].id,
                    score: participants[i].score,
                    rank
                })
            }
        }

        return results
    }

    getLeaderboard(count: number = 0): ParticipantRank[] {
        if (count < 0) {
            console.error("Score cannot be less than 0")
            return []
        }

        if (count === 0) {
            return this.formatLeaderboard(this.Leaderboard);
        }

        return this.formatLeaderboard(this.Leaderboard.slice(0, count))
    }

    private getRank(pos: number): number {
        let rank = 1

        if (pos === 0) {
            return rank
        }

        for (let i = 1; i <= pos; i++) {
            const currScore = this.Leaderboard[i].score
            const prevScore = this.Leaderboard[i - 1].score

            if (currScore != prevScore) {
                rank=i+1
            }
        }

        return rank;
    }

    getPlayerDetails(playerId: number): ParticipantRank | null {
        const participant = this.Participants.get(playerId)

        if (!participant) {
            console.error("No such participant exist");
            return null;
        }

        const pos = this.Leaderboard.findIndex(p => p.id === playerId)

        return {
            id: participant.id,
            score: participant.score,
            rank: this.getRank(pos)
        };
    }
}