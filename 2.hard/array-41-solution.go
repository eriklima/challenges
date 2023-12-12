// https://leetcode.com/problems/first-missing-positive/

func execute(nums []int) int {
	for i := 0; i < len(nums); {
		num := nums[i]
		if num > 0 && num <= len(nums) && nums[num-1] != num {
			nums[i], nums[num-1] = nums[num-1], nums[i]
			continue
		}
		i++
	}

	for i := 1; i <= len(nums); i++ {
		if nums[i-1] != i {
			return i
		}
	}

	return len(nums) + 1
}
