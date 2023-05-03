import { increaseAge, UserType } from './09';

test('should update corresponding user', () => {
    const user: UserType = {
        name: 'Denis',
        age: 26,
    };

    increaseAge(user);

    const superUser = user;
    superUser.name = 'Dymich';

    expect(user.age).toBe(27);
    expect(user.name).toBe('Dymich');
});

test('should update users array', () => {
    const users: UserType[] = [
        { name: 'Denis', age: 26, },
        { name: 'Alexey', age: 25, },
        { name: 'Maxim', age: 30, }
    ];

    const admins = users;
    admins.push({ name: 'Pavel', age: 19, });

    expect(users[3]).toEqual({ name: 'Pavel', age: 19, });
});