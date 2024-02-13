package main

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

func countingSort(arr []int32) []int32 {
    count := make([]int32, 100)
    
    for _, v := range arr {
        count[v] += 1
    }
    
    return count
}