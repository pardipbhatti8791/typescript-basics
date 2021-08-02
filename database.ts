interface Database {
    get(id: string): string
    setter(id: string, value: string): void
}

interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {}
    
    get(id: string): string {
        return this.db[id];
    }

    setter(id: string, value: string): void {
        this.db[id] = value
    }

}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable{
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }

    saveToString(): string {
        return JSON.stringify(this.db)
    }

}

const myDB = new PersistentMemoryDB()
myDB.setter("gugu", "bubu")
// myDB.db["gugu"] = "baz"
console.log(myDB.get("gugu"))
const saved = myDB.saveToString()
const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get("gugu"))