package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"sort"
	"strconv"
	"strings"
)

func zigZagSequence(arr []int32) []int32 {    
    sort.Slice(arr, func(i, j int) bool { return arr[i] < arr[j] })

    n := len(arr) - 1
    k := n / 2
    
    arr[k], arr[n] = arr[n], arr[k]
    
    k += 1
    n -= 1
    
    for k < n {
        arr[k], arr[n] = arr[n], arr[k]
        k += 1
        n -= 1
    }
    
    return arr
}

func main() {
    reader := bufio.NewReader(os.Stdin)
    
    t, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 32)
    checkError(err)
    
    writer := bufio.NewWriter(os.Stdout)
    
    for t > 0 {
        n, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 32)
        checkError(err)
        
        var a []int32
        arr := strings.Split(strings.TrimSpace(readLine(reader)), " ")
        
        for i := 0; i < int(n); i++ {
            item := arr[i]
            aTemp, err := strconv.ParseInt(item, 10, 32)
            checkError(err)
            a = append(a, int32(aTemp))
        }   
        
        result := zigZagSequence(a)
        writeLine(writer, result)
        fmt.Fprint(writer, "\n")
        
        t -= 1
    }
    
    writer.Flush()
}

func readLine(reader *bufio.Reader) string {
    line, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""    
    }
    
    return strings.TrimRight(string(line), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}

func writeLine(writer *bufio.Writer, values []int32) {
    for i, value := range values {
        fmt.Fprintf(writer, "%d", value)
        
        if i < (len(values) - 1) {
            fmt.Fprint(writer, " ")
        }
    }
}
