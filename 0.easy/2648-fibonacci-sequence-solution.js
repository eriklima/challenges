/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    const n = 50

    yield 0
    yield 1

    let prev1 = 0
    let prev2 = 1

    for (let i = 2; i < n; i++) {
        const cur = prev1 + prev2
        yield cur
        prev1 = prev2
        prev2 = cur
    }
}

var fibGenerator2 = function* () {
    const n = 50

    let seq = [0, 1]
    yield 0
    yield 1

    for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 2] + seq[i - 1]
        yield seq[i]
    }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
