const d =
(
    f: (...x: number[]) => number,
    x: number[],
    h = 1e-5,
) =>
    Array.from({ length: x.length }, (_, i) => {
        const x1 = [...x]
        const x2 = [...x]
        x1[i] += h
        x2[i] -= h

        return (f(...x1)-f(...x2))/(2*h)
    })

const gd =
(
    f: (...x: number[]) => number,
    initialX: number[],
    learningRate = 0.1,
    epochs = 100,
) => {
    let x = initialX

    for (let i=0; i<epochs; i++) {
        const grad = d(f, x)

        x = x.map((x, i) => x - learningRate * grad[i])

        if (i%10 == 0) {
            console.log(
                `Epoch ${i}: x = ${x.map(n => n.toFixed(3))}, f(x) = ${f(...x).toFixed(3)}`
            )
        }
    }

    return x
}

gd((x, y) => x**2+(y-6)**2, [2, 3], 0.1)
