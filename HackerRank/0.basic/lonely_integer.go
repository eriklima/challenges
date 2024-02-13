package main

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

func lonelyinteger(a []int32) int32 {
    count := make(map[int32]int, len(a) / 2 + 1)
    
    for i := 0; i < len(a); i++ {
        value := a[i]
        if count[value] == 0 {
            count[value] = 1
        } else {
            count[value] += 1
        }
    }
    
    for k, v := range count {
        if v == 1 {
            return k
        }
    }
    
    return -1
}