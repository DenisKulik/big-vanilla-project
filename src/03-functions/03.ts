import { BuildingType, HouseType } from '../02-objects/02_types';

export function addMoneyToBudget(building: BuildingType, budget: number) {
    building.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: BuildingType, staffCount: number) {
    building.staffCount -= staffCount;
}

export function toHireStaff(building: BuildingType, staffCount: number) {
    building.staffCount += staffCount;
}