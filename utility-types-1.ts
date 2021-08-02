interface MyUser {
    name: string
    id: number
    email?: string
}

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: 'gugu',
    id: 1,
    email: 'dontemail@email.com'
}, {
    email: "gpcoders@gp.com"
}))

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, "email" | "name">

const myById = (user: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
    return user.reduce((a, v) => {
        const {id, ...other} = v
        return {
            ...a,
            [id]: other
        }
    }, {});
}

console.log(myById([
    {
        id: 1,
        name: "gugu"
    },
    {
        id: 2,
        name: "gugububu"
    }
]))
