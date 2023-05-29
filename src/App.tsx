import React, {useEffect, useReducer, useState} from 'react';

import './App.css';
import Sheet from "./sheet/Sheet";
import characterReducer from "./state/CharacterReducer";
import Character from "./model/Character";
import {characterDB} from "./indexeddb/CharacterDB";
import {AppBar, CssBaseline, IconButton, MenuItem, Select, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


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

    function CharacterSelect(): React.ReactElement {
        if (!initialized || character === null) return <></>;
        return <Select sx={{color: "white", mr: 1}}
                       value={character.id} onChange={event => onCharacterChange(event.target.value)}>
            {characters.map(character => <MenuItem
                key={character.id}
                value={character.id}>{character.clan ?? "No Clan"} - {character.characterName}</MenuItem>)}
        </Select>
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
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 4}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <CharacterSelect/>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 1}}
                        onClick={deleteCharacter}
                    >
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 1}}
                        onClick={addCharacter}
                    >
                        <AddIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Sheet character={character} characterDispatch={dispatch} initialized={initialized}/>
        </>
    );
}

