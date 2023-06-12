import {
    addBooksToUser, deleteBooksToUser, moveUser, updateBooksToUser,
    upgradeUserLaptop, UserType,
    UserWithBooksType
} from './10';

test('should change copy address', () => {
    const user: UserType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Kemerovo',
            house: 105
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const movedUser = moveUser(user, 'Moscow');

    expect(movedUser.address.title).toBe('Moscow');
    expect(movedUser.address).not.toBe(user.address);
    expect(user.address.title).toBe('Kemerovo');
});

test('should upgrade laptop to macbook', () => {
    const user: UserType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Kemerovo',
            house: 105
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const upgradedUser = upgradeUserLaptop(user, 'macbook');

    expect(upgradedUser.laptop.title).toBe('macbook');
    expect(upgradedUser.laptop).not.toBe(user.laptop);
    expect(user.laptop.title).toBe('ZenBook');
});

test('should add books', () => {
    const user: UserWithBooksType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Kemerovo',
            house: 105
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [ 'The Witcher', 'React Cookbook', 'HTML and CSS' ]
    };

    const upgradedUser = addBooksToUser(user, [ 'TypeScript', 'REST API' ]);

    expect(upgradedUser.books.length).toBe(5);
    expect(upgradedUser.books).not.toBe(user.books);
    expect(upgradedUser.books[3]).toBe('TypeScript');
    expect(upgradedUser.books[4]).toBe('REST API');
});

test('should update books', () => {
    const user: UserWithBooksType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Kemerovo',
            house: 105
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [ 'The Witcher', 'React Cookbook', 'HTML and CSS', 'JavaScript' ]
    };

    const upgradedUser = updateBooksToUser(user, 'JavaScript', 'TypeScript');

    expect(upgradedUser.books.length).toBe(4);
    expect(upgradedUser.books).not.toBe(user.books);
    expect(upgradedUser.books[3]).toBe('TypeScript');
});

test('should delete books', () => {
    const user: UserWithBooksType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Kemerovo',
            house: 105
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [ 'The Witcher', 'HTML and CSS', 'JavaScript', 'React Cookbook' ]
    };

    const upgradedUser = deleteBooksToUser(user, 'JavaScript');

    expect(upgradedUser.books.length).toBe(3);
    expect(upgradedUser.books).not.toBe(user.books);
    expect(upgradedUser.books[2]).toBe('React Cookbook');
});