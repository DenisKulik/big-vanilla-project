import { ManType } from './ManComponent';

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Denis',
        age: 26,
        lessons: [ { technology: 'react' }, { technology: 'javascript' } ],
        address: {
            street: {
                title: 'Komsololsky avenue'
            }
        }
    };
});

test('should be React developer Denis, 26, Komsomolsky avenue', () => {
    const { name, age, } = props;
    const { title } = props.address.street;
    const [ MainTechnology ] = props.lessons;

    expect(name).toBe('Denis');
    expect(age).toBe(26);
    expect(title).toBe('Komsololsky avenue');
    expect(MainTechnology.technology).toBe('react');
});