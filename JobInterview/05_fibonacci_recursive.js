const seq = []

function main(n) {
    if (n == 1) {
        seq.push(0)
    } else if (n >= 2) {
        seq.push(0, 1)
        fibo(n)
    }

    return seq
}

function fibo(n) {
    const exists = n <= seq.length

    if (exists) {
        return seq[n - 1]
    } else {
        res = fibo(n - 2) + fibo(n - 1)
        seq.push(res)
        return res
    }
}

console.log(main(10))
