import React, {useEffect, useReducer, useState} from 'react';

import './App.css';
import Sheet from "./sheet/Sheet";
import characterReducer from "./state/CharacterReducer";
import Character from "./model/Character";
import {characterDB} from "./indexeddb/CharacterDB";
import {CssBaseline} from "@mui/material";
import TopBar from "./topbar/TopBar";
import {SearchItem} from "./topbar/SearchItems";

export const MarkValueContext = React.createContext<SearchItem | null>(null);

export default function App(): React.ReactElement {

    const [character, dispatch] = useReducer(characterReducer, new Character());
    const [characters, setCharacters] = useState<Character[]>([]);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [markValue, setMarkValue] = React.useState<SearchItem | null>(null);


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


    function addCharacter() {
        const character = new Character();
        setCharacters([...characters, character]);
        dispatch({type: "setCharacter", character: character});
    }

    function onCharacterChange(id: string) {
        console.log(id)
        const character = characters.find(character => character.id === id);
        if (character) {
            dispatch({type: "setCharacter", character: character});
        }
    }


    function deleteCharacter() {
        if (character.id) {
            characterDB.characters.delete(character.id).then(() => {
                const newCharacters = characters.filter(value => value.id !== character.id)
                if (newCharacters.length === 0) {
                    newCharacters.push(new Character());
                }
                setCharacters(newCharacters);
                dispatch({type: "setCharacter", character: newCharacters[0]});
            });
        }
    }


    return (<>
            <CssBaseline/>
            <MarkValueContext.Provider value={markValue}>
                <TopBar onDeleteClick={deleteCharacter} onAddClick={addCharacter} character={character}
                        characters={characters} initialized={initialized} onCharacterChange={onCharacterChange}
                        markValue={markValue} setMarkValue={setMarkValue}/>
                <Sheet character={character} characterDispatch={dispatch} initialized={initialized}/>
            </MarkValueContext.Provider>
        </>
    );
}

