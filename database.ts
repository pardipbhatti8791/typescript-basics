interface Database<T, K> {
    get(id: K): T
    setter(id: K, value: T): void
}

interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
}

type DBKeyType = string | number | symbol

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>
    
    get(id: K): T {
        return this.db[id];
    }

    setter(id: K, value: T): void {
        this.db[id] = value
    }

}

class PersistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable{
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }

    saveToString(): string {
        return JSON.stringify(this.db)
    }

}

const myDB = new PersistentMemoryDB<number, string>()
myDB.setter("gugu", 123)
// myDB.db["gugu"] = "baz"
console.log(myDB.get("gugu"))

const saved = myDB.saveToString()
myDB.setter("gugu", 22)
console.log(myDB.get("gugu"))

const myDB2 = new PersistentMemoryDB<number, string>()
myDB2.restoreFromString(saved)
console.log(myDB2.get("gugu"))