import React, { useCallback, useContext, useState } from 'react'
import {changeCssVaribles} from '../services/changeCssVaribles'
export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'

const ThemeContect = React.createContext()

export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState(null)
	const change = name => {
		setTheme(name)
		changeCssVaribles(name);
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

export const useTheme = () => useContext(ThemeContect)
