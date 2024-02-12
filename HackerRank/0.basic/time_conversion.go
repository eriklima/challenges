package main

import (
	"fmt"
	"strconv"
	"strings"
)

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

func timeConversion(s string) string {
    parts := strings.Split(s, ":")
    hour, _ := strconv.Atoi(parts[0])
    minute, _ := strconv.Atoi(parts[1])
    second, _ := strconv.Atoi(parts[2][:2])
    
	hour = hour % 12
    isPm := parts[2][2:] == "PM"
    
    if isPm {
        hour += 12
    }
    
    return fmt.Sprintf("%02d:%02d:%02d", hour, minute, second)
}