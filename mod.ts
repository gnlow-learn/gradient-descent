const d =
(
    f: (x: number) => number,
    x: number,
    h = 1e-5,
) =>
    (f(x+h)-f(x-h))/(2*h)

const gd =
(
    f: (x: number) => number,
    initialX: number,
    learningRate = 0.1,
    epochs = 100,
) => {
    let x = initialX

    for (let i=0; i<epochs; i++) {
        const grad = d(f, x)

        x -= learningRate * grad

        if (i%10 == 0) {
            console.log(`Epoch ${i}: x = ${x}, f(x) = ${f(x)}`)
        }
    }

    return x
}

gd(x => x**2-4*x+4, 0)
