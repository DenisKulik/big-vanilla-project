export type UserType = {
    name: string
    age: number
    address: {
        title: string
        house: number
    }
    laptop: {
        title: string
    }
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export const moveUser = (user: UserType, city: string): UserType =>
    ({ ...user, address: { ...user.address, title: city } });

export const upgradeUserLaptop = (user: UserType, laptop: string): UserType =>
    ({ ...user, laptop: { ...user.laptop, title: laptop } });

export const addBooksToUser = (user: UserWithBooksType,
                               books: string[]): UserWithBooksType =>
    ({ ...user, books: [ ...user.books, ...books ] });

export const updateBooksToUser = (
    user: UserWithBooksType,
    oldBook: string,
    newBook: string): UserWithBooksType => ({
    ...user,
    books: [ ...user.books.map(book => book === oldBook ? newBook : oldBook) ]
});

export const deleteBooksToUser = (user: UserWithBooksType,
                                  BookForDel: string): UserWithBooksType =>
    ({ ...user, books: [ ...user.books.filter(book => book !== BookForDel) ] });

