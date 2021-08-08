class Doggy {
    constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy("Sheru", 13)
const lgg1 = new Doggy("Peeta", 14)
// lgg.name = "peeta"
console.log(lgg.name)

class DogList {
    private doggies: Doggy[] = []
    static instance: DogList = new DogList();

    private constructor() {}

    public addDog(dog:  Doggy) {
        this.doggies.push(dog)
    }

    static getDog() {
        return DogList.instance.doggies
    }

}
DogList.instance.addDog(lgg)
DogList.instance.addDog(lgg1)
console.log(DogList.getDog())
// const dl = new DogList()

