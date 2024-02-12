// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

function maxProduct(nums: number[]): number {
    let max = 0
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let val = (nums[i] -1) * (nums[j] - 1)
            if (val > max) {
                max = val
            }
        }
    }

    return max
};