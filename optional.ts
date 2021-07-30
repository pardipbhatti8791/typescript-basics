function printIngredient(quanity: string, ingredient: string, extra?: string) {
    console.log(`${quanity} ${ingredient} ${extra ? extra : ""}`)
}

printIngredient("1C", "Flour")
printIngredient("1C", "Sugar", "Flour")

interface User {
    id: string;
    info?:  {
        email?: string
    }
}


function getEmail(user: User): string {
    if(user.info) {
        return user.info.email!
    }

    return ""
}

// optionalObjectChain
function getEmialEasy(user: User): string {
    return user?.info?.email ?? ""
}

// optionalCallback
function addWithCallback(x: number, y: number, callback: () => void) {
    console.log([x, y])
    callback?.() // it will only invoke this function if it is exists
}
