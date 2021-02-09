const multiplier = {
    numbers: [0, 1, 2, 3, 4, 5, 6],
    multiplyBy: 100,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log('numbers', multiplier.multiply());