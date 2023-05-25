import Character from "../model/Character";
import {CharacterAction} from "../state/CharacterReducer";

export default interface CharacterProps {
    character: Character;
    characterDispatch: (action: CharacterAction) => void;
}