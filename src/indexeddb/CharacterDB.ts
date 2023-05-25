import Dexie from "dexie";
import Character from "../model/Character";

class CharacterDB extends Dexie {
    characters!: Dexie.Table<Character, string>;

    constructor() {
        super("CharacterDB");
        this.version(1).stores({
            characters: Object.keys(new Character()).join(", ")
        })
    }
}

export const characterDB = new CharacterDB();