import React, {useEffect, useReducer, useState} from 'react';

import './App.css';
import Sheet from "./sheet/Sheet";
import characterReducer from "./state/CharacterReducer";
import Character from "./model/Character";
import {characterDB} from "./indexeddb/CharacterDB";
import CharacterSelect from "./character-select/CharacterSelect";

export default function App(): React.ReactElement {
    const [character, dispatch] = useReducer(characterReducer, new Character());
    const [characters, setCharacters] = useState<Character[]>([]);
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        console.log("Loading character");
        characterDB.characters.toArray().then((characters) => {
            if (characters.length > 0) {
                setCharacters(characters);
                dispatch({type: "setCharacter", character: characters[0]});
            }
            setInitialized(true);
        });
    }, []);

    useEffect(() => {
        if (initialized) {
            (async () => await characterDB.characters.put(character))()
            characterDB.characters.toArray().then((characters) => setCharacters(characters));
        }
    }, [initialized, character]);


    function onNewCharacter() {
        const character = new Character();
        setCharacters([...characters, character]);
        dispatch({type: "setCharacter", character: character});
    }

    function onCharacterChange(id: string) {
        const character = characters.find(character => character.id === id);
        if (character) {
            dispatch({type: "setCharacter", character: character});
        }
    }


    return (
        <div className={"container"}>
            <CharacterSelect characters={characters} currentCharacter={character} onCharacterChange={onCharacterChange}
                             initialized={initialized} onNewCharacter={onNewCharacter}/>
            <Sheet character={character} characterDispatch={dispatch} initialized={initialized}/>
        </div>
    );
}

