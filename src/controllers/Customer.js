export const SatisfactionType = Object.freeze({
    ESCTATIC: "esctatic",
    HAPPY: "happy",
    NEUTRAL: "neutral",
    STAR: "star",
    UNHAPPY: "unhappy",
    YUMMY: "yummy"
})

export class Customer {
    constructor(tile, satisfaction = SatisfactionType.NEUTRAL) {
        this.tile = tile
        this.satisfaction = satisfaction

    }
}