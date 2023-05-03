export type UserType = {
    name: string,
    age: number,
}

export const increaseAge = (user: UserType) => user.age++;