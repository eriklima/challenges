function solution(n, ratings) {
    const rates = new Map()

    ratings.forEach((item) => {
        const id = item[0]
        const rate = item[1]

        if (!rates.has(id)) {
            rates.set(id, [rate, rate])
        } else {
            const values = rates.get(id)
            values.push(rate)
            const sum = values.reduce((previous, next, index) =>
                index == 1 ? next : previous + next
            )
            values[0] = sum / (values.length - 1)
            rates.set(id, values)
        }
    })

    let high = 0
    let highest = []

    rates.forEach((values, id) => {
        const average = values[0]
        if (average > high) {
            high = average
            highest = [id]
        } else if (average == high) {
            highest.push(id)
        }
    })

    return highest.reduce((before, next) => (before < next ? before : next))
}

const n = 7
const rating = [
    [556, 2],
    [123, 3],
    [789, 4],
    [123, 5],
    [123, 2],
    [789, 1],
    [789, 5],
]

const result = solution(n, rating)
console.log(result)
