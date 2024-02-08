// https://leetcode.com/problems/sort-an-array/

package main

import "fmt"

func main() {
	seq := []int{9,8,7,6,5,4,3,2,1}
	fmt.Println(seq)

	res := sort(seq)
	fmt.Println(res)
}

func sort(seq []int) []int {
	mid := len(seq) / 2

	if mid == 0 {
		return seq
	}

	left := sort(seq[:mid])
	right := sort(seq[mid:])
	return merge(left, right)
}

func merge(left []int, right []int) []int {
	l := 0
	r := 0

	var res []int

	for l < len(left) && r < len(right) {
		if left[l] <= right[r] {
			res = append(res, left[l])
			l++
		} else {
			res = append(res, right[r])
			r++
		}
	}

	if l < len(left) {
		res = append(res, left[l:]...)
	}

	if r < len(right) {
		res = append(res, right[r:]...)
	}

	return res
}