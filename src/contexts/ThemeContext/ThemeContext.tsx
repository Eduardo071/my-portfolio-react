import { useState, createContext } from 'react'
import { themes } from './themes';

type Tthemes = {
        backgroundColor:         string,
        borderShadowColor:       string,
        navBarBackgroundColor:   string,
        togglerBackgroundColor:  string,
        togglerIconColor:        string,
        textColor:               string,
        subTextColor:            string,
        specialTextColor:        string,
        containerPrimaryColor:   string,
        containerSecondaryColor: string,
        inputsBackgroundColor:   string,
        boxMessageColor:         string
}
interface ThemeContextType {
    theme: Tthemes;
    setTheme: React.Dispatch<React.SetStateAction<Tthemes>>;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    setTheme: () => { }
});


interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}