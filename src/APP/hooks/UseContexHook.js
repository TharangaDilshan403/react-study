import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext(undefined);
const ThemeUpdateContext = createContext(undefined);

export function useTheme (){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
   return  useContext(ThemeUpdateContext)
}
export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}