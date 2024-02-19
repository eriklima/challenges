// https://leetcode.com/problems/sort-an-array/

function merge(array) {
    const mid = Math.floor(array.length / 2)

    if (mid == 0) {
        return array
    }

    const left = merge(array.slice(0, mid))
    const right = merge(array.slice(mid))
    return sort(left, right)
}

function sort(left, right) {
    let l = 0
    let r = 0
    const result = []

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l])
            l++
        } else {
            result.push(right[r])
            r++
        }
    }

    if (l < left.length) {
        result.push(...left.slice(l))
    }

    if (r < right.length) {
        result.push(...right.slice(r))
    }

    return result
}

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(merge(array))
