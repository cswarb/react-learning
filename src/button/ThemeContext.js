import React from 'react';

export const themes = {
    dark: {
        bgColor: "#000",
        color: "#FFF"
    },
    light: {
        bgColor: "#FFF",
        color: "#000"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    updateTheme: () => { }
});