package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/eriklima/missing-sequential-value/internal/args"
)

var seqArgs args.Values

func main() {
	flag.Var(&seqArgs, "sequence", "Enter the sequence of numbers, separated by a comma (,).")
	flag.Parse()

	seq, err := args.ValuesToInt(seqArgs)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Sequence: %v\n", seq)

	missing := MissingNumber(seq)
	fmt.Printf("Missing number: %v\n", missing)
}

func MissingNumber(seq []int) int {
	n := len(seq) + 1
	sum1 := (n * (n + 1)) / 2
	var sum2 int

	for _, num := range seq {
		sum2 += num
	}

	return sum1 - sum2
}