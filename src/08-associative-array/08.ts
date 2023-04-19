export type UsersType = {
    [key: string]: { id: number, name: string }
}

export const usersObj = {
    '0': 'John',
    '1': 'Mary',
    '2': 'Bob',
    '3': 'Jane',
    '4': 'Tom'
};

// 0(1)
const users: UsersType = {
    '101': { id: 101, name: 'John' },
    '205': { id: 205, name: 'Mary' },
    '12': { id: 12, name: 'Bob' },
    '114': { id: 114, name: 'Jane' },
    '57': { id: 57, name: 'Tom' },
};

const newUser = { id: 251, name: 'Sam' };
users[newUser.id] = newUser;
delete users[newUser.id];
users[newUser.id].name = 'Alex';

// O(n)
export const usersArray = [
    { id: 101, name: 'John' },
    { id: 205, name: 'Mary' },
    { id: 12, name: 'Bob' },
    { id: 114, name: 'Jane' },
    { id: 57, name: 'Tom' },
];

const usersCopy = [ ...usersArray.filter(user => user.id !== newUser.id),
    newUser ];
usersCopy.filter(user => user.id !== newUser.id);