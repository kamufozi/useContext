import { Children, createContext } from "react";
const ThemeContext = createContext();
const toggleTheme = () =>{
    setTheme(prev => prev === 'light'?'dark':'light');
};
const value ={
    theme,
    toggleTheme
}
return(
    <ThemeContext.Provider value={value}>
        {Children}
    </ThemeContext.Provider>
)