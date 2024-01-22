package main

import "fmt"

var seq = []int{}

func main() {
	fibo(10)
	fmt.Println(seq)
}

func fibo(n int) {
	if n <= 1 {
		seq = append(seq, 0)
	} else {
		seq = append(seq, 0, 1)
		for i := 2; i < n; i++ {
			seq = append(seq, seq[i - 2] + seq[i - 1])
		}
	}
}

// Recurserve mode

/*
package main

import "fmt"

var seq = []int{}

func main() {
	n := 10

	if n <= 1 {
		seq = append(seq, 0)
	} else {
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