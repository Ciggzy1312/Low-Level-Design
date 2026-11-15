export type Participant = {
    id: number;
    score: number;
}

export type ParticipantRank = Participant & {
    rank: number
}