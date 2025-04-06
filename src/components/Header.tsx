'use client';

import { useEffect, useState } from "react";
import Toggle from "./Toggle";

export default function Header() {
	const [dark, setDark] = useState(true);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark])

	return (
		<nav
			className="flex items-center justify-start h-14"
		>
			Hello Nav!
			<Toggle state={dark} onStateChange={(e) => setDark(e?.target.checked || false)} />
			{/* <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} /> */}
		</nav>
	)
}
