import {capitalizeFirstLetter} from "../Helper";
import Character from "../model/Character";

type stat = keyof Character

export enum SearchItemType {
    STAT = "stat",
}

export interface SearchItem {
    type: SearchItemType;
    value: string;
    name: string;
}

export class StatSearchItem implements SearchItem {
    stat: stat;
    name: string;

    type: SearchItemType = SearchItemType.STAT;

    get value(): string {
        return this.stat
    };


    constructor(stat: stat, name: string) {
        this.stat = stat;
        this.name = name;
    }
}

function statEntry(stat: stat): SearchItem {
    return new StatSearchItem(stat, capitalizeFirstLetter(stat));
}

const stats: stat[] = [
    "strength",
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
    "courage"
]

export const searchItems: SearchItem[] = stats.map(statEntry);
