"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (prefersDarkMode) {
			setTheme("dark");
		}
	}, [])

	useEffect(() => {
		document.documentElement.classList.toggle("light", theme === "light");
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme])

	return (
		<ThemeContext.Provider value={{
			theme, setTheme
		}}>
			{children}
		</ThemeContext.Provider>
	)
}
