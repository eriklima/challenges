/*
Two-step sorting operation on a nested array. 
It must sorts the inner arrays in ascending order if they contain numbers or strings. 
Then, it sorts the entire array in descending order based on the length of the inner arrays.
*/

function sortInnerAndOuter(array) {
    var sort

    if (uniqueType(array)) {
        sort = sortUniqueType(array)
    } else {
        sort = sortDifferenceType(array)
    }

    return sort
}

function uniqueType(array) {
    type = typeof array[0]

    for (var i = 1; i < array.length; i++) {
        if (type != typeof array[i]) {
            return false
        }
    }

    return true
}

function sortUniqueType(array) {
    var auxResult = []
    var sizes = []

    array.forEach((innerArray, i) => {
        auxArray = innerArray.sort()
        auxSize = innerArray.length
        sizes.push(auxSize)
        auxResult.push(auxArray)
    })

    return sort(auxResult, sizes)
}

function sort(auxResult, sizes) {
    sizes.sort().reverse()
    var result = []

    sizes.forEach((size) => {
        for (var i = 0; i < auxResult.length; i++) {
            if (size === auxResult[i].length) {
                result.push(auxResult[i])
                auxResult.splice(i, 1)
                break
            }
        }
    })

    return result
}

function sortDifferenceType(array) {
    var sizes = []

    array.forEach((innerArray, i) => {
        auxSize = innerArray.length
        sizes.push(auxSize)
    })

    return sort(array, sizes)
}

// Example usage
const inputArray = [
    [9, 6, 3],
    [5, 2, 8, 1],
    [7, 4],
    ["banana", "apple", "cherry"],
]
const sortedArray = sortInnerAndOuter(inputArray)
console.log(sortedArray)
// Output: [  [ 1, 2, 5, 8 ],  [ 3, 6, 9 ],  [ 'apple', 'banana', 'cherry' ],  [ 4, 7 ] ]

const inputArray2 = [
    [5, "apple"],
    ["banana", 3],
    ["cherry", 7],
    [42, "orange"],
    "pear",
]
const sortedArray2 = sortInnerAndOuter(inputArray2)
console.log(sortedArray2)
// Output: [  'pear',  [ 5, 'apple' ],  [ 'banana', 3 ],  [ 'cherry', 7 ],  [ 42, 'orange' ]]
