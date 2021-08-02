enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}


const englishLoadingState = {
    [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: string) => state === LoadingState.loading
console.log(isLoading(LoadingState.loaded))

function rollDice(dice: number): number {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
        pip += Math.floor((Math.random() * 5)) + 1
    }

    return pip
}

console.log(rollDice(4))
