import Character, {Background, Discipline, Flaw, Merit} from "../model/Character";

interface BaseCharacterAction {
    type: string;
}

interface SetCharacterAction extends BaseCharacterAction {
    type: "setCharacter";
    character: Character;
}

interface SetPropertyAction<K extends keyof Character> extends BaseCharacterAction {
    type: "setProperty";
    property: K;
    value: Character[K];
}

interface SetArrayPropertyAction<K extends Discipline | Background | Merit | Flaw> extends BaseCharacterAction {
    type: "setArrayProperty";
    property: "disciplines" | "backgrounds" | "merits" | "flaws";
    value: Partial<K>;
    index: number;
}

interface AddArrayPropertyAction<K extends Discipline | Background | Merit | Flaw> extends BaseCharacterAction {
    type: "addArrayProperty";
    property: "disciplines" | "backgrounds" | "merits" | "flaws";
    value: K;
}

interface RemoveArrayPropertyAction<K extends Discipline | Background | Merit | Flaw> extends BaseCharacterAction {
    type: "removeArrayProperty";
    property: "disciplines" | "backgrounds" | "merits" | "flaws";
    value: K;
}

export type CharacterAction =
    SetCharacterAction
    | SetPropertyAction<keyof Character>
    | SetArrayPropertyAction<Discipline | Background | Merit | Flaw>
    | AddArrayPropertyAction<Discipline | Background | Merit | Flaw>
    | RemoveArrayPropertyAction<Discipline | Background | Merit | Flaw>


function removeCharacterArrayProperty(property: "disciplines" | "backgrounds" | "merits" | "flaws", value: Discipline | Background | Merit | Flaw, character: Character) {
    const newArray = [...character[property]];
    newArray.splice(newArray.indexOf(value), 1);
    return {...character, [property]: newArray};
}

export default function characterReducer(character: Character, action: CharacterAction): Character {
    switch (action.type) {
        case "setCharacter":
            return action.character;
        case "setProperty":
            return {...character, [action.property]: action.value};
        case "setArrayProperty":
            return setCharacterArrayProperty(action.property, action.index, action.value, character);
        case "addArrayProperty":
            return addCharacterArrayProperty(action.property, action.value, character);
        case "removeArrayProperty":
            return removeCharacterArrayProperty(action.property, action.value, character);

    }
}

function setCharacterArrayProperty<T extends Discipline | Background | Merit | Flaw>(
    propertyName: "disciplines" | "backgrounds" | "merits" | "flaws",
    index: number,
    value: Partial<T>,
    character: Character,
) {
    const newArray = [...character[propertyName]];
    newArray[index] = {...newArray[index], ...value};
    return {...character, [propertyName]: newArray};
}

function addCharacterArrayProperty<T extends Discipline | Background | Merit | Flaw>(
    propertyName: "disciplines" | "backgrounds" | "merits" | "flaws",
    value: T,
    character: Character,
) {
    const newArray = [...character[propertyName]];
    newArray.push(value);
    return {...character, [propertyName]: newArray};
}
