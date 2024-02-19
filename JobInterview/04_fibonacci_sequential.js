function main(n) {
    const seq = []

    if (n == 1) {
        seq.push(0)
    } else if (n >= 2) {
        seq.push(0, 1)
        for (let i = 2; i < n; i++) {
            seq.push(seq[i - 2] + seq[i - 1])
        }
    }

    return seq
}

console.log(main(10))
