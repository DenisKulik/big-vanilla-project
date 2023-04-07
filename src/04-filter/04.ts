import { BuildingType, CityType } from '../02-objects/02_types';

export const predicate = (age: number) => age > 90;

export const demolishHousesOnTheStreet = (city: CityType,
                                          streetTitle: string) => {
    city.houses = city.houses.filter(
        house => house.address.street.title !== streetTitle);
};

export const getBuildingsWithStaffCountGreaterThen = (buildings: BuildingType[],
                                                      staff: number) => {
    return buildings.filter(building => building.staffCount > staff);
};