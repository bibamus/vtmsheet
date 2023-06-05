import {capitalizeFirstLetter} from "../Helper";

export interface SearchItem {
    type: SearchItemType;
    value: string;
    name: string;
}

export enum SearchItemType {
    STAT = "stat",
}


function statEntry(value: string): SearchItem {
    return {
        type: SearchItemType.STAT,
        value: value,
        name: capitalizeFirstLetter(value)
    }
}

export const searchItems: SearchItem[] = [
    ...["strength",
        "dexterity",
        "stamina",
        "charisma",
        "manipulation",
        "appearance",
        "perception",
        "intelligence",
        "wits",
        "alertness",
        "athletics",
        "brawl",
        "dodge",
        "empathy",
        "expression",
        "intimidation",
        "leadership",
        "streetwise",
        "subterfuge",
        "animalKen",
        "crafts",
        "drive",
        "etiquette",
        "firearms",
        "melee",
        "performance",
        "security",
        "stealth",
        "survival",
        "academics",
        "computer",
        "finance",
        "investigation",
        "law",
        "linguistics",
        "medicine",
        "occult",
        "politics",
        "science",
        "conscience",
        "selfControl",
        "courage"].map(statEntry),
]