package basic

import "fmt"

func plusMinus(arr []int32) {
    pos := 0.0
    neg := 0.0
    zer := 0.0
    
    arrSize := len(arr)
    
    for i := 0; i < arrSize; i++ {
        arrValue := arr[i]
        
        if arrValue < 0 {
            neg += 1
        } else if arrValue > 0 {
            pos += 1
        } else {
            zer += 1
        }
    }
    
    pos /= float64(arrSize)
    neg /= float64(arrSize)
    zer /= float64(arrSize)
    
    fmt.Printf("%.6f\n", pos)
    fmt.Printf("%.6f\n", neg)
    fmt.Printf("%.6f\n", zer)
}