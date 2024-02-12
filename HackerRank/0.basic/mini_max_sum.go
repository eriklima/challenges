package main

import (
	"fmt"
)

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

func miniMaxSum(arr []int32) {
    min := arr[0]
    max := arr[0]
    sum := int64(0)
    
    for i := 0; i < len(arr); i++ {
        sum += int64(arr[i])
        if arr[i] < min {
            min = arr[i]
        }
        if arr[i] > max {
            max = arr[i]
        }
    }
    
    minSum := sum - int64(max)
    maxSum := sum - int64(min)
    
    fmt.Printf("%d %d", minSum, maxSum)
}