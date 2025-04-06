'use client';

import { ChangeEvent, useState } from "react";
import styles from "./Toggle.module.css";

type Props = {
	state?: boolean;
	onStateChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
};

export default function Toggle({ state: inState, onStateChange }: Props) {
	const [state, setState] = useState(inState || false);

	function onChange(e: ChangeEvent<HTMLInputElement>) {
		setState(e.target.checked);

		if (onStateChange) onStateChange(e);
	}

	return (
		<div className="flex items-center">
			<div className="relative border border-primary rounded-full w-7 p-0.5">
				<input
					className="absolute top-0 left-0 size-full cursor-pointer opacity-0"
					type="checkbox"
					checked={state}
					onChange={onChange}
				/>

				<span className={"block w-2 h-2 bg-primary rounded-full pointer-events-none transition-transform " + (state ? styles.active : "")}></span>
			</div>
		</div>
	)
}
