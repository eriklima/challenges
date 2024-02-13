package main

import (
	"math"
)

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

func diagonalDifference(arr [][]int32) int32 {
    size := len(arr)
    leftPos := 0
    rightPos := size - 1
    leftSum := int32(0)
    rightSum := int32(0)
    
    for leftPos < size {
        leftSum += arr[leftPos][leftPos]
        rightSum += arr[leftPos][rightPos]
        leftPos += 1
        rightPos -= 1
    }
    
    return int32(math.Abs(float64(leftSum) - float64(rightSum)))
}