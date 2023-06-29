import {
    DeleteUserAction, DeleteUserActionClass, UserAction, User, IUser, UserClass,
    IUserClass, Coder
} from './12';

describe('UserAction', () => {
    it('should create a new instance of UserAction with correct type and payload using function constructor',
        () => {
            const userId = 123;
            const action = new (DeleteUserAction as any)(userId);
            const expectedAction: UserAction = {
                type: 'DELETE-USER',
                payload: {
                    userId,
                },
            };
            expect(action).toEqual(expectedAction);
        });

    it('should create a new instance of UserAction with correct type and payload using class',
        () => {
            const userId = 456;
            const action = new DeleteUserActionClass(userId);
            const expectedAction: UserAction = {
                type: 'DELETE-USER',
                payload: {
                    userId,
                },
            };
            expect(action).toEqual(expectedAction);
        });

    it('should create a new instance of IUser with correct properties using function constructor',
        () => {
            const name = 'John';
            const site = 'example.com';
            const dob = '01/01/2000';
            const user = new (User as any)(name, site, dob);
            const expectedUser: IUser = {
                name,
                site,
                dateOfBirth: dob,
            };
            expect(user).toEqual(expectedUser);
        });

    it('should return a correct greeting for IUser using prototype method',
        () => {
            const name = 'John';
            const site = 'example.com';
            const dob = '01/01/2000';
            const user = new (User as any)(name, site, dob);
            const expectedGreeting = `I'm ${name} from ${site}`;
            expect(user.hello()).toEqual(expectedGreeting);
        });

    it('should create a new instance of IUserClass with correct properties using class',
        () => {
            const name = 'John';
            const site = 'example.com';
            const dob = '01/01/2000';
            const user = new UserClass(name, site, dob);
            const expectedUser: IUserClass = {
                site,
                dateOfBirth: dob,
            };
            expect(user).toMatchObject(expectedUser);
            expect(user.name).toEqual(name);
        });

    it('should set and get the name property of IUserClass using class setter and getter methods',
        () => {
            const name = 'John';
            const site = 'example.com';
            const dob = '01/01/2000';
            const user = new UserClass(name, site, dob);
            const newName = 'Jane';
            user.name = newName;
            expect(user.name).toEqual(newName);
        });

    it('should return a correct greeting for IUserClass using class method',
        () => {
            const name = 'John';
            const site = 'example.com';
            const dob = '01/01/2000';
            const user = new UserClass(name, site, dob);
            const expectedGreeting = `I'm ${name} from ${site}`;
            expect(user.hello()).toEqual(expectedGreeting);
        });

    it('should return the correct code string with the name of the coder',
        () => {
            const coder = new Coder('Alice', 'example.com', '01/01/2000', 'JS');
            const expectedCode = `I'm Alice, here is my JS code: const sum = (a, b) => a + b`;
            expect(coder.code()).toEqual(expectedCode);
        });
});