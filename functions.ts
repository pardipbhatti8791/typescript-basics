function addNumbers(a: number, b: number) {
    return a + b
}

export default addNumbers

export const addStrings = (str1: string, str2: string) => `${str1} ${str2}`

export const format = (title: string, param: string | number) : string => `${title} ${param}`

export const printformat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

export const fetchData = (url: string) => Promise.resolve(`data from ${url}`)

function introduce(solution: string, ...names: string[]): string {
    return `${solution} ${names.join(' ')}`
}

export function getName(user: { first: string, last: string }): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}
