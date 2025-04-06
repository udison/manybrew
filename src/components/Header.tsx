'use client';

import { useEffect, useState } from "react";
import Link from "next/link"
import Toggle from "./Toggle";
import { Moon, Sun, Coffee } from "lucide-react";

import styles from "./Header.module.css";

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
		<nav className={`${styles.navbar} flex justify-between gap-4 p-4 border-b border-primary text-xs`}>
			<ul className="flex items-center">
				<li className="mr-4">
					<Link href="/" className="flex justify-center items-center gap-1 font-mono text-brand">
						<Coffee size={14} />
						ManyBrew
					</Link>
				</li>
			</ul>

			<ul className="flex items-center gap-4 text-primary-100">
				<li className={styles.item}><Link href="/">Home</Link></li>
				<li className={styles.item}><Link href="/brew">Brew</Link></li>
				<li className={styles.item}><Link href="/coffee">Coffee</Link></li>

				<li className="flex gap-1 ml-4">
					<Sun size={14} />
					<Toggle state={dark} onStateChange={(e) => setDark(e?.target.checked || false)} />
					<Moon size={14} />
				</li>

				<li className={styles.item}><Link href="/login">Login</Link></li>
			</ul>
		</nav>
	)
}
