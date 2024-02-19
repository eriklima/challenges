function main(array) {
    let counting = []

    array.forEach((value) => {
        if (!counting[value]) {
            counting[value] = 1
        } else {
            counting[value] += 1
        }
    })

    let index = 0
    counting.forEach((occurrences, value) => {
        for (let i = 0; i < occurrences; i++) {
            array[index] = value
            index += 1
        }
    })

    console.log(counting)

    return array
}

const array = [90, 8, 3, 77, 16, 115, 84, 8, 2, 1]
console.log(main(array))
