function main(array, value) {
    let ini = 0
    let fin = array.length - 1

    while (ini <= fin) {
        const mid = Math.floor((ini + fin) / 2)

        if (array[mid] == value) {
            return mid
        }

        if (value < array[mid]) {
            fin = mid - 1
        } else {
            ini = mid + 1
        }
    }

    return -1
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(main(array, 4))
