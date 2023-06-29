// prototypes
export interface UserAction {
    type: string;
    payload: {
        userId: number;
    };
}

export interface IUser {
    name: string;
    site: string;
    dateOfBirth: string;
}

export function DeleteUserAction(this: UserAction, userId: number) {
    // this = {}
    this.type = 'DELETE-USER';
    this.payload = {
        userId
    };
}

export function User(this: IUser, name: string, site: string, dob: string) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}

User.prototype.hello = function () {
    return `I'm ${this.name} from ${this.site}`;
};

// classes
export class DeleteUserActionClass implements UserAction {
    type: string;
    payload: {
        userId: number;
    };

    constructor(userId: number) {
        this.type = 'DELETE-USER';
        this.payload = {
            userId
        };
    }
}

export interface IUserClass {
    site: string;
    dateOfBirth: string;
}

export class UserClass implements IUserClass {
    site: string;
    dateOfBirth: string;
    // @ts-ignore
    #name: string;

    constructor(name: string, site: string, dob: string) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
    }

    get name() {
        return this.#name;
    }

    set name(name: string) {
        this.#name = name;
    }

    hello() {
        return `I'm ${this.#name} from ${this.site}`;
    }
}

export class Coder extends UserClass {
    tech: string;

    constructor(name: string, site: string, dob: string, tech: string) {
        super(name, site, dob);
        this.tech = tech;
    }

    code() {
        return `I'm ${this.name}, here is my ${this.tech} code: const sum = (a, b) => a + b`;
    }
}

