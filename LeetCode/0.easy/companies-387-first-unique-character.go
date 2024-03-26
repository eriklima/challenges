package main

func main() {
	s := "leetcode"
	println(firstUniqChar(s))	
}

func firstUniqChar(s string) int {
    letters := [26]int{}
	baseIndex := 'a'

    for _, l := range s {
        letters[l - baseIndex]++
    }

	for i, l := range s {
		if letters[l - baseIndex] == 1 {
			return i
		}
	}

    return -1
}
