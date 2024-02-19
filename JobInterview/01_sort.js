/*
Two-step sorting operation on a nested array. 
It must sorts the inner arrays in ascending order if they contain numbers or strings. 
Then, it sorts the entire array in descending order based on the length of the inner arrays.
*/

function sortInnerAndOuter(array) {
    const isUniqueType = uniqueType(array)
    const arrays = new Map()

    array.forEach((innerArray) => {
        if (isUniqueType) {
            innerArray.sort()
        }

        const innerSize = innerArray.length

        if (!arrays.has(innerSize)) {
            arrays.set(innerSize, [])
        }

        arrays.set(innerSize, arrays.get(innerSize).concat([innerArray]))
    })

    return sort(arrays)
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

function sort(arrays) {
    arrays = new Map([...arrays.entries()].sort().reverse())
    var result = []

    arrays.forEach((innerArray) => {
        result = result.concat(innerArray)
    })

    return result
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
