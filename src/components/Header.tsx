'use client';

import { useEffect, useState } from "react";
import Link from "next/link"
import Toggle from "./Toggle";
import { Moon, Sun, Coffee } from "lucide-react";

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function Header() {
	const [dark, setDark] = useState(prefersDarkMode);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark])

	return (
		<nav>
			<ul className="flex items-center gap-4 h-14 p-4 border-b border-primary">
				<li className="mr-4">
					<Link href="/" className="flex justify-center items-center gap-1 font-mono">
						<Coffee size={14} />
						ManyBrew
					</Link>
				</li>

				<li><Link href="/brew">Brew</Link></li>

				<li className="flex gap-1">
					<Sun size={14} />
					<Toggle state={dark} onStateChange={(e) => setDark(e?.target.checked || false)} />
					<Moon size={14} />
				</li>
			</ul>
		</nav>
	)
}
