import {capitalizeFirstLetter} from "../Helper";

export interface SearchItem {
    type: string;
    value: string;
    name: string;
}


function statEntry(value: string) {
    return {
        type: "stat",
        value: value,
        name: capitalizeFirstLetter(value)
    }
}

export const searchItems: SearchItem[] = [
    ...["strength", "dexterity", "stamina", "charisma", "manipulation", "appearance", "perception", "intelligence", "wits"].map(statEntry),
]