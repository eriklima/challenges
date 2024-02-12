// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
    const n = nums.length
     
     for (let i = 0; i < n; i++) {
         nums[n+i] = nums[i]
     }
 
     return nums
 }
 
 function getConcatenation3(nums: number[]): number[] {
     const ans: number[] = []
     
     for (let i = 0; i < nums.length; i++) {
         ans[i] = nums[i]
         ans[i+nums.length] = nums[i]
     }
 
     return ans
 }
 
 function getConcatenation2(nums: number[]): number[] {
     const n = nums.length
     const ans = new Array<number>(2*n)
     
     for (let i = 0; i < n; i++) {
         ans[i] = nums[i]
         ans[i+n] = nums[i]
     }
 
     return ans
 }
 
 function getConcatenation1(nums: number[]): number[] {
     const ans = nums.concat(nums)
     return ans
 };
 
 console.log(getConcatenation([1,2,3]))