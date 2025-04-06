'use client';

import { useEffect, useState } from "react";

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
			<input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
		</nav>
	)
}
