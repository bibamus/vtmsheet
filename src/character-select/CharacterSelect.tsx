import Character from "../model/Character";

interface CharacterSelectProps {
    characters: Character[];
    currentCharacter: Character;
    initialized: boolean;
    onNewCharacter: () => void;
    onCharacterChange: (id: string) => void;
}


export default function CharacterSelect({
                                            characters,
                                            currentCharacter,
                                            initialized,
                                            onNewCharacter,
                                            onCharacterChange
                                        }: CharacterSelectProps): React.ReactElement {


    if (!initialized) return <div>Loading...</div>
    return <div>
        {characters.map(character => <div onClick={() => onCharacterChange(character.id)}
                                          className={`character-selection-row ${character.id === currentCharacter.id ? " selected-character" : ""}`}
                                          key={character.id}>{character.characterName}
        </div>)}
        <button onClick={onNewCharacter}>Add Character</button>
    </div>
}