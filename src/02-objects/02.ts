type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
};

type AddressType = {
    country: string
    city: string
    street: string
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Denis',
    age: 32,
    isActive: true,
    address: {
        country: 'Russia',
        city: 'Kemerovo',
        street: 'Komsomolsky avenue'
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
};

console.log(student.age);
console.log(student.address.city);
