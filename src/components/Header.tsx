'use client';

import { useEffect, useState } from "react";
import Link from "next/link"
import Toggle from "./Toggle";
import { Moon, Sun } from "lucide-react";

import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		setDark(prefersDarkMode);
	}, [])

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark])

	return (
		<nav className={`${styles.navbar} sticky top-0 flex justify-between gap-4 p-4 border-b border-gray-700 dark:border-gray-400 text-xs`}>
			<ul className="flex items-center">
				<li className="mr-4">
					<Link href="/" className="flex justify-center items-center gap-1 font-mono text-brand">
						<Image src="logo.svg" alt="Logo" width={80} height={16} />
					</Link>
				</li>
			</ul>

			<ul className="flex items-center gap-4 text-gray-700 dark:text-gray-400">
				<li className={styles.item}><Link href="/">Home</Link></li>
				<li className={styles.item}><Link href="/brew">Brew</Link></li>
				<li className={styles.item}><Link href="/coffee">Coffee</Link></li>

				<li className="flex gap-1 ml-4">
					<Sun size={14} />
					<Toggle borderColor="border-gray-700 dark:border-gray-400" circleColor="bg-gray-700 dark:bg-gray-400" state={dark} onChange={(e) => setDark(e?.target.checked || false)} />
					<Moon size={14} />
				</li>

				<li className={styles.item}><Link href="/login">Login</Link></li>
			</ul>
		</nav>
	)
}
