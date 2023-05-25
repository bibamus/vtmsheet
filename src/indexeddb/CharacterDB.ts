import Dexie from "dexie";
import Character from "../model/Character";

class CharacterDB extends Dexie {
    characters!: Dexie.Table<Character, string>;

    constructor() {
        super("CharacterDB");
        this.version(1).stores({
            characters: "id,characterName,playerName,generation,strength,dexterity,stamina,charisma,manipulation,appearance,perception,intelligence,wits,alertness,athletics,brawl,dodge,empathy,expression,intimidation,leadership,streetwise,subterfuge,animalKen,crafts,drive,etiquette,firearms,melee,performance,security,stealth,survival,academics,computer,finance,investigation,law,linguistics,medicine,occult,politics,science,conscience"
        })
    }
}

export const characterDB = new CharacterDB();