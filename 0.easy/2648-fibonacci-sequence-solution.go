package main

import "fmt"

var seq = []int{}

func main() {
	res := fibo(10)
	fmt.Println(res)
}

func fibo(n int) []int {
	if n == 1 {
		seq = append(seq, 0)
	} else if n >= 2 {
		seq = append(seq, 0, 1)
		for i := 2; i < n; i++ {
			seq = append(seq, seq[i - 2] + seq[i - 1])
		}
	}

	return seq
}

// Recurserve mode

/*
package main

import "fmt"

var seq = []int{}

func main() {
	n := 10

	if n == 1 {
		seq = append(seq, 0)
	} else if n >= 2 {
		seq = append(seq, 0, 1)
		fibo(n)
	}
	
	fmt.Println(seq)
}

func fibo(n int) int {
	exists := n <= len(seq)

	if exists {
		return seq[n - 1]
	} else {
		res := fibo(n - 2) + fibo(n - 1)
		seq = append(seq, res)
		return res
	}
}
*/