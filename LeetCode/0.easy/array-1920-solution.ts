// https://leetcode.com/problems/build-array-from-permutation/description/

function buildArray(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i]
        const aux = nums[val] % nums.length
        nums[i] = aux * nums.length + val
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / nums.length)
    }

    return nums
};

function buildArray1(nums: number[]): number[] {
    const ans: number[] = []

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]]
    }

    return ans
};


console.log("-----------------------------")
const nums = [5,0,2,1,3,4]
console.log(nums)
console.log(buildArray(nums))