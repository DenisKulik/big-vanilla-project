import {
    demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, predicate
} from './04';
import { CityType } from '../02-objects/02_types';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [ {
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        } ],
        governmentBuildings: [ {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            } ],
        citizensNumber: 1000000
    };
});

test('should take old men older then 90', () => {
    const ages = [ 18, 20, 21, 1, 100, 90, 14 ];

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('get only completed tasks', () => {
    const tasks = [
        { id: 1, title: 'Learn React', isDone: true },
        { id: 2, title: 'Read books', isDone: true },
        { id: 3, title: 'Listen podcasts', isDone: false },
        { id: 4, title: 'Workout', isDone: false },
    ];

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(2);
});

test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

});

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(
        city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});