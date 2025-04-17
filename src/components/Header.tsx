'use client';

import { useContext } from "react";
import { Moon, Sun } from "lucide-react";

import styles from "./Header.module.css";
import Image from "next/image";
import { Button } from "./Button";
import { ThemeContext } from "@/contexts/ThemeContext";
import TransitionalLink from "./TransitionalLink";

export default function Header() {
	const { theme, setTheme } = useContext(ThemeContext)!;

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<nav className={`${styles.navbar} backdrop-blur-sm sticky top-0 flex justify-between gap-4 p-4 border-b border-gray-700/20 dark:border-gray-400/30 text-xl z-10`}>
			<ul className="flex items-center">
				<li className="mr-4">
					<TransitionalLink href="/" className={`${styles.item} flex justify-center items-center gap-1 font-mono text-brand`}>
						<Image className="hidden sm:block" src="logo.svg" alt="Logo" width={191} height={37} />
						<Image className="block sm:hidden" src="logo-icon.svg" alt="Logo" width={37} height={37} />
					</TransitionalLink>
				</li>
			</ul>

			<ul className="flex items-center gap-4 text-gray-700 dark:text-gray-400">
				<li className={`${styles.item} hidden sm:list-item`}><TransitionalLink href="/">Home</TransitionalLink></li>
				<li className={`${styles.item} hidden sm:list-item`}><TransitionalLink href="/brew">Brew</TransitionalLink></li>

				<li className="flex">
					<Button onClick={toggleTheme} size="icon-md">
						{theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
					</Button>
				</li>
			</ul>
		</nav>
	)
}
