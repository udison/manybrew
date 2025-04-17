export type Recipe = {
	id: string;
	name: string;
	targetBrewTime: number;
	coffeeAmount: number;
	waterAmount: number;
	steps: Step[];
}

export type StepAction = "pour" | "wait" | "swirl";

export type Step = {
	time: number;
	action: StepAction;
	value: number;
}

export const jamesHoffmannSmallV60: Recipe = {
	id: "james-hoffmann-small-v60",
	name: "James Hoffmann Small V60",
	targetBrewTime: 180,
	coffeeAmount: 15,
	waterAmount: 250,
	steps: [
		// first attack
		{ time: 0, action: "pour", value: 50 },
		{ time: 10, action: "swirl", value: 0 },
		{ time: 15, action: "wait", value: 30 },

		// second attack
		{ time: 45, action: "pour", value: 50 },
		{ time: 47, action: "wait", value: 25 },

		// third attack
		{ time: 70, action: "pour", value: 50 },
		{ time: 80, action: "wait", value: 10 },

		// fourth attack
		{ time: 90, action: "pour", value: 50 },
		{ time: 100, action: "wait", value: 10 },

		// fifth attack
		{ time: 110, action: "pour", value: 50 },
		{ time: 120, action: "swirl", value: 0 },
	]
}
