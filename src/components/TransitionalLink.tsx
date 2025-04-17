"use client";

import { sleep } from "@/helpers/time";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

interface TransitionalLinkProps extends LinkProps {
	children: ReactNode
}

export default function TransitionalLink({
	children, href, ...props
}: TransitionalLinkProps) {
	const router = useRouter();

	async function onLinkClick(event: MouseEvent) {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (prefersReducedMotion || window.location.pathname === href) {
			return;
		}

		event.preventDefault();

		const main = document.querySelector("main");

		main?.classList.add("fade-out-page");
		await sleep(400);

		router.push(href.toString());
		await sleep(400);

		main?.classList.remove("fade-out-page");
	}

	return (
		<Link onClick={onLinkClick} href={href} {...props}>{children}</Link>
	)
}
