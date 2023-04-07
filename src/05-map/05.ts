import { BuildingType, HouseType } from '../02-objects/02_types';

export type ManType = {
    name: string;
    age: number;
};

export const dimychTransformator = (man: ManType) => {
    return {
        stack: [ 'css, html', 'js', 'tdd', 'react' ],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    };
};

export const getStreetsTitlesOfGovernmentBuildings = (buildings: BuildingType[]) => {
    return buildings.map(building => building.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(house => house.address.street.title);
};