// https://leetcode.com/problems/binary-search/description/

package main

import "fmt"

func main() {
	list := []int{2,3,4,5,7,8,10,13,14,17,18,20}
	value := 17

	res := search(list, value)
	fmt.Println(res)
}

func search(list []int, value int) (index int) {
	iniPos := 0
	finPos := len(list) - 1

	for iniPos <= finPos {
		midPos := (iniPos + finPos) / 2

		if value == list[midPos] {
			return midPos
		}

		if value < list[midPos] {
			finPos = midPos - 1
		} else {
			iniPos = midPos + 1
		}
	}

	return -1
}