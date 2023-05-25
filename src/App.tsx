import React, {useEffect, useReducer, useState} from 'react';

import './App.css';
import Sheet from "./sheet/Sheet";
import characterReducer from "./state/CharacterReducer";
import Character from "./model/Character";
import {characterDB} from "./indexeddb/CharacterDB";

export default function App(): React.ReactElement {
    const [character, dispatch] = useReducer(characterReducer, new Character());
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        console.log("Loading character");
        characterDB.characters.toArray().then((characters) => {
            if (characters.length > 0) {
                dispatch({type: "setCharacter", character: characters[0]});
            }
            setInitialized(true);
        });
    }, []);

    useEffect(() => {
        if (initialized) {
            (async () => await characterDB.characters.put(character))()
        }
    }, [initialized, character]);


    return (
        <Sheet character={character} characterDispatch={dispatch} initialized={initialized}/>
    );
}

