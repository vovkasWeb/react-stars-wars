import React, { useCallback, useContext, useState } from 'react'

export const THEME_LIGHT = "light";
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'light'

const ThemeContect = React.createContext()

export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState(null)
    const change = name =>{
        setTheme(name);
    }
	return (
		<ThemeContect.Provider
			value={{
				theme,
				change,
			}}
			{...props}
		>
			{children}
		</ThemeContect.Provider>
	)
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeProvider)
