import { UsersType } from './08';

let users: UsersType;

beforeEach(() => {
    users = {
        '101': { id: 101, name: 'John' },
        '205': { id: 205, name: 'Mary' },
        '12': { id: 12, name: 'Bob' },
        '114': { id: 114, name: 'Jane' },
        '57': { id: 57, name: 'Tom' },
    };
});

test('should update corresponding user', () => {
    users['12'].name = 'Alex';
    expect(users['12']).toEqual({ id: 12, name: 'Alex' });
});

test('should delete corresponding user', () => {
    delete users['205'];
    expect(users['205']).toBeUndefined();
});