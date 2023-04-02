export type CityType = {
    title: string,
    houses: HouseType[],
    governmentBuildings: governmentBuildings[],
    citizensNumber: number
}

type HouseType = {
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

type governmentBuildings = {
    type: string
    budget: number
    staffCount: number
    address: governmentBuildingsAddressType
}

type governmentBuildingsAddressType = {
    street: governmentBuildingsStreetType
}

type governmentBuildingsStreetType = {
    title: string
}