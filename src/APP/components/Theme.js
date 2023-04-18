import React from "react";
import {useTheme, useThemeUpdate} from "../hooks/UseContexHook";

export default function Theme () {

    const theme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor :  theme ? '#333' : '#ccc',
        color : theme ? '#ccc'  : '#333',
        padding : '2rem',
        margin : '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Change Theme</button>
            <div style={themeStyles}>Theme</div>
        </>
    )
}