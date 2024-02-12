// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums: number[]): number {
    const goodPairs = new Map<number, number>()
    let sum = 0

    for (let num of nums) {
        if (goodPairs.has(num)) {
            sum += goodPairs.get(num)
            goodPairs.set(num, goodPairs.get(num) + 1)
        } else {
            goodPairs.set(num, 1)
        }
        
    }

    return sum
};