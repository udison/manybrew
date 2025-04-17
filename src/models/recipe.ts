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
	value: string;
}
