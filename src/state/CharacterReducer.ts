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

export type CharacterAction =
    SetCharacterAction
    | SetPropertyAction<keyof Character>
    | SetArrayPropertyAction<Discipline | Background | Merit | Flaw>;


export default function characterReducer(character: Character, action: CharacterAction): Character {
    console.log(action)
    switch (action.type) {
        case "setCharacter":
            return action.character;
        case "setProperty":
            return {...character, [action.property]: action.value};
        case "setArrayProperty":
            return setCharacterArrayProperty(action.property, action.index, action.value, character);

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
