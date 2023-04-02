export type CityType = {
    title: string,
    houses: HouseType[],
    governmentBuildings: BuildingType[],
    citizensNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number: number
    street: StreetType
}

type StreetType = {
    title: string
}

export type BuildingType = {
    type: string
    budget: number
    staffCount: number
    address: BuildingsAddressType
}

type BuildingsAddressType = {
    street: BuildingsStreetType
}

type BuildingsStreetType = {
    title: string
}