import React, {useEffect} from "react";
import {AppBar, Box, IconButton, InputBase, MenuItem, Popper, Select, Toolbar} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Character from "../model/Character";
import {searchItems} from "./SearchItems";


interface TopBarProps {
    initialized: boolean;
    character: Character;
    characters: Character[];
    onDeleteClick: () => void;
    onAddClick: () => void;
    onCharacterChange: (id: string) => void;
}


export default function TopBar({
                                   initialized,
                                   character,
                                   characters,
                                   onAddClick,
                                   onDeleteClick,
                                   onCharacterChange
                               }: TopBarProps) {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [open, setOpen] = React.useState(false);

    function CharacterSelect(): React.ReactElement {
        if (!initialized || character === null) return <></>;
        return <Select sx={{color: "white", mr: 1}}
                       value={character.id} onChange={event => onCharacterChange(event.target.value)}>
            {characters.map(character => <MenuItem
                key={character.id}
                value={character.id}>{character.clan ?? "No Clan"} - {character.characterName}</MenuItem>)}
        </Select>
    }

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    let anchorRef = React.useRef<HTMLDivElement>(null);

    function search(value: string) {
        setOpen(value.length > 0);
    }

    useEffect(() => {
        setAnchorEl(anchorRef.current)
    }, [anchorRef]);

    function AutoCompleteBox(): React.ReactElement {


        return <Box sx={{backgroundColor: "white", border: "solid thin black"}}>
            {searchItems.map(item => <MenuItem key={item.value} onClick={() => {

            }}>{item.name}</MenuItem>)}
        </Box>;
    }


    return <>
        <AppBar position={"static"}>
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
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{flexGrow: 1}} ref={anchorRef}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{"aria-label": "search"}}

                            onChange={event => search(event.target.value)}/>
                    </Search>
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <CharacterSelect/>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 1}}
                    onClick={onDeleteClick}
                >
                    <DeleteIcon/>
                </IconButton>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 1}}
                    onClick={onAddClick}
                >
                    <AddIcon/>
                </IconButton>
            </Toolbar>

        </AppBar>
        <Popper open={open} anchorEl={anchorEl}>
            <AutoCompleteBox/>
        </Popper>
    </>;
}
