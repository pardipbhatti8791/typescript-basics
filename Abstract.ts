abstract class StreetFighter {
    constructor() {
    }

    move() {
    }

    fight() {
        console.log(`${this.name} attach with ${this.getSpecialAttack()}`)
    }

    abstract getSpecialAttack(): string;
    abstract get name(): string
}
// const ryu = new StreetFighter()

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Hadoken";
    }

    get name(): string {
        return "Ryu";
    }

}

const ryu = new Ryu()
// console.log(ryu.getSpecialAttack())
console.log(ryu.fight())