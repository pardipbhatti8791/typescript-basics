function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial
    return [
        () => val,
        (v: T) => {
            val = v
        }
    ]
}

// @ts-ignore
const [stateGet, stateSet] = simpleState(10)
console.log(stateGet())
console.log(stateSet(62))
console.log()
