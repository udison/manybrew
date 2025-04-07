'use client';

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./Toggle.module.css";

interface Props {
	state?: boolean;
	circleColor?: string;
	borderColor?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export default function Toggle({ state: inState, onChange, circleColor, borderColor, className }: Props) {
	const [state, setState] = useState(inState);

	useEffect(() => {
		setState(inState || false)
	}, [inState]);

	function onCheckChange(e: ChangeEvent<HTMLInputElement>) {
		setState(e.target.checked);

		if (onChange) onChange(e);
	}

	return (
		<div className={`flex items-center ${className || ""}`}>
			<div className={`relative border rounded-full w-7 p-0.5 ${borderColor || "border-primary"}`}>
				<input
					checked={state}
					onChange={onCheckChange}
					className="absolute top-0 left-0 size-full cursor-pointer opacity-0"
					type="checkbox"
				/>

				<span className={`
					block
					w-2
					h-2
					rounded-full
					pointer-events-none
					transition-transform
					${state ? styles.active : ""}
					${circleColor || "bg-primary"}
				`}></span>
			</div>
		</div>
	)
}
